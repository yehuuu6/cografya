// ============================================================================
// 🏔️ Türkiye Dağları Kodlama & Hafıza Teknikleri Veri Tabanı
// ============================================================================

export const MOUNTAINS_DATA = [
  // === KIRIK DAĞLAR ===
  { id: "kaz", name: "Kaz Dağları", type: "Kırık Dağ (Horst)", region: "Ege / Marmara", province: "Balıkesir / Çanakkale" },
  { id: "madra", name: "Madra Dağları", type: "Kırık Dağ (Horst)", region: "Ege", province: "Balıkesir / İzmir" },
  { id: "yunt", name: "Yunt Dağları", type: "Kırık Dağ (Horst)", region: "Ege", province: "Manisa / İzmir" },
  { id: "boz", name: "Bozdağlar", type: "Kırık Dağ (Horst)", region: "Ege", province: "İzmir / Manisa" },
  { id: "aydin", name: "Aydın Dağları", type: "Kırık Dağ (Horst)", region: "Ege", province: "Aydın / İzmir" },
  { id: "mentese", name: "Menteşe Dağları", type: "Kırık Dağ (Horst)", region: "Ege", province: "Muğla" },
  { id: "nur", name: "Nur (Amanos) Dağları", type: "Kırık Dağ (Horst)", region: "Akdeniz", province: "Hatay" },

  // === İÇ ANADOLU VOLKANİK DAĞLARI ===
  { id: "karadag-ic", name: "Karadağ", type: "Volkanik Dağ", region: "İç Anadolu", province: "Karaman" },
  { id: "karacadag-ic", name: "Karacadağ", type: "Volkanik Dağ", region: "İç Anadolu", province: "Konya" },
  { id: "erciyes", name: "Erciyes Dağı", type: "Volkanik Dağ", region: "İç Anadolu", province: "Kayseri" },
  { id: "melendiz", name: "Melendiz Dağı", type: "Volkanik Dağ", region: "İç Anadolu", province: "Niğde" },
  { id: "hasan", name: "Hasan Dağı", type: "Volkanik Dağ", region: "İç Anadolu", province: "Aksaray" },

  // === DOĞU ANADOLU VOLKANİK DAĞLARI ===
  { id: "nemrut", name: "Nemrut Dağı", type: "Volkanik Dağ", region: "Doğu Anadolu", province: "Bitlis" },
  { id: "suphan", name: "Süphan Dağı", type: "Volkanik Dağ", region: "Doğu Anadolu", province: "Bitlis / Ağrı" },
  { id: "tendurek", name: "Tendürek Dağı", type: "Volkanik Dağ", region: "Doğu Anadolu", province: "Ağrı / Van" },
  { id: "agri", name: "Büyük & Küçük Ağrı Dağı", type: "Volkanik Dağ", region: "Doğu Anadolu", province: "Ağrı / Iğdır" },

  // === GÜNEYDOĞU ANADOLU VOLKANİK ===
  { id: "karacadag-gd", name: "Karacadağ (Kalkan Volkan)", type: "Volkanik Dağ", region: "Güneydoğu Anadolu", province: "Şanlıurfa / Diyarbakır" },

  // === MANİSA KULA VOLKANLARI ===
  { id: "kula", name: "Kula Volkanları (Genç Volkan)", type: "Volkanik Dağ", region: "Ege", province: "Manisa" },
];

export const MOUNTAIN_CATEGORIES = [
  {
    id: "kirik-daglar",
    name: "Kırık Dağlar (Horstlar)",
    color: "#f43f5e",
    badgeBg: "rgba(244, 63, 94, 0.15)",
    borderColor: "rgba(244, 63, 94, 0.4)",
    mountains: ["kaz", "madra", "yunt", "boz", "aydin", "mentese", "nur"],
    story: "ŞİFRE: **\"Kazma yuntmuş boz ayı meledi\"**\n\n• **Kaz**ma → Kaz Dağları\n• yunt**m**uş → Madra Dağları\n• **Yunt**muş → Yunt Dağları\n• **Boz** → Bozdağlar\n• **Ayı** → Aydın Dağları\n• **Meledi** → Menteşe Dağları\n\n📌 **Önemli Not:** Ege Bölgesi dışındaki **tek kırık dağımız** Hatay'daki **Nur (Amanos) Dağları**'dır."
  },
  {
    id: "volkanik-ic-anadolu",
    name: "İç Anadolu Volkanik Dağları",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    mountains: ["karadag-ic", "karacadag-ic", "erciyes", "melendiz", "hasan"],
    story: "ŞİFRE: **\"Kekeme Hasan\"** (Karadağ, Karacadağ, Erciyes, Melendiz, Hasan Dağı)\n\n• **K**aradağ (Karaman)\n• **K**aracadağ (Konya)\n• **E**rciyes Dağı (Kayseri)\n• **M**elendiz Dağı (Niğde)\n• **Hasan** Dağı (Aksaray)"
  },
  {
    id: "volkanik-dogu-anadolu",
    name: "Doğu Anadolu Volkanik Dağları",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.4)",
    mountains: ["nemrut", "suphan", "tendurek", "agri"],
    story: "ŞİFRE: **\"NESTLA\"** (veya **SANET**)\n\n• **N**emrut Dağı (Bitlis - Dünyanın 2. büyük krater gölü)\n• **E** / **S**üphan Dağı (Bitlis / Ağrı)\n• **T**endürek Dağı (Ağrı / Van - Aktif gaz çıkışları)\n• **L** / **A**ğrı Dağı (5.137 m - Türkiye'nin zirvesi)\n\n📌 **Güneydoğu Anadolu:** Karacadağ (Şanlıurfa/Diyarbakır - Türkiye'nin en yayvan kalkan volkanı)\n📌 **Ege:** Manisa Kula Volkanları (Türkiye'nin en genç volkanik sahası)"
  }
];
