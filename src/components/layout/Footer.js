import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-grid">
                <div className="footer-col about">
                    <h3>Besa Mühendislik</h3>
                    <p>Yüksek kaliteli havuz ekipmanları ve sulama sistemleri ile hizmetinizdeyiz.</p>
                </div>

                <div className="footer-col contact" aria-label="İletişim bilgileri">
                    <h3>İletişim</h3>
                    <p><strong>Telefon:</strong> <a href="tel:+905465541017">+90 546 554 10 17</a></p>
                    <p><strong>Email:</strong> <a href="mailto:bulentavci@besaengineer.com">bulentavci@besaengineer.com</a></p>
                </div>

                <div className="footer-col locations" aria-label="Konum bilgileri">
                    <h3>Konumlarımız</h3>
                    
                    <div className="location-item">
                        <h4>Ofis Konumu</h4>
                        <div className="map-container">
                            <a
                                href="https://maps.app.goo.gl/fXHq3fKy4hM8QRmC7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-clickable"
                                title="Haritayı Google Maps'te aç">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3125.5288178398328!2d27.166433375914444!3d38.429252571827774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDI1JzQ1LjMiTiAyN8KwMTAnMDguNCJF!5e0!3m2!1str!2str!4v1760612164073!5m2!1str!2str"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Besa Mühendislik Ofis Konumu">
                                </iframe>
                            </a>
                        </div>
                    </div>

                    <div className="location-item">
                        <h4>Depo Konumu</h4>
                        <div className="map-container">
                            <a
                                href="https://maps.app.goo.gl/ChEd7bowA18M2d5y8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-clickable"
                                title="Haritayı Google Maps'te aç">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3123.887135558675!2d27.171670875916313!3d38.4671668718191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDI4JzAxLjgiTiAyN8KwMTAnMjcuMyJF!5e0!3m2!1str!2str!4v1760612188246!5m2!1str!2str"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Besa Mühendislik Depo Konumu">
                                </iframe>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <small>&copy; {new Date().getFullYear()} Besa Mühendislik. Tüm hakları saklıdır.</small>
                </div>
            </div>
            <a
                className="whatsapp-fab"
                href="https://wa.me/905465541017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geçin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20.5 3.5A11 11 0 0012 1a11 11 0 00-9.9 14.3L1 23l7.9-1.9A11 11 0 0020.5 3.5z" fill="#25D366"/>
                    <path d="M17.2 14.1c-.3-.1-1.6-.8-1.8-.9-.2-.1-.3-.2-.5.1-.2.3-.6.9-.7 1.1-.1.1-.2.1-.5 0-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.6-2.1-.1-.3 0-.4.1-.5.1-.1.3-.2.5-.4.2-.1.3-.2.4-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3-.1 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 1.8 2.8 4.3 3.9 1 .4 1.6.6 2.1.6.8 0 1.7-.3 1.9-.6.2-.3.2-.5.2-.6.1-.1.2-.2.3-.3.1-.1.1-.2.1-.4 0-.2-.1-.4-.4-.5z" fill="#fff"/>
                </svg>
            </a>
        </footer>
    );
};

export default Footer;