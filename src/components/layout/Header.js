import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Besa Mühendislik</h1>
                <p>Since 2023</p>
            </div>
            <Navigation />
            <div className="theme-toggle">
                <label>
                    <input type="checkbox" />
                    Toggle Theme
                </label>
            </div>
        </header>
    );
};

export default Header;