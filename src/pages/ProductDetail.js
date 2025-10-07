import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="container page-content">
      <h2>Ürün bulunamadı</h2>
      <p>Aradığınız ürün mevcut değil.</p>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );

  // attempt to resolve an image from src/components/Images using the product id
  let imgSrc = `${process.env.PUBLIC_URL}/${product.image}`;
  try {
    // try png first
    imgSrc = require(`../components/Images/${product.id}.png`);
  } catch (e1) {
    try {
      imgSrc = require(`../components/Images/${product.id}.jpg`);
    } catch (e2) {
      // fallback to the image name stored in JSON (public folder)
      imgSrc = `${process.env.PUBLIC_URL}/${product.image}`;
    }
  }

  return (
    <section className="container page-content product-detail" aria-labelledby="product-title">
      {/* Back button positioned in top-left corner */}
      <div className="product-detail-back-btn">
        <Link to="/" className="btn btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
            <path d="M19 12H5"/>
            <path d="m12 19-7-7 7-7"/>
          </svg>
          Geri
        </Link>
      </div>

      <div className="product-detail-card">
        <div className="product-detail-media">
          <img src={imgSrc} alt={product.name} className="product-detail-img" />
        </div>

        <div className="product-detail-content">
          <h1 id="product-title" className="product-detail-title">{product.name}</h1>
          <p className="muted product-meta">Ürün kodu: {product.id} • Kategori: {product.category}</p>

          <div className="product-detail-desc">
            {product.description && <p>{product.description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
