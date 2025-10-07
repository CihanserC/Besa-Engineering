import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Products = () => {
  const categories = [
    {
      id: 'havuz',
      title: 'Havuz',
      subtitle: 'POOL',
      description: 'Havuz Bakım ve Donanım',
      image: '/src/components/Images/P001.png',
      color: 'from-blue-400 to-blue-600',
      link: '/products/pool'
    },
    {
      id: 'sulama',
      title: 'Sulama Sistemleri',
      subtitle: 'IRRIGATION', 
      description: 'Modern Sulama Çözümleri',
      image: '/src/components/Images/P002.png',
      color: 'from-blue-500 to-blue-700',
      link: '/products/irrigation'
    },
    {
      id: 'peyzaj',
      title: 'Peyzaj Ürünleri',
      subtitle: 'LANDSCAPE',
      description: 'Bahçe ve Peyzaj Malzemeleri', 
      image: '/src/components/Images/P003.png',
      color: 'from-blue-600 to-blue-800',
      link: '/products/landscape'
    }
  ];

  return (
    <main className="page page-content page-products">
      <div className="container">
        <h1 className="page-title">Ürünlerimiz</h1>
        
        <div className="products-intro">
          <p className="intro-text">
            Siz Değerli Müşterilerimiz için daima en iyisini ve kalitesini üretmeye devam 
            ediyoruz. Daha fazla bilgi için bizimle iletişe geçebilirsiniz.
          </p>
        </div>

        <div className="product-cardboards">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="product-cardboard"
            >
              <div className="cardboard-inner">
                <div className="cardboard-image-container">
                  <div className="cardboard-image">
                    {/* Solid blue background - no image */}
                  </div>
                </div>
                
                <div className="cardboard-center">
                  <h2 className="cardboard-main-title">{category.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;