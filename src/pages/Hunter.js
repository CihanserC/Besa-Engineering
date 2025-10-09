import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import productsData from '../data/products.json';

const Hunter = () => {
    // Hunter markasındaki ürünleri filtrele - marka alanı yoksa name'de Hunter olanları bul
    const hunterProducts = productsData.filter(product => 
        product.name && product.name.toLowerCase().includes('hunter')
    );

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
        <main className="page page-content page-hunter">
            <div className="container">
                <h1 className="page-title">Hunter Sulama Sistemleri</h1>
                <p className="page-subtitle">Profesyonel sulama çözümleri</p>
            </div>
            
            <section className="container">
                <div className="products-grid">
                    {hunterProducts.length > 0 ? (
                        hunterProducts.map((product) => (
                            <Link 
                                key={product.id} 
                                to={`/product/${product.id}`} 
                                className="product-card"
                            >
                                <div className="product-image">
                                    {product.image && getImagePath(product.image) ? (
                                        <img 
                                            src={getImagePath(product.image)} 
                                            alt={product.name} 
                                        />
                                    ) : (
                                        <div className="no-image">Görsel Yok</div>
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title">{product.name}</h3>
                                    <p className="product-description">
                                        {product.description ? product.description.substring(0, 100) + '...' : 'Açıklama bulunmuyor'}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no-products">
                            <h3>Hunter ürünleri yakında eklenecektir.</h3>
                            <p>Şu anda Hunter markası ürünleri bulunmamaktadır.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Hunter;