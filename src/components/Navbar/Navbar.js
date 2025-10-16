import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hideTimeoutRef = useRef(null);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isPoolSubOpen, setIsPoolSubOpen] = useState(false);
    const [isIrrigationSubOpen, setIsIrrigationSubOpen] = useState(false);
    const hideProductsTimeoutRef = useRef(null);
    const hidePoolTimeoutRef = useRef(null);
    const hideIrrigationTimeoutRef = useRef(null);
    
    // Mobile menu state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [isMobilePoolOpen, setIsMobilePoolOpen] = useState(false);
    const [isMobileIrrigationOpen, setIsMobileIrrigationOpen] = useState(false);

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

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.navbar')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileAboutOpen(false);
        setIsMobileProductsOpen(false);
        setIsMobilePoolOpen(false);
        setIsMobileIrrigationOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <h1>Besa Mühendislik</h1>
                </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button 
                className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Desktop Navigation */}
            <ul className="nav-links desktop-nav">
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
                <li><Link to="/jalex" className="jager-link">Jalex</Link></li>
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
                            setIsIrrigationSubOpen(false);
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
                                    setIsIrrigationSubOpen(false);
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
                            <li className="has-submenu"
                                onMouseEnter={() => {
                                    if (hideIrrigationTimeoutRef.current) {
                                        clearTimeout(hideIrrigationTimeoutRef.current);
                                        hideIrrigationTimeoutRef.current = null;
                                    }
                                    setIsIrrigationSubOpen(true);
                                }}
                                onMouseLeave={() => {
                                    hideIrrigationTimeoutRef.current = setTimeout(() => {
                                        setIsIrrigationSubOpen(false);
                                    }, 160);
                                }}>
                                <Link to="#" className="submenu-link">Sulama Sistemleri</Link>
                                {isIrrigationSubOpen && (
                                    <ul className="submenu">
                                        <li><Link to="/products/irrigation/hunter">Hunter</Link></li>
                                        <li><Link to="/products/irrigation/poelsan">Poelsan</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>
                <li><Link to="/projects">Projelerimiz</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
            </ul>

            {/* Mobile Menu Overlay */}
            <div 
                className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li>
                        <Link to="/" onClick={closeMobileMenu}>Ana Sayfa</Link>
                    </li>
                    
                    <li className="mobile-dropdown">
                        <button 
                            className="mobile-dropdown-toggle"
                            onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        >
                            Hakkımızda
                            <span className={`arrow ${isMobileAboutOpen ? 'open' : ''}`}>▼</span>
                        </button>
                        <ul className={`mobile-submenu ${isMobileAboutOpen ? 'open' : ''}`}>
                            <li><Link to="/about/vision" onClick={closeMobileMenu}>Vizyonumuz</Link></li>
                            <li><Link to="/about/mission" onClick={closeMobileMenu}>Misyonumuz</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/jalex" className="jager-link" onClick={closeMobileMenu}>Jalex</Link>
                    </li>

                    <li className="mobile-dropdown">
                        <button 
                            className="mobile-dropdown-toggle"
                            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        >
                            Ürünlerimiz
                            <span className={`arrow ${isMobileProductsOpen ? 'open' : ''}`}>▼</span>
                        </button>
                        <ul className={`mobile-submenu ${isMobileProductsOpen ? 'open' : ''}`}>
                            <li className="mobile-nested-dropdown">
                                <button 
                                    className="mobile-dropdown-toggle nested"
                                    onClick={() => setIsMobilePoolOpen(!isMobilePoolOpen)}
                                >
                                    Havuz
                                    <span className={`arrow ${isMobilePoolOpen ? 'open' : ''}`}>▼</span>
                                </button>
                                <ul className={`mobile-nested-submenu ${isMobilePoolOpen ? 'open' : ''}`}>
                                    <li><Link to="/products/pool/chemicals" onClick={closeMobileMenu}>Kimyasallar</Link></li>
                                    <li><Link to="/products/pool/equipment" onClick={closeMobileMenu}>Ekipmanlar</Link></li>
                                </ul>
                            </li>
                            <li className="mobile-nested-dropdown">
                                <button 
                                    className="mobile-dropdown-toggle nested"
                                    onClick={() => setIsMobileIrrigationOpen(!isMobileIrrigationOpen)}
                                >
                                    Sulama Sistemleri
                                    <span className={`arrow ${isMobileIrrigationOpen ? 'open' : ''}`}>▼</span>
                                </button>
                                <ul className={`mobile-nested-submenu ${isMobileIrrigationOpen ? 'open' : ''}`}>
                                    <li><Link to="/products/irrigation/hunter" onClick={closeMobileMenu}>Hunter</Link></li>
                                    <li><Link to="/products/irrigation/poelsan" onClick={closeMobileMenu}>Poelsan</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/projects" onClick={closeMobileMenu}>Projelerimiz</Link>
                    </li>
                    
                    <li>
                        <Link to="/contact" onClick={closeMobileMenu}>İletişim</Link>
                    </li>
                </ul>
            </div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
            </div>
        </nav>
    );
};

export default Navbar;