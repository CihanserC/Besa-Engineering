# EmailJS Kurulum Rehberi


## Adımlar:

### 1. EmailJS Hesabı Oluştur
- https://www.emailjs.com/ adresine git
- Ücretsiz hesap oluştur:
### 2. Email Service Ekle
- Dashboard'da "Email Services" bölümüne git
- "Add Service" butonuna tıkla
- Outlook/Hotmail seç
- Service ID'yi `service_besa_contact` olarak ayarla

### 3. Email Template Oluştur
- "Email Templates" bölümüne git
- "Create New Template" butonuna tıkla
- Template ID'yi `template_besa_form` olarak ayarla
- Template içeriği:

```
Yeni İletişim Formu Mesajı

Ad: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}

Mesaj:
{{message}}

---
Bu mesaj Besa Mühendislik web sitesi iletişim formundan gönderilmiştir.
```

### 4. Public Key Al
- Account settings'den Public Key'i kopyala

### 5. Environment Variables Güncelle
.env dosyasındaki değerleri güncelle:

```
REACT_APP_EMAILJS_SERVICE_ID=service_besa_contact
REACT_APP_EMAILJS_TEMPLATE_ID=template_besa_form
REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_ACTUAL_PUBLIC_KEY
```

### 6. Test Et
- Formu doldur ve gönder
- cihansercaliskan@outlook.com adresini kontrol et

## Demo Modu
Şu anda EmailJS konfigüre edilmediği için demo modunda çalışıyor. Console'da email detaylarını görebilirsiniz.