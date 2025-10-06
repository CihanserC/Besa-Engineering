import React from 'react';
import Card from '../shared/Card';

const Products = () => {
  // Örnek ürün verileri
  const featuredProducts = [
    {
      id: 1,
      name: "Havuz Filtresi",
      description: "Yüksek performanslı havuz filtresi",
      category: "pool",
      image: "placeholder.jpg"
    },
    {
      id: 2,
      name: "Otomatik Sulama Sistemi",
      description: "Akıllı bahçe sulama sistemi",
      category: "irrigation",
      image: "placeholder.jpg"
    },
    {
      id: 3,
      name: "Peyzaj Aydınlatması",
      description: "LED bahçe aydınlatma seti",
      category: "landscape",
      image: "placeholder.jpg"
    }
  ];

  return (
    <section className="featured-products">
      <h2>Öne Çıkan Ürünler</h2>
      <div className="products-grid">
        {featuredProducts.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;