import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/vision" element={<Vision />} />
                    <Route path="/about/mission" element={<Mission />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;