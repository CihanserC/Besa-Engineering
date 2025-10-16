import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import productsData from '../data/products.json';

const PoolEquipment = () => {
    // Ekipman kategorisindeki ürünleri filtrele
    const equipmentProducts = productsData.filter(product => product.category === 'Ekipman');

    // Görsel import fonksiyonu - png ve jpg destekli
    const getImagePath = (imageName) => {
        // Önce dosya uzantısını kontrol et
        if (imageName.includes('.')) {
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

    return (
        <main className="page page-content page-pool-equipment">
            <div className="container">
                <h1 className="page-title">Havuz Ekipmanları</h1>
            </div>
            
            <section className="container">
                <div className="products-grid">
                    {equipmentProducts.map((product) => (
                        <Link 
                            key={product.id} 
                            to={`/product/${product.id}`} 
                            className="product-card"
                        >
                            <div className="product-image">
                                {getImagePath(product.image) ? (
                                    <img 
                                        src={getImagePath(product.image)} 
                                        alt={product.name}
                                    />
                                ) : (
                                    <div className="no-image">
                                        <span>Görsel Yok</span>
                                    </div>
                                )}
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default PoolEquipment;