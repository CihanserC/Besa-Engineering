import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Pages.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    // Initialize EmailJS when component mounts
    useEffect(() => {
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError('');

        try {
            // EmailJS configuration from environment variables
            const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

            console.log('EmailJS Config:', { serviceID, templateID, publicKey: publicKey ? 'Set' : 'Not set' });

            if (!publicKey || !serviceID || !templateID) {
                throw new Error('EmailJS configuration missing');
            }

            // Create template parameters
            const templateParams = {
                from_name: form.name,
                from_email: form.email,
                phone: form.phone,
                message: form.message,
                to_email: 'cihansercaliskan@outlook.com'
            };

            console.log('Sending email with params:', templateParams);

            // Send email using EmailJS
            const result = await emailjs.send(serviceID, templateID, templateParams);
            
            console.log('Email sent successfully:', result);
            
            setSent(true);
            setForm({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSent(false), 4000);
            
        } catch (error) {
            console.error('Email sending failed:', error);
            console.error('Error details:', {
                message: error.message,
                status: error.status,
                text: error.text
            });
            
            let errorMessage = 'Email gönderilemedi. ';
            if (error.status === 400) {
                errorMessage += 'Service ID veya Template ID hatalı.';
            } else if (error.status === 401) {
                errorMessage += 'Public Key hatalı.';
            } else if (error.status === 404) {
                errorMessage += 'Service veya Template bulunamadı.';
            } else {
                errorMessage += error.message || 'Bilinmeyen hata.';
            }
            
            setError(errorMessage);
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="page page-content page-contact">
            <div className="container">
                <h1 className="page-title">İletişim</h1>
            </div>
            
            <section className="container contact-section">
                <div className="contact-info">
                    <h3>İletişim Bilgileri</h3>
                    <p>Her türlü soru, teklif veya iş birliği talepleriniz için aşağıdaki bilgilerden bize ulaşabilirsiniz.</p>
                    
                    <p><strong>Telefon:</strong> <a href="tel:+905465541017">+90 546 554 10 17</a></p>
                    <p><strong>Email:</strong> <a href="mailto:bulentavci@besaengineer.com">bulentavci@besaengineer.com</a></p>
                </div>

                <div className="contact-form-wrap">
                    <h2>Bizimle İletişime Geçin</h2>
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
                            <button className="btn primary" type="submit" disabled={sending}>
                                {sending ? 'Gönderiliyor...' : 'Gönder'}
                            </button>
                            {sent && <span className="sent-msg">Mesajınız gönderildi. Teşekkürler!</span>}
                            {error && <span className="error-msg">{error}</span>}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;