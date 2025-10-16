import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Jager from './pages/Jager';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProductDetail from './pages/ProductDetail';
import PoolEquipment from './pages/PoolEquipment';
import PoolChemicals from './pages/PoolChemicals';
import Hunter from './pages/Hunter';
import HunterProductDetail from './pages/HunterProductDetail';
import Poelsan from './pages/Poelsan';

// Component to handle scroll restoration
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/jalex" element={<Jager />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/pool/equipment" element={<PoolEquipment />} />
                    <Route path="/products/pool/chemicals" element={<PoolChemicals />} />
                    <Route path="/products/irrigation/hunter" element={<Hunter />} />
                    <Route path="/products/irrigation/poelsan" element={<Poelsan />} />
                    <Route path="/about/vision" element={<Vision />} />
                    <Route path="/about/mission" element={<Mission />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/product/hunter/:id" element={<HunterProductDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;