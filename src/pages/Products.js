import React from 'react';
import Card from '../components/shared/Card';
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pool Equipment",
      description: "High quality pool equipment",
      category: "pool",
      price: "Contact for price"
    },
    // Diğer ürünler...
  ];

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;