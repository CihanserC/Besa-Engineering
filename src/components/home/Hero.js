import React from 'react';
import './Hero.css';

const Hero = () => {
    const handleExplore = (e) => {
        e.preventDefault();
        const hero = document.querySelector('.hero');
        // try to account for a fixed navbar if present
        const nav = document.querySelector('nav');
        const navHeight = nav ? nav.offsetHeight : 0;

        if (hero) {
            // Scroll so the bottom of the hero sits just under the navbar
            const heroBottom = hero.getBoundingClientRect().bottom + window.pageYOffset;
            const y = Math.max(0, heroBottom - navHeight);
            window.scrollTo({ top: y, behavior: 'smooth' });
            return;
        }

        // fallback to previous behaviour
        const target = document.querySelector('.page-content');
        if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Try to get the cover image with fallback
    let coverImage;
    try {
        coverImage = require('../Images/Cover.png');
    } catch (e) {
        // Fallback to public folder
        coverImage = `${process.env.PUBLIC_URL}/Cover.png`;
    }

    return (
        <div className="hero" style={{ backgroundImage: `url(${coverImage})` }}>
            <div className="hero-content">
                <h1 className="hero-title animate-fade">BESA</h1>
                <p className="hero-subtitle animate-fade">since 2024</p>
                <a href="#" className="hero-cta" onClick={handleExplore}>Keşfetmeye Başla!</a>
            </div>
        </div>
    );
};

export default Hero;