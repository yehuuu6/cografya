// ============================================================================
// 🌲 Türkiye Millî Parkları Kodlama & Hafıza Teknikleri Veri Tabanı
// UNESCO Miras Alanları, Tarihi ve Doğa Millî Parkları
// ============================================================================

export const NATIONAL_PARKS_DATA = [
  // === UNESCO DÜNYA MİRASI MİLLÎ PARKLAR ===
  {
    id: "goreme",
    name: "Göreme Millî Parkı ve Kapadokya",
    province: "Nevşehir",
    region: "İç Anadolu",
    isUNESCO: true,
    unescoDetail: "1985 - Karma Miras (Doğal ve Kültürel)",
    features: "Peri bacaları, kayalara oyulmuş kiliseler ve yeraltı şehirleri."
  },
  {
    id: "truva",
    name: "Truva Millî Parkı",
    province: "Çanakkale",
    region: "Marmara",
    isUNESCO: true,
    unescoDetail: "1998 - Dünya Kültür Mirası",
    features: "İlyada destanına konu olan antik Truva kenti ve tarihi savaş alanları."
  },
  {
    id: "hattusa",
    name: "Hattuşa: Hitit Başkenti Millî Parkı",
    province: "Çorum",
    region: "Karadeniz / İç Anadolu",
    isUNESCO: true,
    unescoDetail: "1986 - Dünya Kültür Mirası",
    features: "Hitit İmparatorluğu'nun başkenti, Aslanlı Kapı, Yazılıkaya açık hava tapınağı."
  },
  {
    id: "nemrut-dagi",
    name: "Nemrut Dağı Millî Parkı",
    province: "Adıyaman",
    region: "Güneydoğu Anadolu",
    isUNESCO: true,
    unescoDetail: "1987 - Dünya Kültür Mirası",
    features: "Kommagene Krallığı'na ait dev tanrı heykelleri ve tümülüs."
  },
  {
    id: "pamukkale",
    name: "Pamukkale - Hierapolis Millî Parkı",
    province: "Denizli",
    region: "Ege",
    isUNESCO: true,
    unescoDetail: "1988 - Karma Miras (Doğal ve Kültürel)",
    features: "Bembeyaz traverten terasları ve antik Hierapolis şifalı kaplıca kenti."
  },
  {
    id: "gordion-sakarya",
    name: "Sakarya Meydan Muharebesi Tarihi MP & Gordion",
    province: "Ankara",
    region: "İç Anadolu",
    isUNESCO: true,
    unescoDetail: "2023 - Gordion Antik Kenti UNESCO Kültür Mirası",
    features: "Frigya başkenti Gordion (Midas Tumulusü) ve Sakarya Meydan Muharebesi siperleri."
  },

  // === DİĞER ÖNEMLİ TARİHİ VE KÜLTÜREL MİLLÎ PARKLAR ===
  {
    id: "gelibolu",
    name: "Çanakkale Savaşları Gelibolu Tarihi Millî Parkı",
    province: "Çanakkale",
    region: "Marmara",
    isUNESCO: false,
    features: "1915 Çanakkale Deniz ve Kara Savaşları şehitlikleri ve anıtları."
  },
  {
    id: "baskomutan",
    name: "Başkomutan Tarihi Millî Parkı",
    province: "Afyonkarahisar / Kütahya / Uşak",
    region: "Ege",
    isUNESCO: false,
    features: "Büyük Taarruz ve Dumlupınar Meydan Muharebesi alanları."
  },
  {
    id: "nene-hatun",
    name: "Nene Hatun Tarihi Millî Parkı",
    province: "Erzurum",
    region: "Doğu Anadolu",
    isUNESCO: false,
    features: "93 Harbi Aziziye Tabyaları ve kadın kahramanımız Nene Hatun."
  },
  {
    id: "sarikamis",
    name: "Sarıkamış-Allahüekber Dağları Millî Parkı",
    province: "Kars / Erzurum",
    region: "Doğu Anadolu",
    isUNESCO: false,
    features: "I. Dünya Savaşı Sarıkamış şehitliği ve sarıçam ormanları."
  },
  {
    id: "istiklal-yolu",
    name: "İstiklal Yolu Tarihi Millî Parkı",
    province: "Kastamonu / Çankırı",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Milli Mücadele'de İnebolu'dan Ankara'ya mühimmat taşınan tarihi yol."
  },

  // === DOĞA VE BİYOÇEŞİTLİLİK MİLLÎ PARKLARI ===
  {
    id: "yozgat-camligi",
    name: "Yozgat Çamlığı Millî Parkı",
    province: "Yozgat",
    region: "İç Anadolu",
    isUNESCO: false,
    features: "Türkiye'nin ilan edilen İLK Millî Parkı (1958). Kafkas çamı türü."
  },
  {
    id: "kure-daglari",
    name: "Küre Dağları Millî Parkı",
    province: "Kastamonu / Bartın",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Türkiye'nin PAN Parks (Avrupa Korunan Alanlar Ağı) sertifikalı TEK milli parkı."
  },
  {
    id: "igneada",
    name: "İğneada Longoz Ormanları Millî Parkı",
    province: "Kırklareli",
    region: "Marmara",
    isUNESCO: false,
    features: "Avrupa'nın en büyük subasar (longoz) orman ekosistemi."
  },
  {
    id: "karatepe-aslantas",
    name: "Karatepe-Aslantaş Millî Parkı",
    province: "Osmaniye",
    region: "Akdeniz",
    isUNESCO: false,
    features: "Türkiye'nin İLK açık hava müzesi barındıran millî parkı (Geç Hitit)."
  },
  {
    id: "altindere",
    name: "Altındere Vadisi Millî Parkı",
    province: "Trabzon",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Sarp kayalıklara kurulu dünyaca ünlü tarihi Sümela Manastırı."
  },
  {
    id: "yedigoller",
    name: "Yedigöller Millî Parkı",
    province: "Bolu",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Heyelan set oluşumlu 7 göl ve zengin sonbahar yaprak örtüsü."
  },
  {
    id: "abant",
    name: "Abant Gölü Millî Parkı",
    province: "Bolu",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Heyelan set gölü ve çevresindeki çam-göknar ormanları."
  },
  {
    id: "uludag",
    name: "Uludağ Millî Parkı",
    province: "Bursa",
    region: "Marmara",
    isUNESCO: false,
    features: "Türkiye'nin en önemli kış sporları ve granit batolit kütlesi."
  },
  {
    id: "manyas",
    name: "Kuşcenneti Millî Parkı (Manyas)",
    province: "Balıkesir",
    region: "Marmara",
    isUNESCO: false,
    features: "Avrupa Konseyi A Sınıfı diplomaya sahip küresel göçmen kuş alanı."
  },
  {
    id: "kackar",
    name: "Kaçkar Dağları Millî Parkı",
    province: "Rize / Artvin",
    region: "Karadeniz",
    isUNESCO: false,
    features: "Buzul gölleri, yaylaları ve Doğu Karadeniz'in en yüksek zirveleri."
  },
  {
    id: "spil-dagi",
    name: "Spil Dağı Millî Parkı",
    province: "Manisa",
    region: "Ege",
    isUNESCO: false,
    features: "Ağlayan Kaya (Niobe), Yılkı Atları ve Manisa lalesi."
  },
  {
    id: "dilek-yarimadasi",
    name: "Dilek Yarımadası - Büyük Menderes Deltası MP",
    province: "Aydın",
    region: "Ege",
    isUNESCO: false,
    features: "Akdeniz foku, zengin flora ve delta sulak alanı."
  },
  {
    id: "munzur",
    name: "Munzur Vadisi Millî Parkı",
    province: "Tunceli",
    region: "Doğu Anadolu",
    isUNESCO: false,
    features: "Munzur gözeleri, zengin endemik florası ve kanyon vadisi."
  },
  {
    id: "agri-dagi",
    name: "Ağrı Dağı Millî Parkı",
    province: "Ağrı / Iğdır",
    region: "Doğu Anadolu",
    isUNESCO: false,
    features: "Türkiye'nin 5.137 m ile en yüksek zirvesi ve takke buzulu."
  },
  {
    id: "sultansazligi",
    name: "Sultansazlığı Millî Parkı",
    province: "Kayseri",
    region: "İç Anadolu",
    isUNESCO: false,
    features: "RAMSAR alanı tatlı ve tuzlu su ekosistemi göçmen kuş barınağı."
  },
  {
    id: "botan-vadisi",
    name: "Botan Vadisi Millî Parkı",
    province: "Siirt",
    region: "Güneydoğu Anadolu",
    isUNESCO: false,
    features: "Derin kanyon vadisi ve tarihi ipek yolu geçidi."
  },
  {
    id: "cilo-sat",
    name: "Hakkari Cilo ve Sat Dağları Millî Parkı",
    province: "Hakkâri",
    region: "Doğu Anadolu",
    isUNESCO: false,
    features: "Türkiye'nin 2. en yüksek zirvesi (Uludoruk) ve sirke buzulları."
  },
  {
    id: "saklikent",
    name: "Saklıkent Millî Parkı",
    province: "Muğla / Antalya",
    region: "Ege / Akdeniz",
    isUNESCO: false,
    features: "Eşen Çayı'nın kanyonu, derin kanyon yürüyüş rotaları."
  },
  {
    id: "koprulu-kanyon",
    name: "Köprülü Kanyon Millî Parkı",
    province: "Antalya",
    region: "Akdeniz",
    isUNESCO: false,
    features: "Rafting sporu, Olukköprü ve dünyaca ünlü safari alanı."
  },
  {
    id: "beydaglari",
    name: "Beydağları Sahil Millî Parkı (Olimpos)",
    province: "Antalya",
    region: "Akdeniz",
    isUNESCO: false,
    features: "Yanartaş (Chimaera), Olimpos antik kenti ve Çıralı sahili."
  },
  {
    id: "geben-vadisi",
    name: "Geben Vadisi Millî Parkı",
    province: "Kahramanmaraş",
    region: "Akdeniz",
    isUNESCO: false,
    features: "Türkiye'nin 30 Mayıs 2025'te ilan edilen 50. ve EN SON Millî Parkı. Anadolu Çaprazı biyoçeşitliliği ve Meryemçil Kalesi."
  }
];

export const NATIONAL_PARK_CATEGORIES = [
  {
    id: "unesco-milli-parklar",
    name: "UNESCO Dünya Mirası Millî Parklar",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    parks: ["goreme", "truva", "hattusa", "nemrut-dagi", "pamukkale", "gordion-sakarya"],
    story: "ŞİFRE: **\"TURNA-G-H\"** veya **\"G-U-N-H-A-T\"**\n\n• **T**ruva Millî Parkı (Çanakkale) - UNESCO Kültür Mirası\n• **U**lu Dağlar / Gordion (Ankara) - Frigya Başkenti UNESCO Kültür\n• **R**ölyefli Nemrut Dağı (Adıyaman) - Kommagene Krallığı UNESCO Kültür\n• **N**evşehir Göreme (Nevşehir) - Kapadokya UNESCO Karma Miras\n• **A**ntik Hierapolis / Pamukkale (Denizli) - UNESCO Karma Miras\n• **H**attuşa Hitit Başkenti (Çorum) - UNESCO Kültür Mirası\n\n📌 **ÖSYM NOTU:** Türkiye'de hem doğal hem kültürel (Karma) mirasa sahip 2 alan vardır: Göreme/Kapadokya ve Pamukkale/Hierapolis!"
  },
  {
    id: "tarihi-milli-parklar",
    name: "Tarihi Millî Parklar ve Medeniyet Simgeleri",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.15)",
    borderColor: "rgba(236, 72, 153, 0.4)",
    parks: ["gelibolu", "baskomutan", "nene-hatun", "sarikamis", "istiklal-yolu", "karatepe-aslantas"],
    story: "ŞİFRE: **\"MİLLİ ZAFERLER & ANTİK ESERLER\"**\n\n• **Gelibolu Yarımadası** (Çanakkale): 1915 Çanakkale Şehitlikleri.\n• **Başkomutan MP** (Afyon/Kütahya/Uşak): Büyük Taarruz zaferi.\n• **Nene Hatun MP** (Erzurum): 93 Harbi Aziziye Tabyaları.\n• **Sarıkamış Allahüekber MP** (Kars/Erzurum): Harekat şehitleri.\n• **İstiklal Yolu MP** (Kastamonu/Çankırı): İnebolu - Ankara cephane hattı.\n• **Karatepe-Aslantaş MP** (Osmaniye): Türkiye'nin İLK Açık Hava Müzesi!"
  },
  {
    id: "doga-milli-parklar",
    name: "Doğa, Özel Statü ve Biyoçeşitlilik Millî Parkları",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    parks: ["geben-vadisi", "yozgat-camligi", "kure-daglari", "igneada", "manyas", "sultansazligi", "altindere"],
    story: "📌 **İLK VE EN'LER:**\n\n• **Geben Vadisi** (Kahramanmaraş): Türkiye'nin 30 Mayıs 2025'te ilan edilen **50. ve EN SON** Millî Parkı.\n• **Yozgat Çamlığı** (Yozgat): Türkiye'nin 1958'de ilan edilen **İLK** Millî Parkı.\n• **Küre Dağları** (Kastamonu/Bartın): **PAN Parks** (Avrupa Korunan Alanlar Ağı) sertifikalı TEK milli parkımız.\n• **İğneada Longoz Ormanları** (Kırklareli): Avrupa'nın en büyük subasar ormanı.\n• **Manyas Kuşcenneti** (Balıkesir): Avrupa Konseyi A Sınıfı Diplomaya sahip göçmen kuş alanı.\n• **Sultansazlığı** (Kayseri): RAMSAR Sözleşmeli tatlı/tuzlu su sulak alan MP."
  }
];
