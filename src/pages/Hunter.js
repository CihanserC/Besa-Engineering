import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import productsData from '../data/products.json';

const Hunter = () => {
    // Sulama-Hunter kategorisindeki ürünleri filtrele
    const hunterProducts = productsData.filter(product => product.category === 'Sulama-Hunter');

    // Görsel import - require.context ile çoklu adayları dener (jpg/png ve _1,_2 uzantıları)
    const images = require.context('../components/Images/ProductImages', false, /\.(png|jpe?g)$/);
    const imageKeys = new Set(images.keys());

    const getImagePath = (imageName, id) => {
        const candidates = [];

        const pushCandidatesFor = (stem) => {
            if (!stem) return;
            const clean = String(stem).trim();
            const base = clean.replace(/^\.\//, '').replace(/\.(png|jpe?g)$/i, '');
            const exts = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG'];
            const suffixes = ['', '_1', '_2', '_3'];
            suffixes.forEach(sfx => {
                exts.forEach(ext => candidates.push(`${base}${sfx}${ext}`));
            });
        };

        pushCandidatesFor(imageName);
        pushCandidatesFor(id);

        for (const file of candidates) {
            const key = `./${file}`;
            if (imageKeys.has(key)) {
                try {
                    return images(key);
                } catch (_) {
                    // continue
                }
            }
        }
        return null;
    };

    return (
        <main className="page page-content page-hunter">
            <div className="container">
                <h1 className="page-title">Hunter Sulama Sistemleri</h1>
            </div>
            
            <section className="container">
                <div className="products-grid">
                    {hunterProducts.map((product) => (
                        <Link 
                            key={product.id} 
                            to={`/product/hunter/${product.id}`} 
                            className="product-card"
                        >
                            <div className="product-image">
                                {getImagePath(product.image, product.id) ? (
                                    <img 
                                        src={getImagePath(product.image, product.id)} 
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

export default Hunter;