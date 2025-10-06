import React, { useState } from 'react';
import './Pages.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now: fake submit — in a real app you'd send to an API or email service
        console.log('Contact form submitted', form);
        setSent(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <main className="page page-content page-contact">
            <section className="container contact-grid">
                <div className="contact-info">
                    <h1>Bizimle İletişime Geçin</h1>
                    <p>Her türlü soru, teklif veya iş birliği talepleriniz için aşağıdaki bilgilerden bize ulaşabilirsiniz.</p>

                    <h3>İletişim Bilgileri</h3>
                    <p><strong>Adres:</strong> Besa Mühendislik, Örnek Mah. Örnek Sok. No:1, İstanbul</p>
                    <p><strong>Telefon:</strong> <a href="tel:+905465541017">+90 546 554 10 17</a></p>
                    <p><strong>Email:</strong> <a href="mailto:bulentavci@besaengineer.com">bulentavci@besaengineer.com</a></p>
                </div>

                <div className="contact-form-wrap">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label>Adınız <span className="required">*</span></label>
                            <input name="name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <label>Email <span className="required">*</span></label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <label>Telefon <span className="required">*</span></label>
                            <input name="phone" value={form.phone} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <label>Mesajınız <small>(opsiyonel)</small></label>
                            <textarea name="message" rows="5" value={form.message} onChange={handleChange}></textarea>
                        </div>

                        <div className="row">
                            <button className="btn primary" type="submit">Gönder</button>
                            {sent && <span className="sent-msg">Mesajınız gönderildi. Teşekkürler!</span>}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;