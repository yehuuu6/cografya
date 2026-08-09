// ============================================================================
// 🌲 Türkiye Millî Parkları Soru Veri Tabanı (%100 Harita Pin Tıklamalı)
// SVG Matematiksel İl Merkezleri İle %100 Kusursuz Konumlar
// ============================================================================

export const NATIONAL_PARKS_QUESTIONS_DATA = [
  // --- 1. Truva Millî Parkı (UNESCO - Çanakkale) ---
  {
    id: "np-loc-truva",
    question: "İlyada destanına konu olan tahta at heykeli ve antik kent kalıntılarıyla UNESCO Dünya Kültür Mirası listesinde yer alan Truva Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Truva Millî Parkı (Çanakkale)",         type: "UNESCO Kültür Mirası", x: 6.5,  y: 23.7 },
      { label: "II",  name: "Spil Dağı Millî Parkı (Manisa)",         type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "III", name: "Dilek Yarımadası MP (Aydın)",            type: "Doğa Millî Parkı",     x: 9.5,  y: 56.0 },
      { label: "IV",  name: "Pamukkale Millî Parkı (Denizli)",        type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
      { label: "V",   name: "Uludağ Millî Parkı (Bursa)",            type: "Doğa Millî Parkı",     x: 19.4, y: 25.6 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Truva Millî Parkı - Çanakkale). 1998 yılında UNESCO Dünya Kültür Mirası ilan edilmiş, efsanevi Truva Savaşları'nın geçtiği tarihi millî parkımızdır.",
  },

  // --- 2. Hattuşa: Hitit Başkenti Millî Parkı (UNESCO - Çorum) ---
  {
    id: "np-loc-hattusa",
    question: "Hitit İmparatorluğu'nun başkenti olan, Aslanlı Kapı ve Yazılıkaya Açık Hava Tapınağı'na ev sahipliği yaparak UNESCO Dünya Kültür Mirası seçilen Hattuşa Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Yozgat Çamlığı MP (Yozgat)",            type: "İlk Millî Park",       x: 49.1, y: 33.2 },
      { label: "II",  name: "Hattuşa Millî Parkı (Çorum)",            type: "UNESCO Kültür Mirası", x: 47.1, y: 23.7 },
      { label: "III", name: "Göreme Millî Parkı (Nevşehir)",         type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
      { label: "IV",  name: "Küre Dağları MP (Kastamonu/Bartın)",    type: "PAN Parks Sertifikalı",x: 38.2, y: 15.2 },
      { label: "V",   name: "Sultansazlığı MP (Kayseri)",             type: "RAMSAR Sulak Alan",    x: 52.1, y: 48.4 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Hattuşa Millî Parkı - Çorum). 1986 yılında UNESCO Dünya Mirası listesine alınan Hitit medeniyeti başkentidir.",
  },

  // --- 3. Gordion & Sakarya Meydan Muharebesi MP (UNESCO - Ankara) ---
  {
    id: "np-loc-gordion",
    question: "Frigya medeniyetinin başkenti Gordion antik kenti (UNESCO) ile Sakarya Meydan Muharebesi siperlerine ev sahipliği yapan Tarihi Millî Parkımız haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Başkomutan Tarihi MP (Afyonkarahisar)", type: "Tarihi Millî Park",    x: 25.3, y: 44.5 },
      { label: "II",  name: "Sakarya Meydan Muharebesi & Gordion MP (Ankara)", type: "UNESCO Kültür Mirası", x: 37.2, y: 32.2 },
      { label: "III", name: "Yedigöller MP (Bolu)",                  type: "Doğa Millî Parkı",     x: 31.3, y: 19.9 },
      { label: "IV",  name: "Hattuşa MP (Çorum)",                    type: "UNESCO Kültür Mirası", x: 47.1, y: 23.7 },
      { label: "V",   name: "Soğuksu MP (Ankara - Kızılcahamam)",    type: "Doğa Millî Parkı",     x: 38.2, y: 26.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Sakarya Meydan Muharebesi & Gordion MP - Ankara). Gordion Antik Kenti 2023 yılında UNESCO Dünya Kültür Mirası seçilmiştir.",
  },

  // --- 4. Nemrut Dağı Millî Parkı (UNESCO - Adıyaman) ---
  {
    id: "np-loc-nemrut",
    question: "Kommagene Krallığı'na ait dev tanrı heykelleri ve tümülüsüyle UNESCO Dünya Kültür Mirası listesinde yer alan Nemrut Dağı Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Göreme MP (Nevşehir)",                  type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
      { label: "II",  name: "Botan Vadisi MP (Siirt)",               type: "Kanyon Vadisi",        x: 83.3, y: 55.0 },
      { label: "III", name: "Nemrut Dağı Millî Parkı (Adıyaman)",     type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "IV",  name: "Munzur Vadisi MP (Tunceli)",            type: "Kanyon Vadisi",        x: 71.5, y: 37.9 },
      { label: "V",   name: "Karatepe-Aslantaş MP (Osmaniye)",       type: "Açık Hava Müzesi",     x: 55.1, y: 65.4 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Nemrut Dağı Millî Parkı - Adıyaman). 1987 yılında UNESCO Mirası seçilmiştir. (Not: Bitlis'teki Nemrut Kalderası volkanik göldür, milli park olan Adıyaman'dakidir).",
  },

  // --- 5. Pamukkale - Hierapolis Millî Parkı (UNESCO - Denizli) ---
  {
    id: "np-loc-pamukkale",
    question: "Bembeyaz traverten terasları ve antik Hierapolis şifalı kenti ile Türkiye'nin 2 Karma (Doğal/Kültürel) UNESCO mirasından biri olan millî park haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Spil Dağı MP (Manisa)",                 type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "II",  name: "Pamukkale-Hierapolis MP (Denizli)",     type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
      { label: "III", name: "Dilek Yarımadası MP (Aydın)",            type: "Doğa Millî Parkı",     x: 9.5,  y: 56.0 },
      { label: "IV",  name: "Saklıkent MP (Muğla/Antalya)",           type: "Kanyon Millî Parkı",   x: 16.0, y: 66.5 },
      { label: "V",   name: "Kovada Gölü / Burdur Çevresi",          type: "Doğa Millî Parkı",     x: 23.5, y: 62.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Pamukkale - Hierapolis MP - Denizli). 1988'de UNESCO Dünya Karma (Doğal ve Kültürel) Mirası ilan edilmiştir.",
  },

  // --- 6. Göreme Millî Parkı ve Kapadokya (UNESCO - Nevşehir) ---
  {
    id: "np-loc-goreme",
    question: "Peri bacaları, kayalara oyulu vadileri ve yeraltı şehirleriyle Türkiye'nin ilk ilan edilen UNESCO Karma Miras alanı olan Göreme Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Yozgat Çamlığı MP (Yozgat)",            type: "İlk Millî Park",       x: 49.1, y: 33.2 },
      { label: "II",  name: "Göreme Millî Parkı (Nevşehir)",         type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
      { label: "III", name: "Sultansazlığı MP (Kayseri)",             type: "RAMSAR Sulak Alan",    x: 52.1, y: 48.4 },
      { label: "IV",  name: "Hattuşa MP (Çorum)",                    type: "UNESCO Kültür Mirası", x: 47.1, y: 23.7 },
      { label: "V",   name: "Aladağlar MP (Niğde/Adana/Kayseri)",     type: "Karstik / Dağ MP",     x: 46.1, y: 56.9 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Göreme Millî Parkı ve Kapadokya - Nevşehir). 1985 yılında UNESCO Dünya Karma Mirası ilan edilmiştir.",
  },

  // --- 7. Yozgat Çamlığı Millî Parkı (Türkiye'nin İLK Millî Parkı - Yozgat) ---
  {
    id: "np-loc-yozgat",
    question: "1958 yılında ilan edilen Türkiye'nin İLK Millî Parkı unvanına sahip Yozgat Çamlığı Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Hattuşa MP (Çorum)",                    type: "UNESCO Kültür Mirası", x: 47.1, y: 23.7 },
      { label: "II",  name: "Yozgat Çamlığı Millî Parkı (Yozgat)",   type: "Türkiye'nin İLK Millî Parkı", x: 49.1, y: 33.2 },
      { label: "III", name: "Soğuksu MP (Ankara)",                   type: "Doğa Millî Parkı",     x: 38.2, y: 26.5 },
      { label: "IV",  name: "Göreme MP (Nevşehir)",                  type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
      { label: "V",   name: "İstiklal Yolu MP (Kastamonu/Çankırı)",  type: "Tarihi Millî Park",    x: 39.2, y: 20.8 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Yozgat Çamlığı Millî Parkı - Yozgat). 1958 yılında Türkiye'nin ilan edilen ilk milli parkıdır.",
  },

  // --- 8. Küre Dağları Millî Parkı (PAN Parks - Kastamonu/Bartın) ---
  {
    id: "np-loc-kure",
    question: "Türkiye'nin Avrupa Korunan Alanlar Ağı (PAN Parks) sertifikasına sahip TEK milli parkı olan Küre Dağları Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "İğneada Longoz Ormanları MP (Kırklareli)", type: "Subasar Orman",   x: 9.4,  y: 8.5 },
      { label: "II",  name: "Yedigöller MP (Bolu)",                  type: "Doğa Millî Parkı",     x: 31.3, y: 19.9 },
      { label: "III", name: "Küre Dağları Millî Parkı (Kastamonu/Bartın)", type: "PAN Parks Sertifikalı", x: 38.2, y: 15.2 },
      { label: "IV",  name: "Hattuşa MP (Çorum)",                    type: "UNESCO Kültür Mirası", x: 47.1, y: 23.7 },
      { label: "V",   name: "Altındere Vadisi MP (Trabzon)",         type: "Sümela Manastırı MP",  x: 73.9, y: 19.0 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Küre Dağları Millî Parkı - Kastamonu/Bartın). Valla Kanyonu ve Ilgarini Mağarası ile PAN Parks sertifikalı tek korunan alanımızdır.",
  },

  // --- 9. İğneada Longoz Ormanları Millî Parkı (Kırklareli) ---
  {
    id: "np-loc-igneada",
    question: "Avrupa'nın ve Türkiye'nin en büyük subasar (longoz) orman ekosistemini barındıran İğneada Longoz Ormanları Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "İğneada Longoz Ormanları MP (Kırklareli)", type: "Subasar Longoz Ormanı", x: 9.4, y: 8.5 },
      { label: "II",  name: "Gelibolu Yarımadası MP (Çanakkale)",    type: "Tarihi Millî Park",    x: 6.5,  y: 23.7 },
      { label: "III", name: "Manyas Kuşcenneti MP (Balıkesir)",      type: "Kuş Cenneti MP",       x: 12.9, y: 25.6 },
      { label: "IV",  name: "Uludağ MP (Bursa)",                     type: "Doğa Millî Parkı",     x: 19.4, y: 25.6 },
      { label: "V",   name: "Yedigöller MP (Bolu)",                  type: "Doğa Millî Parkı",     x: 31.3, y: 19.9 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (İğneada Longoz Ormanları MP - Kırklareli). Trakya Karadeniz kıyısında benzersiz subasar ormanlar barındırır.",
  },

  // --- 10. Karatepe-Aslantaş Millî Parkı (İLK Açık Hava Müzesi - Osmaniye) ---
  {
    id: "np-loc-karatepe",
    question: "Geç Hitit dönemine ait kabartmalarıyla Türkiye'nin İLK açık hava müzesi barındıran milli parkı olan Karatepe-Aslantaş Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Köprülü Kanyon MP (Antalya)",           type: "Kanyon Millî Parkı",   x: 29.8, y: 69.2 },
      { label: "II",  name: "Nemrut Dağı MP (Adıyaman)",             type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "III", name: "Karatepe-Aslantaş MP (Osmaniye)",       type: "İlk Açık Hava Müzesi", x: 55.1, y: 65.4 },
      { label: "IV",  name: "Botan Vadisi MP (Siirt)",               type: "Kanyon Vadisi MP",     x: 83.3, y: 55.0 },
      { label: "V",   name: "Göreme MP (Nevşehir)",                  type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Karatepe-Aslantaş Millî Parkı - Osmaniye). Çukurova kıyısında Türkiye'nin ilk açık hava müzesine sahip milli parkıdır.",
  },

  // --- 11. Altındere Vadisi Millî Parkı (Sümela - Trabzon) ---
  {
    id: "np-loc-altindere",
    question: "Sarp kayalıklara inşa edilmiş tarihi Sümela Manastırı'na ev sahipliği yapan Altındere Vadisi Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Küre Dağları MP (Kastamonu/Bartın)",    type: "PAN Parks Sertifikalı",x: 38.2, y: 15.2 },
      { label: "II",  name: "Altındere Vadisi MP (Trabzon)",         type: "Sümela Manastırı MP",  x: 73.9, y: 19.0 },
      { label: "III", name: "Kaçkar Dağları MP (Rize/Artvin)",       type: "Buzul Dağları MP",     x: 80.4, y: 18.0 },
      { label: "IV",  name: "Munzur Vadisi MP (Tunceli)",            type: "Kanyon Vadisi MP",     x: 71.5, y: 37.9 },
      { label: "V",   name: "Sarıkamış MP (Kars/Erzurum)",           type: "Tarihi Millî Park",    x: 85.3, y: 24.6 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Altındere Vadisi Millî Parkı - Trabzon). Sümela Manastırı ve Karadeniz ladin ormanlarıyla ünlü millî parkımızdır.",
  },

  // --- 12. Sarıkamış-Allahüekber Dağları Millî Parkı (Kars/Erzurum) ---
  {
    id: "np-loc-sarikamis",
    question: "I. Dünya Savaşı Sarıkamış Harekâtı şehitleri anısına tarihi millî park ilan edilen sarıçam ormanlarıyla kaplı alan haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Nene Hatun Tarihi MP (Erzurum)",        type: "Tarihi Millî Park",    x: 78.4, y: 30.3 },
      { label: "II",  name: "Sarıkamış-Allahüekber Dağları MP (Kars/Erzurum)", type: "Tarihi Şehitlik MP", x: 85.3, y: 24.6 },
      { label: "III", name: "Ağrı Dağı MP (Ağrı/Iğdır)",             type: "Buzul / Dağ MP",       x: 92.8, y: 29.4 },
      { label: "IV",  name: "Kaçkar Dağları MP (Rize/Artvin)",       type: "Buzul Dağları MP",     x: 80.4, y: 18.0 },
      { label: "V",   name: "Cilo-Sat Dağları MP (Hakkâri)",         type: "Buzul Dağları MP",     x: 92.8, y: 55.0 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Sarıkamış-Allahüekber Dağları MP - Kars/Erzurum). Doğu Anadolu'nun en önemli tarihi ve sarıçam orman parkıdır.",
  },

  // --- 13. Uludağ Millî Parkı (Bursa) ---
  {
    id: "np-loc-uludag",
    question: "Marmara Bölgesi'nin en yüksek kütlesi olup Türkiye'nin önemli kış turizm merkezi sayılan Uludağ Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Uludağ Millî Parkı (Bursa)",            type: "Doğa Millî Parkı",     x: 19.4, y: 25.6 },
      { label: "II",  name: "Spil Dağı MP (Manisa)",                 type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "III", name: "Yedigöller MP (Bolu)",                  type: "Doğa Millî Parkı",     x: 31.3, y: 19.9 },
      { label: "IV",  name: "Manyas Kuşcenneti MP (Balıkesir)",      type: "Kuş Cenneti MP",       x: 12.9, y: 25.6 },
      { label: "V",   name: "İğneada Longoz MP (Kırklareli)",         type: "Subasar Orman MP",     x: 9.4,  y: 8.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Uludağ Millî Parkı - Bursa). Granit batolit yapısı ve kış kitle turizmiyle ünlü milli parkımızdır.",
  },

  // --- 14. Manyas Kuşcenneti Millî Parkı (Balıkesir) ---
  {
    id: "np-loc-manyas",
    question: "Avrupa Konseyi A Sınıfı diplomaya sahip küresel göçmen kuş alanı olan Kuşcenneti (Manyas) Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Truva MP (Çanakkale)",                  type: "UNESCO Kültür Mirası", x: 6.5,  y: 23.7 },
      { label: "II",  name: "Kuşcenneti Millî Parkı (Balıkesir)",    type: "A Sınıfı Kuş Cenneti", x: 12.9, y: 25.6 },
      { label: "III", name: "Uludağ MP (Bursa)",                     type: "Doğa Millî Parkı",     x: 19.4, y: 25.6 },
      { label: "IV",  name: "Spil Dağı MP (Manisa)",                 type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "V",   name: "İğneada Longoz MP (Kırklareli)",         type: "Subasar Orman MP",     x: 9.4,  y: 8.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Kuşcenneti Millî Parkı - Balıkesir). Manyas Gölü kıyısında yer alan uluslararası koruma diplomalı alandır.",
  },

  // --- 15. Spil Dağı Millî Parkı (Manisa) ---
  {
    id: "np-loc-spil",
    question: "Ağlayan Kaya (Niobe) efsanesi, yılkı atları ve endemik Manisa Lalesi ile ünlü Spil Dağı Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Truva MP (Çanakkale)",                  type: "UNESCO Kültür Mirası", x: 6.5,  y: 23.7 },
      { label: "II",  name: "Spil Dağı Millî Parkı (Manisa)",        type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "III", name: "Dilek Yarımadası MP (Aydın)",            type: "Doğa Millî Parkı",     x: 9.5,  y: 56.0 },
      { label: "IV",  name: "Pamukkale MP (Denizli)",                type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
      { label: "V",   name: "Saklıkent MP (Muğla/Antalya)",           type: "Kanyon Millî Parkı",   x: 16.0, y: 66.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Spil Dağı Millî Parkı - Manisa). Ege Bölgesi'nde Manisa ili sınırları içinde yer alan kalkerli dağ kütlesidir.",
  },

  // --- 16. Dilek Yarımadası - Büyük Menderes Deltası MP (Aydın) ---
  {
    id: "np-loc-dilek",
    question: "Akdeniz foku popülasyonu, zengin makilik florası ve Büyük Menderes Deltası sulak alanı ile korunan milli park haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Spil Dağı MP (Manisa)",                 type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "II",  name: "Dilek Yarımadası - Delta MP (Aydın)",  type: "Biyoçeşitlilik MP",    x: 9.5,  y: 56.0 },
      { label: "III", name: "Pamukkale MP (Denizli)",                type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
      { label: "IV",  name: "Saklıkent MP (Muğla/Antalya)",           type: "Kanyon Millî Parkı",   x: 16.0, y: 66.5 },
      { label: "V",   name: "Köprülü Kanyon MP (Antalya)",           type: "Kanyon Millî Parkı",   x: 29.8, y: 69.2 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Dilek Yarımadası - Büyük Menderes Deltası MP - Aydın). Kuşadası karşısında zengin denizel ve karasal biyoçeşitlilik barındırır.",
  },

  // --- 17. Saklıkent Millî Parkı (Muğla / Antalya) ---
  {
    id: "np-loc-saklikent",
    question: "Eşen Çayı kolu tarafından açılmış derin ve sarp kanyonuyla ünlü Saklıkent Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Dilek Yarımadası MP (Aydın)",            type: "Biyoçeşitlilik MP",    x: 9.5,  y: 56.0 },
      { label: "II",  name: "Saklıkent Millî Parkı (Muğla/Antalya)", type: "Kanyon Millî Parkı",   x: 16.0, y: 66.5 },
      { label: "III", name: "Köprülü Kanyon MP (Antalya)",           type: "Kanyon Millî Parkı",   x: 29.8, y: 69.2 },
      { label: "IV",  name: "Pamukkale MP (Denizli)",                type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
      { label: "V",   name: "Beydağları Sahil MP (Antalya)",         type: "Sahil / Antik MP",     x: 28.5, y: 72.0 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Saklıkent Millî Parkı - Muğla/Antalya). Fethiye - Seydikemer sınırında sarp ve soğuk sulu dev kanyon vadisidir.",
  },

  // --- 18. Köprülü Kanyon Millî Parkı (Antalya) ---
  {
    id: "np-loc-koprulu",
    question: "Köprüçay üzerinde rafting sporunun merkezi olan ve tarihi Olukköprü'yü barındıran Köprülü Kanyon Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Saklıkent MP (Muğla/Antalya)",           type: "Kanyon Millî Parkı",   x: 16.0, y: 66.5 },
      { label: "II",  name: "Köprülü Kanyon MP (Antalya)",           type: "Rafting / Kanyon MP",  x: 29.8, y: 69.2 },
      { label: "III", name: "Karatepe-Aslantaş MP (Osmaniye)",       type: "Açık Hava Müzesi",     x: 55.1, y: 65.4 },
      { label: "IV",  name: "Aladağlar MP (Niğde/Adana)",             type: "Karstik Dağ MP",       x: 46.1, y: 56.9 },
      { label: "V",   name: "Pamukkale MP (Denizli)",                type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Köprülü Kanyon Millî Parkı - Antalya). Antalya'nın Manavgat ilçesinde rafting turizminin kalbidir.",
  },

  // --- 19. Sultansazlığı Millî Parkı (Kayseri) ---
  {
    id: "np-loc-sultansazligi",
    question: "Erciyes Dağı güneyinde RAMSAR Sözleşmeli tatlı ve tuzlu su göl ekosistemi göçmen kuş barınağı Sultansazlığı Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Göreme MP (Nevşehir)",                  type: "UNESCO Karma Miras",   x: 45.6, y: 49.3 },
      { label: "II",  name: "Sultansazlığı Millî Parkı (Kayseri)",    type: "RAMSAR Sulak Alan MP", x: 52.1, y: 48.4 },
      { label: "III", name: "Yozgat Çamlığı MP (Yozgat)",            type: "İlk Millî Park",       x: 49.1, y: 33.2 },
      { label: "IV",  name: "Nemrut Dağı MP (Adıyaman)",             type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "V",   name: "Aladağlar MP (Niğde/Adana/Kayseri)",     type: "Karstik Dağ MP",       x: 46.1, y: 56.9 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Sultansazlığı Millî Parkı - Kayseri). Develi Ovası'nda yer alan Türkiye'nin en önemli kuş cennetlerinden biridir.",
  },

  // --- 20. Munzur Vadisi Millî Parkı (Tunceli) ---
  {
    id: "np-loc-munzur",
    question: "Munzur gözeleri, zengin endemik florası ve derin kanyon vadisiyle Doğu Anadolu'nun en büyük milli parklarından biri haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Nemrut Dağı MP (Adıyaman)",             type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "II",  name: "Munzur Vadisi Millî Parkı (Tunceli)",   type: "Doğal Kanyon MP",      x: 71.5, y: 37.9 },
      { label: "III", name: "Altındere Vadisi MP (Trabzon)",         type: "Sümela Manastırı MP",  x: 73.9, y: 19.0 },
      { label: "IV",  name: "Botan Vadisi MP (Siirt)",               type: "Kanyon Vadisi MP",     x: 83.3, y: 55.0 },
      { label: "V",   name: "Sarıkamış MP (Kars/Erzurum)",           type: "Tarihi Millî Park",    x: 85.3, y: 24.6 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Munzur Vadisi Millî Parkı - Tunceli). Akarsu kanyonları ve endemik bitki türleriyle ünlü doğa koruma alanıdır.",
  },

  // --- 21. Botan Vadisi Millî Parkı (Siirt) ---
  {
    id: "np-loc-botan",
    question: "Dicle Nehri kolu üzerinde dik uçurum kanyonları ve tarihi ipek yolu geçitleriyle ilan edilen Botan Vadisi Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Nemrut Dağı MP (Adıyaman)",             type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "II",  name: "Botan Vadisi Millî Parkı (Siirt)",       type: "Kanyon Vadisi MP",     x: 83.3, y: 55.0 },
      { label: "III", name: "Munzur Vadisi MP (Tunceli)",            type: "Doğal Kanyon MP",      x: 71.5, y: 37.9 },
      { label: "IV",  name: "Cilo-Sat Dağları MP (Hakkâri)",         type: "Buzul Dağları MP",     x: 92.8, y: 55.0 },
      { label: "V",   name: "Karatepe-Aslantaş MP (Osmaniye)",       type: "Açık Hava Müzesi",     x: 55.1, y: 65.4 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Botan Vadisi Millî Parkı - Siirt). Güneydoğu Anadolu'nun en görkemli kanyon vadisidir.",
  },

  // --- 22. Hakkari Cilo ve Sat Dağları Millî Parkı (Hakkâri) ---
  {
    id: "np-loc-cilo",
    question: "Türkiye'nin 2. en yüksek zirvesi Uludoruk ve Türkiye'nin en büyük buzul alanlarını barındıran Cilo ve Sat Dağları Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Ağrı Dağı MP (Ağrı/Iğdır)",             type: "Buzul / Dağ MP",       x: 92.8, y: 29.4 },
      { label: "II",  name: "Sarıkamış MP (Kars/Erzurum)",           type: "Tarihi Millî Park",    x: 85.3, y: 24.6 },
      { label: "III", name: "Botan Vadisi MP (Siirt)",               type: "Kanyon Vadisi MP",     x: 83.3, y: 55.0 },
      { label: "IV",  name: "Cilo ve Sat Dağları MP (Hakkâri)",      type: "Buzul / Dağ MP",       x: 92.8, y: 55.0 },
      { label: "V",   name: "Munzur Vadisi MP (Tunceli)",            type: "Doğal Kanyon MP",      x: 71.5, y: 37.9 },
    ],
    correctLabel: "IV",
    explanation: "Doğru Cevap: IV (Cilo ve Sat Dağları Millî Parkı - Hakkâri). Yüksek sirk gölleri ve buzul kütleleriyle ünlü güneydoğu sınır dağ parkımızdır.",
  },

  // --- 23. Ağrı Dağı Millî Parkı (Ağrı / Iğdır) ---
  {
    id: "np-loc-agri",
    question: "Türkiye'nin 5.137 metre ile en yüksek zirvesine ve kalıcı takke buzuluna ev sahipliği yapan Ağrı Dağı Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Ağrı Dağı Millî Parkı (Ağrı/Iğdır)",   type: "En Yüksek Zirve MP",   x: 92.8, y: 29.4 },
      { label: "II",  name: "Sarıkamış MP (Kars/Erzurum)",           type: "Tarihi Millî Park",    x: 85.3, y: 24.6 },
      { label: "III", name: "Kaçkar Dağları MP (Rize/Artvin)",       type: "Buzul Dağları MP",     x: 80.4, y: 18.0 },
      { label: "IV",  name: "Cilo-Sat Dağları MP (Hakkâri)",         type: "Buzul Dağları MP",     x: 92.8, y: 55.0 },
      { label: "V",   name: "Altındere Vadisi MP (Trabzon)",         type: "Sümela Manastırı MP",  x: 73.9, y: 19.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Ağrı Dağı Millî Parkı - Ağrı/Iğdır). Türkiye'nin en yüksek volkanik kütlesi ve millî parkıdır.",
  },

  // --- 24. Başkomutan Tarihi Millî Parkı (Afyonkarahisar / Kütahya) ---
  {
    id: "np-loc-baskomutan",
    question: "Büyük Taarruz ve Dumlupınar Meydan Muharebesi'nin geçtiği topraklarda kurulan Başkomutan Tarihi Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Başkomutan Tarihi MP (Afyon/Kütahya)",  type: "Tarihi Meydan MP",     x: 25.3, y: 44.5 },
      { label: "II",  name: "Sakarya Muharebesi MP (Ankara)",       type: "UNESCO Kültür Mirası", x: 37.2, y: 32.2 },
      { label: "III", name: "Gelibolu Yarımadası MP (Çanakkale)",    type: "Tarihi Şehitlik MP",   x: 6.5,  y: 23.7 },
      { label: "IV",  name: "Spil Dağı MP (Manisa)",                 type: "Doğa Millî Parkı",     x: 12.5, y: 44.5 },
      { label: "V",   name: "Pamukkale MP (Denizli)",                type: "UNESCO Karma Miras",   x: 18.5, y: 56.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Başkomutan Tarihi Millî Parkı - Afyonkarahisar/Kütahya/Uşak). Milli Mücadele zaferlerimizin simge milli parkıdır.",
  },

  // --- 25. Geben Vadisi Millî Parkı (Türkiye'nin 50. ve EN SON Millî Parkı - Kahramanmaraş) ---
  {
    id: "np-loc-geben-vadisi",
    question: "30 Mayıs 2025 tarihinde ilan edilerek Türkiye'nin 50. ve EN SON Millî Parkı unvanını kazanan, Meryemçil Kalesi ve zengin biyoçeşitliliğiyle ünlü Geben Vadisi Millî Parkı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Geben Vadisi Millî Parkı (Kahramanmaraş)", type: "Türkiye'nin 50. Millî Parkı", x: 57.5, y: 58.8 },
      { label: "II",  name: "Sultansazlığı MP (Kayseri)",             type: "RAMSAR Sulak Alan MP", x: 52.1, y: 48.4 },
      { label: "III", name: "Nemrut Dağı MP (Adıyaman)",             type: "UNESCO Kültür Mirası", x: 67.0, y: 56.9 },
      { label: "IV",  name: "Karatepe-Aslantaş MP (Osmaniye)",       type: "Açık Hava Müzesi",     x: 55.1, y: 65.4 },
      { label: "V",   name: "Yozgat Çamlığı MP (Yozgat)",            type: "Türkiye'nin İLK Millî Parkı", x: 49.1, y: 33.2 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Geben Vadisi Millî Parkı - Kahramanmaraş). 30 Mayıs 2025 tarihinde ilan edilerek Türkiye'nin 50. ve en son milli parkı olma unvanını kazanmıştır.",
  }
];
