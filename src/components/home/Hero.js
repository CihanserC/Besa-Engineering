import React from 'react';
import './Hero.css';
import coverImage from '../Images/Cover.png';

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${coverImage})` }}>
            <div className="hero-content">
                <h1 className="hero-title animate-fade">BESA</h1>
                <p className="hero-subtitle animate-fade">since 2024</p>
                <a href="#" className="hero-cta">Keşfetmeye Başla!</a>
            </div>
        </div>
    );
};

export default Hero;