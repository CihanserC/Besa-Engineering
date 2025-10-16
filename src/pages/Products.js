import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// Icon imports
import HavuzUrunleriIcon from '../components/Images/HavuzUrunleriIcon.png';
import HavuzEkipmanlariIcon from '../components/Images/HavuzEkipmanlariIcon.png';
import HavuzKimyasallariIcon from '../components/Images/HavuzKimyasallariIcon.png';
import SulamaSistemleriIcon from '../components/Images/SulamaSistemleriIcon.png';
import HunterSulamaIcon from '../components/Images/HunterSulamaIcon.png';
import PoelsanSulamaIcon from '../components/Images/PoelsanSulamaIcon.png';

const Products = () => {
  const productCategories = [
    {
      id: 'havuz',
      title: 'Havuz Ürünleri',
      icon: HavuzUrunleriIcon,
      description: 'Profesyonel havuz bakım ve donanım ürünleri',
      subcategories: [
        {
          name: 'Havuz Ekipmanları',
          path: '/products/pool/equipment',
          description: 'Filtreler, pompalar, merdivenler ve daha fazlası',
          icon: HavuzEkipmanlariIcon
        },
        {
          name: 'Havuz Kimyasalları',
          path: '/products/pool/chemicals',
          description: 'pH dengeleyiciler, klor ve bakım kimyasalları',
          icon: HavuzKimyasallariIcon
        }
      ]
    },
    {
      id: 'sulama',
      title: 'Sulama Sistemleri',
      icon: SulamaSistemleriIcon,
      description: 'Modern ve verimli sulama çözümleri',
      subcategories: [
        {
          name: 'Hunter Sulama',
          path: '/products/irrigation/hunter',
          description: 'Otomatik sulama sistemleri ve sprinkler çözümleri',
          icon: HunterSulamaIcon
        },
        {
          name: 'Poelsan Sulama',
          path: '/products/irrigation/poelsan',
          description: 'Damlama sulama ve ek parçaları',
          icon: PoelsanSulamaIcon
        }
      ]
    }
  ];

  return (
    <main className="page page-content page-products-overview">
      <div className="container">
        <div className="products-overview-header">
          <h1 className="page-title">Ürün Kategorilerimiz</h1>
          <p className="overview-subtitle">
            Siz değerli müşterilerimiz için daima en iyisini ve kalitesini üretmeye devam 
            ediyoruz. Kategorileri inceleyerek ürünlerimize göz atabilirsiniz.
          </p>
        </div>

        <div className="categories-grid">
          {productCategories.map(category => (
            <div key={category.id} className="category-section">
              <div className="category-header">
                <div className="category-icon">
                  <img src={category.icon} alt={category.title} />
                </div>
                <div className="category-header-text">
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="subcategories-grid">
                {category.subcategories.map((sub, index) => (
                  <Link 
                    key={index} 
                    to={sub.path} 
                    className="subcategory-card"
                  >
                    <div className="subcategory-icon">
                      <img src={sub.icon} alt={sub.name} />
                    </div>
                    <h3 className="subcategory-name">{sub.name}</h3>
                    <p className="subcategory-description">{sub.description}</p>
                    <div className="subcategory-arrow">→</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;