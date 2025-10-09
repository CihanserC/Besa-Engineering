import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1); // Bir önceki sayfaya dön
  };

  if (!product) return (
    <div className="container page-content">
      <h2>Ürün bulunamadı</h2>
      <p>Aradığınız ürün mevcut değil.</p>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );

  // attempt to resolve an image from src/components/Images/ProductImages using the product image name
  let imgSrc = null;
  
  try {
    // Use the image name from the product data (e.g., "1.png", "2.png")
    imgSrc = require(`../components/Images/ProductImages/${product.image}`);
  } catch (e) {
    console.log('Image not found:', product.image);
    // fallback to a placeholder or hide image
    imgSrc = null;
  }

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
          {imgSrc ? (
            <img src={imgSrc} alt={product.name} className="product-detail-img" />
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
    </section>
  );
};

export default ProductDetail;
