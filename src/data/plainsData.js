// ============================================================================
// 🌾 Türkiye Ovaları Kodlama & Hafıza Teknikleri Veri Tabanı
// ============================================================================

export const PLAINS_MNEMONICS_DATA = [
  // === KARSTİK OVALAR ===
  { id: "tefenni", name: "Tefenni Ovası", type: "Karstik Ova (Polye)", region: "Akdeniz", province: "Burdur" },
  { id: "acipayam", name: "Acıpayam Ovası", type: "Karstik Ova (Polye)", region: "Ege / Akdeniz", province: "Denizli" },
  { id: "kestel", name: "Kestel Ovası", type: "Karstik Ova (Polye)", region: "Akdeniz", province: "Antalya" },
  { id: "korkuteli", name: "Korkuteli Ovası", type: "Karstik Ova (Polye)", region: "Akdeniz", province: "Antalya" },
  { id: "elmali", name: "Elmalı Ovası", type: "Karstik Ova (Polye)", region: "Akdeniz", province: "Antalya" },
  { id: "mugla", name: "Muğla Ovası", type: "Karstik Ova (Polye)", region: "Ege", province: "Muğla" },

  // === DELTA OVALARI ===
  { id: "cukurova", name: "Çukurova (Seyhan & Ceyhan)", type: "Delta Ovası", region: "Akdeniz", province: "Adana" },
  { id: "bafra", name: "Bafra Ovası (Kızılırmak)", type: "Delta Ovası", region: "Karadeniz", province: "Samsun" },
  { id: "carsamba", name: "Çarşamba Ovası (Yeşilırmak)", type: "Delta Ovası", region: "Karadeniz", province: "Samsun" },
  { id: "silifke", name: "Silifke Ovası (Göksu)", type: "Delta Ovası", region: "Akdeniz", province: "Mersin" },
  { id: "dikili", name: "Dikili Ovası (Bakırçay)", type: "Delta Ovası", region: "Ege", province: "İzmir" },
  { id: "menemen", name: "Menemen Ovası (Gediz)", type: "Delta Ovası", region: "Ege", province: "İzmir" },
  { id: "selcuk", name: "Selçuk Ovası (Küçük Menderes)", type: "Delta Ovası", region: "Ege", province: "İzmir" },
  { id: "balat", name: "Balat Ovası (Büyük Menderes)", type: "Delta Ovası", region: "Ege", province: "Aydın" },

  // === TEKTONİK OVALAR ===
  { id: "konya", name: "Konya Ovası", type: "Tektonik Ova", region: "İç Anadolu", province: "Konya" },
  { id: "igdir", name: "Iğdır Ovası (Mikroklima)", type: "Tektonik Ova", region: "Doğu Anadolu", province: "Iğdır" },
  { id: "mus", name: "Muş Ovası", type: "Tektonik Ova", region: "Doğu Anadolu", province: "Muş" },
  { id: "malatya", name: "Malatya Ovası", type: "Tektonik Ova", region: "Doğu Anadolu", province: "Malatya" },
  { id: "erzincan", name: "Erzincan Ovası (KAF)", type: "Tektonik Ova", region: "Doğu Anadolu", province: "Erzincan" },
  { id: "eskisehir", name: "Eskişehir Ovası", type: "Tektonik Ova", region: "İç Anadolu", province: "Eskişehir" },
  { id: "duzce", name: "Düzce Ovası", type: "Tektonik Ova", region: "Karadeniz", province: "Düzce" },
  { id: "ergene", name: "Ergene Ovası", type: "Tektonik Ova", region: "Marmara", province: "Edirne / Tekirdağ" },
];

export const PLAIN_CATEGORIES = [
  {
    id: "karstik-ovalar",
    name: "Karstik Ovalar (Polyeler)",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    plains: ["tefenni", "acipayam", "kestel", "korkuteli", "elmali", "mugla"],
    story: "ŞİFRE: **\"TAKEŞ\"** (veya **TAKKEM**)\n\n• **T**efenni Ovası (Burdur)\n• **A**cıpayam Ovası (Denizli)\n• **K**estel Ovası (Antalya)\n• **K**orkuteli Ovası (Antalya)\n• **E**lmalı Ovası (Antalya)\n• **M**uğla Ovası (Muğla / Ş=Şarkikaraağaç)\n\n📌 Karstik ovalar (polyeler) Akdeniz ve Göller Yöresi'nde kalker (kireçtaşı) erimesiyle oluşan en geniş karstik çukurluklardır."
  },
  {
    id: "delta-ovalar",
    name: "Delta Ovaları (Akarsu Biriktirmesi)",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    plains: ["cukurova", "bafra", "carsamba", "silifke", "dikili", "menemen", "selcuk", "balat"],
    story: "📌 **Delta Oluşma Şartları:** Kıyıda derinlik az (sığ), dalga/akıntı az, gelgit genliği düşük, kıyı düz, akarsunun alüvyon yükü fazla olmalı.\n\n• **Akdeniz:** Çukurova (Seyhan & Ceyhan - En büyük delta), Silifke (Göksu)\n• **Karadeniz:** Bafra (Kızılırmak), Çarşamba (Yeşilırmak)\n• **Ege (Kuzeyden Güneye):** Dikili (Bakırçay), Menemen (Gediz), Selçuk (K. Menderes), Balat (B. Menderes)"
  },
  {
    id: "tektonik-ovalar",
    name: "Tektonik Ovalar (Fay Çöküntü Alanları)",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    plains: ["konya", "igdir", "mus", "malatya", "erzincan", "eskisehir", "duzce", "ergene"],
    story: "📌 Fay hatları (KAF, DAF, BAF) üzerindeki çöküntü alanlarında oluşan ovalardır.\n\n• **En Büyük İç Ova:** Konya Ovası\n• **Mikroklima Özellikli Ova:** Iğdır Ovası (Çevreye göre alçakta, pamuk yetişir)\n• **En Yüksek İç Ova:** Hakkâri Yüksekova\n• **KAF Üzerindeki Ovalar:** Erzincan, Düzce, Suluova (Amasya)\n• **Trakya:** Ergene Ovası"
  }
];
