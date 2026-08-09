// ============================================================================
// 🏔️ Türkiye Platoları Soru Veri Tabanı (%100 ÖSYM KPSS Tipi)
// Karstik | Volkanik (Lav) | Aşınım Düzlüğü | Yatay Duruşlu (Tabaka Düzlüğü)
// ============================================================================

export const PLATEAUS_QUESTIONS_DATA = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. KARSTİK PLATOLAR (Akdeniz - Kireçtaşı / Çözünebilen Kayaçlar)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 1. Teke Platosu (Yer Bulma) ---
  {
    id: "plat-pos-teke",
    question: "Haritada Antalya-Muğla sınırlarında yer alan, karstik yapısı nedeniyle nüfusun seyrek ve kıl keçisi yetiştiriciliğinin yaygın olduğu Teke Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Teke Platosu (Antalya/Muğla)", type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "II",  name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
      { label: "III", name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "IV",  name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "V",   name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Teke Platosu). Akdeniz Bölgesi'nde kalker (kireçtaşı) çözünmesiyle oluşan karstik bir platodur.",
  },

  // --- 2. Taşeli Platosu (Yer Bulma) ---
  {
    id: "plat-pos-taseli",
    question: "Haritada Mersin-Karaman sınırlarında yer alan, Türkiye'nin en tenha ve engebeli karstik platolarından biri olan Taşeli Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
      { label: "II",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "III", name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
      { label: "IV",  name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
      { label: "V",   name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Taşeli Platosu). Akdeniz Bölgesi'nde kireçtaşlarının erimesiyle oluşmuş, yerleşmenin seyrek olduğu karstik platodur.",
  },

  // --- 3. Karstik Plato Türü Sorma ---
  {
    id: "plat-type-karstik",
    question: "Haritada gösterilen platolardan hangisi kireçtaşının (kalker) kimyasal çözünmesiyle oluşmuş bir KARSTİK platodur?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "II",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "III", name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "IV",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "V",   name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Teke Platosu). Teke ve Taşeli platoları kireçtaşının erimesiyle oluşan Akdeniz karstik platolarıdır.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. VOLKANİK PLATOLAR (Doğu Anadolu - Lav Örtüsü)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 4. Erzurum-Kars Platosu (Yer Bulma) ---
  {
    id: "plat-pos-erzurum-kars",
    question: "Haritada Doğu Anadolu'da geniş lav örtüleriyle kaplı, Türkiye'nin en yüksek, en soğuk ve çernezyom topraklarıyla tanınan Erzurum-Kars Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "II",  name: "Ardahan Platosu",              type: "Volkanik Plato",         x: 87.8, y: 13.9 },
      { label: "III", name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
      { label: "IV",  name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "V",   name: "Şanlıurfa Platosu",            type: "Yatay Duruşlu Plato",    x: 69.6, y: 63.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Erzurum-Kars Platosu). Volkanik püskürmeler sonucu oluşan lav örtülü en yüksek platodur; büyükbaş hayvancılık gelişmiştir.",
  },

  // --- 5. Ardahan Platosu (Yer Bulma) ---
  {
    id: "plat-pos-ardahan",
    question: "Haritada Türkiye'nin kuzeydoğu ucunda lav akıntılarıyla oluşmuş ve yaz yağışlarıyla oluşan gür çayırlarıyla bilinen Ardahan Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Ardahan Platosu",              type: "Volkanik Plato",         x: 87.8, y: 13.9 },
      { label: "II",  name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "III", name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "IV",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "V",   name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Ardahan Platosu). Doğu Anadolu'da lavların geniş alanları kaplamasıyla oluşan volkanik platosumuzdur.",
  },

  // --- 6. Volkanik Plato Türü Sorma ---
  {
    id: "plat-type-volkanik",
    question: "Haritada numaralandırılan alanlardan hangisinde lav örtülerinin geniş yer kapladığı VOLKANİK bir plato yer alır?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "II",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "III", name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "IV",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "V",   name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Volkanik Plato / Erzurum-Kars). Erzurum-Kars ve Ardahan platoları yanardağ patlamalarından çıkan lavların düzlükleri kaplamasıyla oluşmuş volkanik platolardır.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. AŞINIM DÜZLÜĞÜ PLATOLARI (Marmara - Eski Karasal Düzleşmeler)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 7. Çatalca-Kocaeli Platosu (Yer Bulma) ---
  {
    id: "plat-pos-catalca-kocaeli",
    question: "Haritada Türkiye'nin en alçak, en gelişmiş, sanayi ve nüfus yönünden en zengin aşınım düzlüğü platosu olan Çatalca-Kocaeli Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "II",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "III", name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "IV",  name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "V",   name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Çatalca-Kocaeli Platosu). Eski aşınım düzlüklerinin deniz seviyesine yakın yükselmesiyle oluşmuş, yükseltisi en az aşınım platosudur.",
  },

  // --- 8. Aşınım Platosu Türü Sorma ---
  {
    id: "plat-type-asinim",
    question: "Haritada numaralandırılan alanlardan hangisinde dış kuvvetlerin aşındırmasıyla oluşmuş bir AŞINIM DÜZLÜĞÜ PLATOSU yer alır?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "II",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "III", name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "IV",  name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "V",   name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Aşınım Düzlüğü Platosu / Çatalca-Kocaeli). Dış kuvvetlerin uzun yıllar yüksek arazileri aşındırıp hafifçe düzleştirmesiyle oluşan aşınım platosudur.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. YATAY DURUŞLU / TABAKA DÜZLÜĞÜ PLATOLARI (İç Anadolu, Güneydoğu, Ege)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 9. Haymana Platosu (Ankara - Yer Bulma) ---
  {
    id: "plat-pos-haymana",
    question: "Haritada Ankara güneyinde yer alan ve İç Anadolu'nun önemli yatay duruşlu tabaka düzlüğü platolarından biri olan Haymana Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "II",  name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "III", name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "IV",  name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
      { label: "V",   name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Haymana Platosu / Ankara). Yatay duruşlu tortul tabakaların akarsularla yarılmasıyla oluşan tabaka düzlüğü platosudur.",
  },

  // --- 10. Cihanbeyli Platosu (Konya - Yer Bulma) ---
  {
    id: "plat-pos-cihanbeyli",
    question: "Haritada Tuz Gölü'nün batısında Konya il sınırlarında yer alan yatay duruşlu Cihanbeyli Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "II",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "III", name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
      { label: "IV",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "V",   name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Cihanbeyli Platosu). İç Anadolu Bölgesi'nde tahıl tarımının yaygın olduğu yatay duruşlu bir tabaka düzlüğü platosudur.",
  },

  // --- 11. Obruk Platosu (Konya - Yer Bulma) ---
  {
    id: "plat-pos-obruk",
    question: "Haritada Tuz Gölü'nün güneyinde yer alan, derin çöküntü kuyuları (obruklar) barındıran yatay duruşlu Obruk Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
      { label: "II",  name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "III", name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
      { label: "IV",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "V",   name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Obruk Platosu). Yatay duruşlu kireçtaşı tabakalarında oluşan obruklarıyla tanınan plato alanımızdır.",
  },

  // --- 12. Bozok Platosu (Yozgat - İç Anadolu'nun En Büyüğü) ---
  {
    id: "plat-pos-bozok",
    question: "Haritada Yozgat ilinde yer alan, İç Anadolu Bölgesi'nin yüzölçümü en büyük yatay duruşlu platosu olan Bozok Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "II",  name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
      { label: "III", name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "IV",  name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "V",   name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Bozok Platosu). Kızılırmak yayı içerisinde yer alan ve İç Anadolu'nun en geniş yatay duruşlu platosudur.",
  },

  // --- 13. Uzunyayla Platosu (Sivas/Kayseri - Yer Bulma) ---
  {
    id: "plat-pos-uzunyayla",
    question: "Haritada Sivas-Kayseri sınırında İç Anadolu'nun doğusunda yer alan yüksek tabaka düzlüğü Uzunyayla Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
      { label: "II",  name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "III", name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "IV",  name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
      { label: "V",   name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Uzunyayla Platosu). İç Anadolu'nun Doğu Anadolu'ya geçiş sahasında yer alan yatay duruşlu yüksek platosudur.",
  },

  // --- 14. Yazılıkaya Platosu (Eskişehir/Afyon - Yer Bulma) ---
  {
    id: "plat-pos-yazilikaya",
    question: "Haritada Ege Bölgesi ile İç Anadolu sınırında (Eskişehir-Afyon) yer alan Yazılıkaya (Cihanbeyli/Ege) Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Yazılıkaya Platosu (Eskişehir)", type: "Yatay Duruşlu Plato",  x: 24.5, y: 41.5 },
      { label: "II",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "III", name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "IV",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "V",   name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Yazılıkaya Platosu). İç Batı Anadolu'da Eskişehir-Afyonkarahisar çevresinde yer alan tabaka düzlüğü platosudur.",
  },

  // --- 15. Gaziantep Platosu (Güneydoğu - Yer Bulma) ---
  {
    id: "plat-pos-gaziantep",
    question: "Haritada Güneydoğu Anadolu Bölgesi'nin batısında antep fıstığı ve zeytin tarımıyla öne çıkan Gaziantep Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
      { label: "II",  name: "Şanlıurfa Platosu",            type: "Yatay Duruşlu Plato",    x: 69.6, y: 63.5 },
      { label: "III", name: "Adıyaman Platosu",             type: "Yatay Duruşlu Plato",    x: 65.4, y: 58.2 },
      { label: "IV",  name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
      { label: "V",   name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Gaziantep Platosu). Güneydoğu Anadolu'da aşınmış yatay tortul tabakalardan oluşan plato alanımızdır.",
  },

  // --- 16. Şanlıurfa Platosu (Güneydoğu - Yer Bulma) ---
  {
    id: "plat-pos-sanliurfa",
    question: "Haritada Güneydoğu Anadolu Bölgesi'nin orta kesiminde Fırat Nehri çevresinde uzanan geniş Şanlıurfa Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Şanlıurfa Platosu",            type: "Yatay Duruşlu Plato",    x: 69.6, y: 63.5 },
      { label: "II",  name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
      { label: "III", name: "Adıyaman Platosu",             type: "Yatay Duruşlu Plato",    x: 65.4, y: 58.2 },
      { label: "IV",  name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "V",   name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Şanlıurfa Platosu). Güneydoğu Anadolu'da geniş tarım arazilerine sahip yatay duruşlu plato kütlesidir.",
  },

  // --- 17. Adıyaman Platosu (Güneydoğu - Yer Bulma) ---
  {
    id: "plat-pos-adiyaman",
    question: "Haritada Güneydoğu Anadolu'nun kuzeyinde, Toros Dağları'nın eteklerinde yer alan Adıyaman Platosu kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Adıyaman Platosu",             type: "Yatay Duruşlu Plato",    x: 65.4, y: 58.2 },
      { label: "II",  name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
      { label: "III", name: "Şanlıurfa Platosu",            type: "Yatay Duruşlu Plato",    x: 69.6, y: 63.5 },
      { label: "IV",  name: "Uzunyayla Platosu (Sivas)",    type: "Yatay Duruşlu Plato",    x: 57.0, y: 42.0 },
      { label: "V",   name: "Obruk Platosu (Konya)",        type: "Yatay Duruşlu Plato",    x: 37.5, y: 58.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Adıyaman Platosu). Güneydoğu Anadolu ile Doğu Anadolu geçiş sahasındaki yatay duruşlu tabaka plato alanıdır.",
  },

  // --- 18. Yatay Duruşlu Plato Türü Sorma ---
  {
    id: "plat-type-yatay",
    question: "Haritada numaralandırılan alanlardan hangisi tortul tabakaların düz kalarak yarılmasıyla oluşan YATAY DURUŞLU (TABAKA DÜZLÜĞÜ) bir platodur?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "II",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "III", name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "IV",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "V",   name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Bozok Platosu / Yozgat). Tortul tabakaların bozulmadan yatay durması ve akarsularca yarılmasıyla oluşan yatay duruşlu platolardır.",
  },

  // --- 19. Karstik vs Yatay Duruşlu Tür Sorma ---
  {
    id: "plat-type-karstik-vs-yatay",
    question: "Haritada numaralandırılan platolardan hangisi tabaka düzlüğü (yatay duruşlu) değil, kireçtaşı erimesiyle oluşan KARSTİK bir platodur?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Taşeli Platosu (Mersin)",      type: "Karstik Plato",          x: 39.5, y: 76.0 },
      { label: "II",  name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "III", name: "Cihanbeyli Platosu (Konya)",   type: "Yatay Duruşlu Plato",    x: 33.0, y: 49.0 },
      { label: "IV",  name: "Bozok Platosu (Yozgat)",       type: "Yatay Duruşlu Plato",    x: 48.6, y: 35.6 },
      { label: "V",   name: "Gaziantep Platosu",            type: "Yatay Duruşlu Plato",    x: 59.8, y: 66.7 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Taşeli Platosu). Taşeli Platosu Akdeniz'de kireçtaşı erimesiyle oluşan bir karstik platodur. Diğerleri yatay duruşlu platolardır.",
  },

  // --- 20. Volkanik vs Aşınım Tür Sorma ---
  {
    id: "plat-type-volkanik-vs-asinim",
    question: "Haritada numaralandırılan platolardan hangisi lav örtüsüyle oluşan bir VOLKANİK plato örneğidir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erzurum-Kars Platosu",         type: "Volkanik Plato",         x: 84.5, y: 24.5 },
      { label: "II",  name: "Çatalca-Kocaeli Platosu",      type: "Aşınım Düzlüğü Platosu", x: 16.5, y: 14.5 },
      { label: "III", name: "Haymana Platosu (Ankara)",     type: "Yatay Duruşlu Plato",    x: 33.5, y: 38.0 },
      { label: "IV",  name: "Teke Platosu (Antalya)",       type: "Karstik Plato",          x: 21.0, y: 73.0 },
      { label: "V",   name: "Şanlıurfa Platosu",            type: "Yatay Duruşlu Plato",    x: 69.6, y: 63.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Erzurum-Kars Platosu). Erzurum-Kars ve Ardahan volkanik (lav örtülü) platolardır. Çatalca-Kocaeli ise aşınım platosudur.",
  },
];
