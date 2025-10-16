import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [availableImages, setAvailableImages] = useState([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Ürünün tüm mevcut fotoğraflarını bulma fonksiyonu
  const findAllProductImages = (imageName) => {
    const images = [];
    
    // Ana fotoğrafı kontrol et
    const mainImage = getImagePath(imageName);
    if (mainImage) {
      images.push({ src: mainImage, name: imageName });
    }

    // Alternatif fotoğrafları kontrol et (101_1, 101_2, vb.)
    let counter = 1;
    let foundImage = true;
    
    while (foundImage) {
      const altImageName = `${imageName}_${counter}`;
      const altImage = getImagePath(altImageName);
      
      if (altImage) {
        images.push({ src: altImage, name: altImageName });
        counter++;
      } else {
        foundImage = false;
      }
    }

    return images;
  };

  // Görsel import fonksiyonu - png ve jpg destekli
  const getImagePath = (imageName) => {
    // Önce dosya uzantısını kontrol et
    if (imageName && imageName.includes('.')) {
      try {
        return require(`../components/Images/ProductImages/${imageName}`);
      } catch (err) {
        console.log('Image not found with extension:', imageName);
        return null;
      }
    }
    
    // Uzantı yoksa önce .png sonra .jpg dene
    try {
      return require(`../components/Images/ProductImages/${imageName}.png`);
    } catch (err) {
      try {
        return require(`../components/Images/ProductImages/${imageName}.jpg`);
      } catch (err2) {
        console.log('Image not found for:', imageName);
        return null;
      }
    }
  };

  // Component mount olduğunda mevcut fotoğrafları bul
  useEffect(() => {
    if (product && product.image) {
      const images = findAllProductImages(product.image);
      setAvailableImages(images);
      setCurrentImageIndex(0);
    }
  }, [product]);

  const handleGoBack = () => {
    navigate(-1); // Bir önceki sayfaya dön
  };

  // Fotoğraf geçiş fonksiyonları
  const nextImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(prev => 
        prev === availableImages.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(prev => 
        prev === 0 ? availableImages.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  // Thumbnail'a tıklayınca direkt geçiş
  const goToImage = (index) => {
    if (index === currentImageIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Modal kontrol fonksiyonları
  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  // Modal için klavye kontrolü
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isImageModalOpen) {
        if (event.key === 'Escape') {
          closeImageModal();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageModalOpen]);

  if (!product) return (
    <div className="container page-content">
      <h2>Ürün bulunamadı</h2>
      <p>Aradığınız ürün mevcut değil.</p>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );

  return (
    <section className="container page-content product-detail" aria-labelledby="product-title">
      {/* Back button positioned in top-left corner */}
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
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Fotoğraf büyütme butonu */}
              <button 
                className="image-zoom-btn" 
                onClick={openImageModal}
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
              
              {/* Navigasyon okları - sadece birden fazla fotoğraf varsa göster */}
              {availableImages.length > 1 && (
                <>
                  <button 
                    className="image-nav-btn prev-btn" 
                    onClick={prevImage}
                    disabled={isTransitioning}
                    aria-label="Önceki fotoğraf"
                  >
                    &#8249;
                  </button>
                  <button 
                    className="image-nav-btn next-btn" 
                    onClick={nextImage}
                    disabled={isTransitioning}
                    aria-label="Sonraki fotoğraf"
                  >
                    &#8250;
                  </button>
                  
                  {/* Fotoğraf sayacı */}
                  <div className="image-counter">
                    {currentImageIndex + 1} / {availableImages.length}
                  </div>
                  
                  {/* Thumbnail navigasyon */}
                  <div className="image-thumbnails">
                    {availableImages.map((img, index) => (
                      <img
                        key={index}
                        src={img.src}
                        alt={`${product.name} ${index + 1}`}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="product-detail-no-image">
              <span>Görsel Yok</span>
            </div>
          )}
        </div>

        <div className="product-detail-content">
          <h1 id="product-title" className="product-detail-title">{product.name}</h1>

          <div className="product-detail-desc">
            {product.description && (
              <div>
                {product.description.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                  <div key={index} className="description-line">
                    <span className="bullet">•</span>
                    <span className="text">{line.trim()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fotoğraf Modal */}
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={closeImageModal}
              aria-label="Kapat"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <div className="modal-image-container">
              <div className={`modal-image-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
                <img
                  src={availableImages[currentImageIndex]?.src}
                  alt={product.name}
                  className="modal-image"
                />
              </div>
              
              {/* Modal navigasyon - sadece birden fazla fotoğraf varsa */}
              {availableImages.length > 1 && (
                <>
                  <button 
                    className="modal-nav-btn modal-prev-btn" 
                    onClick={prevImage}
                    disabled={isTransitioning}
                    aria-label="Önceki fotoğraf"
                  >
                    &#8249;
                  </button>
                  <button 
                    className="modal-nav-btn modal-next-btn" 
                    onClick={nextImage}
                    disabled={isTransitioning}
                    aria-label="Sonraki fotoğraf"
                  >
                    &#8250;
                  </button>
                  
                  {/* Modal fotoğraf sayacı */}
                  <div className="modal-image-counter">
                    {currentImageIndex + 1} / {availableImages.length}
                  </div>
                </>
              )}
            </div>
            
            {/* Modal thumbnail navigasyon */}
            {availableImages.length > 1 && (
              <div className="modal-thumbnails">
                {availableImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`${product.name} ${index + 1}`}
                    className={`modal-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
