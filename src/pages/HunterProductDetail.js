import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import './Pages.css';

const HunterProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Use require.context for robust image resolution
  const imagesCtx = useMemo(() => {
    try {
      return require.context('../components/Images/ProductImages', false, /\.(png|jpe?g)$/);
    } catch (e) {
      return null;
    }
  }, []);

  const resolveFirstExisting = (candidates) => {
    if (!imagesCtx) return null;
    const keys = new Set(imagesCtx.keys());
    for (const file of candidates) {
      const key = `./${file}`;
      if (keys.has(key)) {
        try { return imagesCtx(key); } catch (_) {}
      }
    }
    return null;
  };

  const buildCandidates = (stem) => {
    if (!stem) return [];
    const base = String(stem).trim().replace(/^\.\//, '').replace(/\.(png|jpe?g)$/i, '');
    const exts = ['.jpg', '.png', '.jpeg'];
    const suffixes = ['', '_1', '_2', '_3'];
    const out = [];
    suffixes.forEach(sfx => exts.forEach(ext => out.push(`${base}${sfx}${ext}`)));
    return out;
  };

  const availableImages = useMemo(() => {
    if (!product) return [];
    const candidates = [
      ...buildCandidates(product.image),
      ...buildCandidates(product.id)
    ];
    // collect main and suffixed images in order
    const imgs = [];
    const seen = new Set();
    const keys = imagesCtx ? new Set(imagesCtx.keys().map(k => k.replace(/^\.\//, ''))) : new Set();
    for (const file of candidates) {
      if (seen.has(file)) continue;
      if (keys.has(file)) {
        try { imgs.push({ src: imagesCtx(`./${file}`), name: file }); } catch (_) {}
        seen.add(file);
      }
    }
    return imgs;
  }, [product, imagesCtx]);

  useEffect(() => { setCurrentImageIndex(0); }, [product?.id]);

  const nextImage = () => {
    if (isTransitioning || availableImages.length < 2) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((i) => (i + 1) % availableImages.length);
      setIsTransitioning(false);
    }, 300);
  };
  const prevImage = () => {
    if (isTransitioning || availableImages.length < 2) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((i) => (i - 1 + availableImages.length) % availableImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'tech'

  if (!product) {
    return (
      <section className="container page-content product-detail">
        <h2>Ürün bulunamadı</h2>
      </section>
    );
  }

  const handleGoBack = () => navigate(-1);

  return (
    <section className="container page-content product-detail" aria-labelledby="product-title">
      <div className="product-detail-back-btn">
        <button onClick={handleGoBack} className="btn btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
            <path d="M19 12H5"/>
            <path d="m12 19-7-7 7-7"/>
          </svg>
          Geri
        </button>
      </div>

      <div className="product-detail-card">
        <div className="product-detail-media">
          {availableImages.length > 0 ? (
            <div className="image-gallery">
              <div className={`image-container ${isTransitioning ? 'transitioning' : ''}`}>
                <img
                  src={availableImages[currentImageIndex]?.src}
                  alt={product.name}
                  className="product-detail-img"
                />
                {/* Zoom button */}
                <button 
                  className="image-zoom-btn" 
                  onClick={() => setIsImageModalOpen(true)}
                  aria-label="Fotoğrafı büyüt"
                  title="Fotoğrafı büyüt"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </button>
              </div>
              {availableImages.length > 1 && (
                <>
                  <button className="image-nav-btn prev-btn" onClick={prevImage} aria-label="Önceki fotoğraf">&#8249;</button>
                  <button className="image-nav-btn next-btn" onClick={nextImage} aria-label="Sonraki fotoğraf">&#8250;</button>
                  <div className="image-counter">{currentImageIndex + 1} / {availableImages.length}</div>
                </>
              )}
            </div>
          ) : (
            <div className="product-detail-no-image"><span>Görsel Yok</span></div>
          )}
        </div>

        <div className="product-detail-content">
          <h1 id="product-title" className="product-detail-title">{product.name}</h1>
          <div className="product-detail-desc">
            {product.description && product.description.split('\n').filter(l => l.trim() !== '').map((line, idx) => (
              <div key={idx} className="description-line"><span className="bullet">•</span><span className="text">{line.trim()}</span></div>
            ))}
          </div>
        </div>

        {/* Tabs for detailedDescription and technicalInfo - full width under both columns */}
        {(product.detailedDescription || product.technicalInfo) && (
          <div className="product-tabs">
            <div className="product-tab-headers">
              {product.detailedDescription && (
                <button className={`product-tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Detaylı Açıklama</button>
              )}
              {product.technicalInfo && (
                <button className={`product-tab ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => setActiveTab('tech')}>Teknik Özellikler</button>
              )}
            </div>
            <div className="product-tab-content">
              {activeTab === 'details' && product.detailedDescription && (
                <div className="tab-text" style={{whiteSpace: 'pre-wrap'}}>{product.detailedDescription}</div>
              )}
              {activeTab === 'tech' && product.technicalInfo && (
                <div className="tab-text" style={{whiteSpace: 'pre-wrap'}}>{product.technicalInfo}</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Simple modal for fullscreen if needed later */}
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={() => setIsImageModalOpen(false)}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsImageModalOpen(false)} aria-label="Kapat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="modal-image-container">
              <img src={availableImages[currentImageIndex]?.src} alt={product.name} className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HunterProductDetail;
