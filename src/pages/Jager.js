import React from 'react';
import './Pages.css';

const Jager = () => {
  // Baloncuk komponentleri oluştur
  const bubbles = Array.from({ length: 20 }, (_, i) => (
    <div key={i} className={`bubble bubble-${i + 1}`}></div>
  ));

  return (
    <main className="page page-content page-jager">
      {/* Baloncuk animasyon katmanı */}
      <div className="bubbles-container">
        {bubbles}
      </div>
      
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className="jager-hero">
          <h1 className="jager-title">JALEX</h1>
          <h2 className="jager-subtitle">DETERJAN GRUBU HİZMETLERİMİZ</h2>
          <div className="jager-content">
            <p className="jager-description">
              Ürünlerimiz yakında hizmetinizde olacaktır...
            </p>
            <div className="coming-soon-badge">
              <span>YAKINDA HİZMETE AÇILACAKTIR</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jager;