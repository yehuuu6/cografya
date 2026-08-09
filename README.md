# Coğrafya - İnteraktif Harita Soru Bankası

KPSS ve ÖSYM sınav standartlarına tam uyumlu, Türkiye fiziki coğrafyasını interaktif vektörel harita üzerinde öğreten yüksek performanslı web uygulaması.

## Özellikler

- **Vektörel SVG Harita Motoru**: Türkiye il sınırları, dinamik bölgesel zoom odağı ve ölçeklenebilir waypoint mimarisi.
- **Kapsamlı Veri Setleri**: Göller, Körfezler ve Dağlar kategorilerinde konum bulma, oluşum türü eşleştirme ve net bilgi soruları.
- **Çift Soru Modu**: Harita üzeri doğrudan pin seçimi ve çoktan seçmeli şıklı soru seçenekleri.
- **Kalıcı İlerleme**: Kategoriye özel karıştırılmış soru havuzu ve kalınan soru numarası oturumlar arasında otomatik olarak saklanır.
- **Arayüz Tasarımı**: Sleek dark mode estetiği, akıcı mikro etkileşimler ve responsive tasarım.

## Teknoloji Yığını

- **Framework**: React 19, Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

## Geliştirme

Gereksinimler: Node.js (v18+) veya Bun

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/yehuuu6/cografya.git
   cd cografya
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

4. Üretim sürümünü derleyin:
   ```bash
   npm run build
   ```

## Dağıtım (Deployment)

`main` dalına yapılan push işlemlerinde GitHub Actions workflow'u devreye girerek uygulamayı otomatik derler ve GitHub Pages üzerinde yayınlar.
