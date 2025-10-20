# ✊🖐️✌️ Rock Paper Scissors (Taş - Kağıt - Makas) Oyunu

Bu proje, kullanıcıların bilgisayara karşı **Taş, Kağıt, Makas** oynayabildiği eğlenceli bir web uygulamasıdır.  
Basit ama dinamik yapısı sayesinde tarayıcı üzerinde hızlı ve etkileşimli bir oyun deneyimi sunar.

---

## 🚀 Özellikler

- 🎮 Kullanıcı, **Taş**, **Kağıt** veya **Makas** seçimini yapabilir.  
- 🤖 Bilgisayar her turda rastgele bir seçim yapar.  
- ⚖️ Kazanan, kaybeden veya berabere durumları anında ekranda gösterilir.  
- 🔁 “Tekrar Oyna” seçeneği ile oyun sıfırlanabilir.  
- 💻 **Responsive (duyarlı)** tasarım ile mobil ve masaüstü cihazlarda sorunsuz oynanabilir.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-------|
| **HTML5** | Oyunun temel yapısını oluşturur. |
| **CSS3** | Arayüzü düzenler, renk ve stil sağlar. |
| **JavaScript (ES6+)** | Oyunun mantığını yönetir (seçim, sonuç hesaplama, skor güncelleme). |
| **DOM Manipülasyonu** | Oyun sonucunun ve bilgisayar seçiminin dinamik olarak ekrana yansıtılması. |

---

## 📂 Proje Dosya Yapısı

📁 Rock_Paper_Scissors
├── 📁 img 
    ├── 📄 paper-emoji.png
    ├── 📄 rock-emoji.png 
    └── 📄 scissors-emoji.png
├── 📄 index.html
├── 📄 main.js
├── 📄 README.md
└── 📄 style.css


---

## ⚙️ Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Bu depoyu klonlayın:
   ```bash
   git clone https://github.com/mhilmicicek07/Rock_Paper_Scissors.git
Proje klasörüne geçin:


cd Rock_Paper_Scissors
index.html dosyasını herhangi bir web tarayıcısında açın.

Hepsi bu kadar! 🎉
Artık bilgisayara karşı Taş-Kağıt-Makas oynayabilirsiniz.

🧠 Teknik Açıklama
script.js dosyası, oyunun tüm dinamik yapısını kontrol eder.

Bilgisayar seçimi Math.random() ile rastgele belirlenir.

Kullanıcının seçimi, tıklama eventi (click) ile algılanır ve sonuç hesaplanır.

Sonuç, DOM üzerinde anında güncellenir ve ekrana "Kazandınız", "Kaybettiniz" veya "Berabere" olarak yansıtılır.

İstenirse skor tutma özelliği veya daha gelişmiş animasyonlar kolayca eklenebilir.

👨‍💻 Geliştirici
Mehmet Hilmi Çiçek
💼 Full Stack Web Developer
📍 Geislingen an der Steige
💬 “Basitlik, iyi tasarımın özüdür.”

🪪 Lisans
Bu proje açık kaynaklıdır.
Dileyen herkes kodu inceleyebilir, geliştirebilir veya kendi projelerinde özgürce kullanabilir.