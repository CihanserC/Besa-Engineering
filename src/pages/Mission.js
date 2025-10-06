import React from 'react';
import './Pages.css';
import MisyonImg from '../components/Images/Misyonumuz.png';

const Mission = () => {
    return (
        <main className="page page-content page-mission">
            <section className="container mission-grid">
                <div className="mission-text">
                    <h1>Misyonumuz</h1>
                    <p>
                        Misyonumuz; müşterilerimize yüksek performanslı, güvenli ve sürdürülebilir
                        havuz, sulama ve peyzaj ürünleri sunmaktır. Bunun için ürün seçiminden
                        montaja, bakım planlamasından teknik desteğe kadar tüm süreçlerde
                        profesyonel hizmet sağlamayı taahhüt ediyoruz.
                    </p>

                    <h2>Nasıl Çalışıyoruz?</h2>
                    <ul>
                        <li>Müşteri ihtiyaçlarını dinleyip, kişiye özel çözümler tasarlıyoruz</li>
                        <li>Kaliteli tedarikçi ağımızla güvenilir ürünler temin ediyoruz</li>
                        <li>Uzman montaj ve servis ekibimizle hızlı ve etkili uygulama yapıyoruz</li>
                        <li>Satış sonrası destek ve düzenli bakım hizmetleri sunuyoruz</li>
                    </ul>

                    <h2>Değerlerimiz</h2>
                    <div className="values">
                        <ul className="values-list">
                            <li>
                                <svg className="val-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                 {/* Handshake icon */}
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 12.5c0-1.1.9-2 2-2h2.2l1.15-1.15a1 1 0 011.4 0l1.3 1.3 1.3-1.3a1 1 0 011.4 0L13.9 10.5H16.5c1.1 0 2 .9 2 2v1.5a1 1 0 01-1 1h-1.8l-1.7-1.7a1 1 0 00-1.4 0l-1 1-1-1a1 1 0 00-1.4 0L6.8 14H5.5a1 1 0 01-1-1V12.5z" fill="currentColor" />
                                </svg>
                                <div>
                                    <strong>Dürüstlük</strong>
                                    <p>İş süreçlerimizde ve teklif aşamalarında şeffaflık; müşterilerimizle açık iletişim kurarız.</p>
                                </div>
                            </li>

                            <li>
                                <svg className="val-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                 {/* Shield with check */}
                                    <path d="M12 2l7 3v5.6c0 5.1-3.6 9.8-7 11-3.4-1.2-7-5.9-7-11V5l7-3z" fill="currentColor" />
                                    <path d="M9.5 12.5l1.8 1.8 3.2-3.8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <strong>Kalite</strong>
                                    <p>Seçtiğimiz ürünler ve uygulamalar kalite standartlarına uygundur; uzun ömür ve güvenlik önceliğimizdir.</p>
                                </div>
                            </li>

                            <li>
                                <svg className="val-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                 {/* User icon */}
                                    <circle cx="12" cy="8" r="3" fill="currentColor" />
                                    <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" fill="currentColor" />
                                </svg>
                                <div>
                                    <strong>Müşteri Odaklılık</strong>
                                    <p>Müşterilerimizin ihtiyaçlarını merkezde tutar, kişiye özel çözümler ve hızlı geri bildirim sağlarız.</p>
                                </div>
                            </li>

                            <li>
                                <svg className="val-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                 {/* Growth/chart icon */}
                                    <path d="M4 18h16v2H4v-2z" fill="currentColor" />
                                    <rect x="6" y="12" width="2" height="6" rx="0.3" fill="#fff" />
                                    <rect x="10" y="9" width="2" height="9" rx="0.3" fill="#fff" />
                                    <rect x="14" y="6" width="2" height="12" rx="0.3" fill="#fff" />
                                    <path d="M16 6l4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                                <div>
                                    <strong>Sürekli Gelişim</strong>
                                    <p>Yenilikçi yaklaşımlar ve eğitimlerle iş süreçlerimizi sürekli iyileştiririz; sektörde güncel kalırız.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mission-image">
                    <img src={MisyonImg} alt="Misyonumuz" />
                </div>
            </section>
        </main>
    );
};

export default Mission;
