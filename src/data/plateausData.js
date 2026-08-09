// ============================================================================
// 🏔️ Türkiye Platoları Kodlama & Hafıza Teknikleri Veri Tabanı
// ============================================================================

export const PLATEAUS_MNEMONICS_DATA = [
  // === KARSTİK PLATOLAR ===
  { id: "teke", name: "Teke Platosu", type: "Karstik Plato", region: "Akdeniz", province: "Antalya / Muğla" },
  { id: "taseli", name: "Taşeli Platosu", type: "Karstik Plato", region: "Akdeniz", province: "Mersin / Karaman" },

  // === VOLKANİK PLATOLAR ===
  { id: "erzurum-kars", name: "Erzurum-Kars Platosu", type: "Volkanik Plato", region: "Doğu Anadolu", province: "Erzurum / Kars" },
  { id: "ardahan", name: "Ardahan Platosu", type: "Volkanik Plato", region: "Doğu Anadolu", province: "Ardahan" },

  // === AŞINIM DÜZLÜĞÜ PLATOLARI ===
  { id: "catalca-kocaeli", name: "Çatalca-Kocaeli Platosu", type: "Aşınım Düzlüğü Platosu", region: "Marmara", province: "İstanbul / Kocaeli" },

  // === YATAY DURUŞLU PLATOLAR ===
  { id: "haymana", name: "Haymana Platosu", type: "Yatay Duruşlu Plato", region: "İç Anadolu", province: "Ankara" },
  { id: "cihanbeyli", name: "Cihanbeyli Platosu", type: "Yatay Duruşlu Plato", region: "İç Anadolu", province: "Konya" },
  { id: "obruk", name: "Obruk Platosu", type: "Yatay Duruşlu Plato", region: "İç Anadolu", province: "Konya" },
  { id: "bozok", name: "Bozok Platosu", type: "Yatay Duruşlu Plato", region: "İç Anadolu", province: "Yozgat" },
  { id: "uzunyayla", name: "Uzunyayla Platosu", type: "Yatay Duruşlu Plato", region: "İç Anadolu", province: "Sivas / Kayseri" },
  { id: "yazilikaya", name: "Yazılıkaya Platosu", type: "Yatay Duruşlu Plato", region: "Ege / İç Anadolu", province: "Eskişehir / Afyon" },
  { id: "gaziantep", name: "Gaziantep Platosu", type: "Yatay Duruşlu Plato", region: "Güneydoğu Anadolu", province: "Gaziantep" },
  { id: "sanliurfa", name: "Şanlıurfa Platosu", type: "Yatay Duruşlu Plato", region: "Güneydoğu Anadolu", province: "Şanlıurfa" },
  { id: "adiyaman", name: "Adıyaman Platosu", type: "Yatay Duruşlu Plato", region: "Güneydoğu Anadolu", province: "Adıyaman" },
];

export const PLATEAU_CATEGORIES = [
  {
    id: "karstik-platolar",
    name: "1. Karstik Platolar (Akdeniz)",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.15)",
    borderColor: "rgba(236, 72, 153, 0.4)",
    plateaus: ["teke", "taseli"],
    story: "📌 **ŞİFRE: Akdeniz'in İki Çıkıntısı (Teke & Taşeli)**\n\n• **Teke Platosu (Antalya/Muğla):** Nüfus seyrek, engebeli, kireçtaşı çözünmeli karstik yapı. Kıl keçisi yetiştiriciliği yaygın.\n• **Taşeli Platosu (Mersin/Karaman):** Türkiye'nin en tenha alanlarından biri, engebeli ve karstik yapılı."
  },
  {
    id: "volkanik-platolar",
    name: "2. Volkanik (Lav Örtülü) Platolar (Doğu Anadolu)",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.4)",
    plateaus: ["erzurum-kars", "ardahan"],
    story: "📌 **ŞİFRE: En Yüksek & En Soğuk Platolar**\n\n• **Erzurum-Kars Platosu:** Lav örtüsüyle oluşmuş en yüksek plato. Verimli Çernezyom (kara topraklar) bulunur, büyükbaş hayvancılık ve yaz yağışları çayırları gelişmiştir.\n• **Ardahan Platosu:** Lav akıntılarıyla oluşan volkanik plato sahamızdır."
  },
  {
    id: "asinim-platolari",
    name: "3. Aşınım Düzlüğü Platoları (Marmara)",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    plateaus: ["catalca-kocaeli"],
    story: "📌 **ŞİFRE: En Alçak & En Gelişmiş Plato**\n\n• **Çatalca-Kocaeli Platosu (İstanbul/Kocaeli):** Yükseltisi en az (denize en yakın), nüfusu, sanayisi, ulaşımı ve ticareti en gelişmiş aşınım düzlüğü platosudur."
  },
  {
    id: "yatay-duruslu-platolar",
    name: "4. Yatay Duruşlu / Tabaka Düzlüğü Platoları",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    plateaus: ["haymana", "cihanbeyli", "obruk", "bozok", "uzunyayla", "yazilikaya", "gaziantep", "sanliurfa", "adiyaman"],
    story: "📌 **İç Anadolu, Güneydoğu & Ege Tabaka Düzlükleri**\n\n• **Bozok Platosu (Yozgat):** İç Anadolu'nun yüzölçümü EN BÜYÜK platosu.\n• **Haymana (Ankara) & Cihanbeyli (Konya):** Tahıl ambarı tabaka düzlükleri.\n• **Obruk Platosu (Konya):** Karstik çukurluklar (obruklar) içeren karma plato.\n• **Uzunyayla (Sivas/Kayseri) & Yazılıkaya (Eskişehir/Afyon):** Yüksek tabaka düzlükleri.\n• **Güneydoğu Platoları:** Gaziantep, Şanlıurfa, Adıyaman platoları."
  }
];
