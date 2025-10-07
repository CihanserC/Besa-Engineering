import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const About = () => {
    return (
        <main className="page page-content page-about">
            <div className="container">
                <h1 className="page-title">Hakkımızda</h1>
                
                <div className="about-intro">
                    <p className="intro-text">
                        <strong>Besa Mühendislik</strong>, 2024 yılından beri havuz, sulama ve peyzaj alanlarında 
                        yenilikçi çözümler sunan öncü bir mühendislik firmasıdır. Müşterilerimizin yaşam alanlarını 
                        daha güzel, işlevsel ve sürdürülebilir hale getirmeyi misyon edinmiş bir ekibiz.
                    </p>
                    
                    <p className="intro-text">
                        Uzman kadromuz ve kaliteli ürün yelpazemiz ile havuz sistemleri, sulama teknolojileri 
                        ve peyzaj düzenlemelerinde sektörün güvenilir partneri olmayı hedefliyoruz. Her projemizde 
                        mükemmellik arayışı ve müşteri memnuniyetini ön planda tutarak, modern yaşam standartlarına 
                        uygun çözümler geliştiriyoruz.
                    </p>
                </div>

                <div className="vision-mission-cards">
                    <Link to="/about/vision" className="vm-card vision-card">
                        <div className="vm-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                            </svg>
                        </div>
                        <h3>Vizyonumuz</h3>
                    </Link>

                    <Link to="/about/mission" className="vm-card mission-card">
                        <div className="vm-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.07a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                        </div>
                        <h3>Misyonumuz</h3>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default About;