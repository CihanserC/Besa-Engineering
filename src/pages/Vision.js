import React from 'react';
import './Pages.css';

const Vision = () => {
    return (
        <main className="page page-content page-vision">
            <section className="container vision-grid">
                <h1>Vizyonumuz</h1>
                <p>
                    Besa Mühendislik olarak vizyonumuz; Türkiye'de ve bölgesel pazarlarda
                    havuz, sulama ve peyzaj çözümlerinde kalite, güvenilirlik ve sürdürülebilirlik
                    konularında referans gösterilen bir marka olmaktır. Teknoloji ve
                    inovasyonu süreçlerimize entegre ederek müşterilerimize uzun ömürlü,
                    enerji verimli ve kullanıcı dostu çözümler sunmayı hedefliyoruz.
                </p>

                <h2 className="heading-odak">Odak Noktalarımız</h2>
                <ul className="vision-list">
                    <li>
                        <svg className="vision-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 2l7 3v5.6c0 5.1-3.6 9.8-7 11-3.4-1.2-7-5.9-7-11V5l7-3z" fill="currentColor" />
                            <path d="M9.5 12.5l1.8 1.8L15 11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Yüksek kalite standartlarını korumak ve sürekli geliştirmek
                    </li>

                    <li>
                        <svg className="vision-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 2c4 0 8 3 8 7 0 6-8 11-8 11s-8-5-8-11c0-4 4-7 8-7z" fill="currentColor" />
                            <path d="M13 8.5l-1 2h2l-1 2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Çevresel sürdürülebilirlik ilkelerine uygun ürünler ve enerji verimli çözümler sunmak
                    </li>

                    <li>
                        <svg className="vision-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" />
                            <path d="M4 20a8 8 0 0116 0" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M17 9h3v3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Müşteri memnuniyetini ön planda tutan süreçler ve etkili geri bildirim mekanizmaları oluşturmak
                    </li>

                    <li>
                        <svg className="vision-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M4 6h16v2H4z" fill="currentColor" />
                            <path d="M4 10h16v8H4z" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 12v4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                        Çalışanlarımıza yönelik eğitim, güvenlik ve gelişim programları ile güçlü bir ekip kültürü oluşturmak
                    </li>
                </ul>

                <h2 className="heading-gelecek">Geleceğe Bakış</h2>
                <p>
                    Ar-Ge ve iş ortaklıklarımızla sektördeki yenilikleri yakından takip ederek;
                    dijitalleşme, uzaktan izleme ve enerji verimliliği çözümlerini ürün
                    yelpazemize entegre etmeye devam edeceğiz. Ayrıca, veri analitiği ve
                    uzaktan yönetim platformları üzerine yatırımlar yaparak müşterilerimizin
                    işletme maliyetlerini düşürmeyi, saha verimliliğini artırmayı ve
                    sürdürülebilir uygulamaların benimsenmesini hızlandırmayı hedefliyoruz.
                    Gelecekte akıllı sensör entegrasyonları, IoT destekli bakım planlaması
                    ve düşük enerji tüketimli kontrol sistemleri geliştirmeye odaklanacağız.
                </p>
            </section>
        </main>
    );
};

export default Vision;
