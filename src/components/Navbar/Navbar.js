import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hideTimeoutRef = useRef(null);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isPoolSubOpen, setIsPoolSubOpen] = useState(false);
    const hideProductsTimeoutRef = useRef(null);
    const hidePoolTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = window.pageYOffset;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Besa Mühendislik</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li className="dropdown"
                    onMouseEnter={() => {
                        if (hideTimeoutRef.current) {
                            clearTimeout(hideTimeoutRef.current);
                            hideTimeoutRef.current = null;
                        }
                        setIsDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                        // small delay to allow cursor move to submenu
                        hideTimeoutRef.current = setTimeout(() => {
                            setIsDropdownOpen(false);
                        }, 180);
                    }}>
                    <Link to="/about">Hakkımızda</Link>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu"
                            onMouseEnter={() => {
                                if (hideTimeoutRef.current) {
                                    clearTimeout(hideTimeoutRef.current);
                                    hideTimeoutRef.current = null;
                                }
                                setIsDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                hideTimeoutRef.current = setTimeout(() => {
                                    setIsDropdownOpen(false);
                                }, 180);
                            }}>
                            <li><Link to="/about/vision">Vizyonumuz</Link></li>
                            <li><Link to="/about/mission">Misyonumuz</Link></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown products-dropdown"
                    onMouseEnter={() => {
                        if (hideProductsTimeoutRef.current) {
                            clearTimeout(hideProductsTimeoutRef.current);
                            hideProductsTimeoutRef.current = null;
                        }
                        setIsProductsOpen(true);
                    }}
                    onMouseLeave={() => {
                        hideProductsTimeoutRef.current = setTimeout(() => {
                            setIsProductsOpen(false);
                            setIsPoolSubOpen(false);
                        }, 180);
                    }}>
                    <Link to="/products">Ürünlerimiz</Link>
                    {isProductsOpen && (
                        <ul className="dropdown-menu products-menu"
                            onMouseEnter={() => {
                                if (hideProductsTimeoutRef.current) {
                                    clearTimeout(hideProductsTimeoutRef.current);
                                    hideProductsTimeoutRef.current = null;
                                }
                                setIsProductsOpen(true);
                            }}
                            onMouseLeave={() => {
                                hideProductsTimeoutRef.current = setTimeout(() => {
                                    setIsProductsOpen(false);
                                    setIsPoolSubOpen(false);
                                }, 180);
                            }}>
                            <li className="has-submenu"
                                onMouseEnter={() => {
                                    if (hidePoolTimeoutRef.current) {
                                        clearTimeout(hidePoolTimeoutRef.current);
                                        hidePoolTimeoutRef.current = null;
                                    }
                                    setIsPoolSubOpen(true);
                                }}
                                onMouseLeave={() => {
                                    hidePoolTimeoutRef.current = setTimeout(() => {
                                        setIsPoolSubOpen(false);
                                    }, 160);
                                }}>
                                <Link to="#" className="submenu-link">Havuz</Link>
                                {isPoolSubOpen && (
                                    <ul className="submenu">
                                        <li><Link to="/products/pool/chemicals">Kimyasallar</Link></li>
                                        <li><Link to="/products/pool/equipment">Ekipmanlar</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/products/irrigation">Sulama Sistemleri</Link></li>
                            <li><Link to="/products/landscape">Peyzaj Ürünleri</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/contact">İletişim</Link></li>
            </ul>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
            </div>
        </nav>
    );
};

export default Navbar;