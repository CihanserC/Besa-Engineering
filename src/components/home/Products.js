import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import productsData from '../../data/products.json';

const Carousel = ({ items, title, alignment = 'center' }) => {
  const trackRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const visibleCount = 5; // show up to 5 cards in the viewport

  // compute step dynamically based on card width + gap
  function computeStep() {
    if (!trackRef.current) return 300;
    const track = trackRef.current;
    const trackStyle = window.getComputedStyle(track);
    // try to read CSS vars --card-w and --card-gap from the track; fall back to measuring a card
    let cardW = parseFloat(trackStyle.getPropertyValue('--card-w')) || 0;
    let gap = parseFloat(trackStyle.getPropertyValue('--card-gap')) || 0;

    if (!cardW || !gap) {
      const card = track.querySelector('.product-card');
      if (card) {
        const cardStyle = window.getComputedStyle(card);
        cardW = cardW || parseFloat(cardStyle.getPropertyValue('flex-basis')) || parseFloat(cardStyle.width) || 220;
        const second = card.nextElementSibling;
        if (second) {
          gap = gap || (second.offsetLeft - (card.offsetLeft + card.offsetWidth));
        }
      }
    }

    if (!cardW) cardW = 220;
    if (!gap || gap <= 0) gap = 16;
    return Math.round((cardW + gap) * visibleCount);
  }

  // pointer drag-to-scroll
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false;
    let startX, scrollLeft;
    let hasMoved = false;
    const dragThreshold = 6; // pixels

    const onPointerDown = (e) => {
      isDown = true;
      hasMoved = false;
      startX = e.pageX || e.touches?.[0]?.pageX;
      scrollLeft = el.scrollLeft;
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches?.[0]?.pageX;
      const walk = (startX - x);
      if (Math.abs(walk) > dragThreshold) {
        hasMoved = true;
        setIsDragging(true);
        el.classList.add('dragging');
      }
      el.scrollLeft = scrollLeft + walk;
    };

    const onPointerUp = () => {
      isDown = false;
      el.classList.remove('dragging');
      // Keep isDragging true for a short time to prevent accidental clicks
      if (hasMoved) {
        setTimeout(() => {
          setIsDragging(false);
        }, 100);
      } else {
        setIsDragging(false);
      }
    };

  el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  function scrollBy(amount) {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  }

  return (
    <div className="product-row">
      <h3 className="row-title">{title}</h3>
      <div className="row-controls">
  <button aria-label="left" className="row-btn left" style={{ display: items.length > visibleCount ? 'block' : 'none' }} onClick={() => scrollBy(-computeStep())}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="#064a6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div ref={trackRef} className={`product-track ${alignment === 'left' ? 'track-left-aligned' : ''}`}>
          {items.map(p => {
            // Resolve image from src/components/Images using product id first, then fallback to JSON image (public)
            let imgSrc = `${process.env.PUBLIC_URL}/${p.image}`;
            try {
              imgSrc = require(`../Images/${p.id}.png`);
            } catch (e1) {
              try { imgSrc = require(`../Images/${p.id}.webp`); } catch (e2) {
                try { imgSrc = require(`../Images/${p.id}.jpg`); } catch (e3) {
                  // fallback to public image from JSON
                  imgSrc = `${process.env.PUBLIC_URL}/${p.image}`;
                }
              }
            }

            return (
              <Link to={`/product/${p.id}`} key={p.id} className="product-card-link" onClick={(ev) => {
                // prevent navigation if user was dragging
                if (isDragging) {
                  ev.preventDefault();
                  ev.stopPropagation();
                }
              }}>
                <article className="product-card">
                  <div className="product-thumb" style={{ backgroundImage: `url(${imgSrc})` }} />
                  <div className="product-title">{p.name}</div>
                </article>
              </Link>
            );
          })}
        </div>
        <button aria-label="right" className="row-btn right" style={{ display: items.length > visibleCount ? 'block' : 'none' }} onClick={() => scrollBy(computeStep())}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="#064a6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const [products] = useState(productsData);

  const best = products.filter(p => p.bestSeller); // Show all best seller products
  const featured = products.filter(p => p.featured); // Show all featured products
  const discounted = products.filter(p => p.discounted); // Show all discounted products

  return (
    <section className="products-section container page-content">
      <h2 className="section-main">Ürünlerimiz</h2>
      <div className="products-wrap">
        <Carousel items={best} title="En Çok Satanlar" />
        <Carousel items={featured} title="Öne Çıkan Ürünler" />
        <Carousel items={discounted} title="İndirimli Ürünler" alignment="left" />
      </div>
    </section>
  );
};

export default Products;