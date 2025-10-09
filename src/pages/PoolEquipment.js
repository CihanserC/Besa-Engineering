import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import productsData from '../data/products.json';

const PoolEquipment = () => {
    // Artık havuz ekipmanları Poelsan sayfasına taşındı
    
    return (
        <main className="page page-content page-pool-equipment">
            <div className="container">
                <h1 className="page-title">Havuz Ekipmanları</h1>
            </div>
            
            <section className="container">
                <div className="empty-page-message">
                    <h2>Havuz ekipmanları yeni kategoriye taşındı!</h2>
                    <p>Havuz ekipmanları artık <strong>Poelsan Sulama Sistemleri</strong> sayfasında bulunmaktadır.</p>
                    <Link to="/poelsan" className="btn-redirect">
                        Poelsan Sayfasına Git
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PoolEquipment;