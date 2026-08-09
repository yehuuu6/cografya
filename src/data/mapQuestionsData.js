// ============================================================================
// 🗺️ Göl Soru Veri Tabanı (Sadece Yer Bulma & Doğrudan Tür Sorma Soruları)
// Tüm koordinatlar lakesData.js'den %100 hassasiyetle alınmıştır.
// ============================================================================

export const MAP_QUESTIONS_DATA = [

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. HARİTADA YER BULMA SORULARI (Pin Tıklamalı - isNameSecret: true)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 1. Beyşehir Gölü (Yer Bulma) ---
  {
    id: "lake-loc-beysehir",
    question: "Türkiye'nin yüzölçümü en büyük tatlı su gölü olan ve Göller Yöresi'nde yer alan Beyşehir Gölü haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Beyşehir Gölü",    type: "Tektonik-Karstik", x: 31.5, y: 60.5 },
      { label: "II",  name: "Tuz Gölü",         type: "Tektonik",         x: 38.5, y: 46.5 },
      { label: "III", name: "Eğirdir Gölü",     type: "Tektonik-Karstik", x: 26.2, y: 55.0 },
      { label: "IV",  name: "İznik Gölü",       type: "Tektonik",         x: 20.2, y: 23.8 },
      { label: "V",   name: "Van Gölü",         type: "Volkanik Set",     x: 88.5, y: 44.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Beyşehir Gölü). İç Anadolu ile Akdeniz sınırında (Konya-Isparta) yer alan en büyük tatlı su gölümüzdür.",
  },

  // --- 2. Van Gölü (Yer Bulma) ---
  {
    id: "lake-loc-van",
    question: "Türkiye'nin yüzölçümü en büyük gölü olan Van Gölü haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tuz Gölü",         type: "Tektonik",      x: 38.5, y: 46.5 },
      { label: "II",  name: "Beyşehir Gölü",    type: "Tektonik",      x: 31.5, y: 60.5 },
      { label: "III", name: "Eğirdir Gölü",     type: "Tektonik",      x: 26.2, y: 55.0 },
      { label: "IV",  name: "İznik Gölü",       type: "Tektonik",      x: 20.2, y: 23.8 },
      { label: "V",   name: "Van Gölü",         type: "Volkanik Set",  x: 88.5, y: 44.5 },
    ],
    correctLabel: "V",
    explanation: "Doğru Cevap: V (Van Gölü). Doğu Anadolu Bölgesi'nde Van ve Bitlis illeri arasında yer alır.",
  },

  // --- 3. Nemrut Kalderası (Yer Bulma) ---
  {
    id: "lake-loc-nemrut",
    question: "Bitlis ili sınırlarında bulunan ve Nemrut Dağı'nın patlaması sonucu oluşan Nemrut Kalderası (Nemrut Gölü) haritadaki pinlerden hangisidir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tortum Gölü",       type: "Heyelan Set",       x: 81.5, y: 23.5 },
      { label: "II",  name: "Meke Gölü",          type: "Volkanik Maar",     x: 39.5, y: 61.5 },
      { label: "III", name: "Nemrut Gölü",        type: "Volkanik Kaldera",  x: 86.2, y: 45.5 },
      { label: "IV",  name: "Van Gölü",           type: "Volkanik Set",      x: 88.5, y: 44.5 },
      { label: "V",   name: "Çıldır Gölü",        type: "Volkanik Set",      x: 88.8, y: 14.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Nemrut Gölü). Nemrut Gölü, Van Gölü'nün batısında Bitlis sınırlarında yer alan devasa bir kaldera gölüdür.",
  },

  // --- 4. Tuz Gölü (Yer Bulma) ---
  {
    id: "lake-loc-tuz",
    question: "İç Anadolu Bölgesi'nde yer alan Türkiye'nin ikinci büyük gölü olan Tuz Gölü haritada kaç numaralı pin ile gösterilmiştir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tuz Gölü",         type: "Tektonik",      x: 38.5, y: 46.5 },
      { label: "II",  name: "İznik Gölü",       type: "Tektonik",      x: 20.2, y: 23.8 },
      { label: "III", name: "Ulubat Gölü",      type: "Tektonik",      x: 16.5, y: 28.5 },
      { label: "IV",  name: "Hazar Gölü",       type: "Tektonik",      x: 73.0, y: 47.5 },
      { label: "V",   name: "Salda Gölü",       type: "Karstik",       x: 20.8, y: 61.2 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Tuz Gölü). İç Anadolu Bölgesi'nde Ankara, Konya ve Aksaray sınırındadır.",
  },

  // --- 5. Sapanca Gölü (Yer Bulma) ---
  {
    id: "lake-loc-sapanca",
    question: "Marmara Bölgesi'nde Sakarya ve Kocaeli sınırlarında yer alan Sapanca Gölü haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Sapanca Gölü",     type: "Tektonik",      x: 24.2, y: 19.8 },
      { label: "II",  name: "Burdur Gölü",       type: "Tektonik",      x: 22.8, y: 60.5 },
      { label: "III", name: "Akşehir Gölü",     type: "Tektonik",      x: 31.8, y: 49.5 },
      { label: "IV",  name: "Manyas Gölü",       type: "Tektonik",      x: 12.8, y: 26.5 },
      { label: "V",   name: "Eber Gölü",         type: "Tektonik",      x: 29.5, y: 48.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Sapanca Gölü). Marmara Bölgesi'nde Sakarya-Kocaeli sınırındadır.",
  },

  // --- 6. Çamiçi / Bafa Gölü (Yer Bulma) ---
  {
    id: "lake-loc-bafa",
    question: "Ege Bölgesi'nde Büyük Menderes alüvyonlarının önünü kapatmasıyla oluşan Çamiçi (Bafa) Gölü haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Köyceğiz Gölü",      type: "Alüvyal Set",   x: 13.8, y: 68.5 },
      { label: "II",  name: "Çamiçi (Bafa) Gölü",  type: "Alüvyal Set",   x: 9.8,  y: 59.5 },
      { label: "III", name: "Marmara Gölü",        type: "Alüvyal Set",   x: 11.5, y: 43.5 },
      { label: "IV",  name: "Burdur Gölü",         type: "Tektonik",      x: 22.8, y: 60.5 },
      { label: "V",   name: "Salda Gölü",          type: "Karstik",       x: 20.8, y: 61.2 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Çamiçi / Bafa Gölü). Aydın-Muğla sınırında, Menderes alüvyonlarının önünü kapattığı alüvyal set gölüdür.",
  },

  // --- 7. Çıldır Gölü (Yer Bulma) ---
  {
    id: "lake-loc-cildir",
    question: "Doğu Anadolu'nun en kuzeyinde, Ardahan-Kars sınırında yer alan Çıldır Gölü haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tortum Gölü",       type: "Heyelan Set",   x: 81.5, y: 23.5 },
      { label: "II",  name: "Aktaş Gölü",        type: "Tektonik",      x: 88.5, y: 11.5 },
      { label: "III", name: "Çıldır Gölü",       type: "Volkanik Set",  x: 88.8, y: 14.5 },
      { label: "IV",  name: "Balık Gölü",         type: "Volkanik Set",  x: 91.5, y: 30.5 },
      { label: "V",   name: "Erçek Gölü",         type: "Volkanik Set",  x: 92.5, y: 44.8 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Çıldır Gölü). Ardahan-Kars sınırında yer alan volkanik set gölüdür.",
  },

  // --- 8. Salda Gölü (Yer Bulma) ---
  {
    id: "lake-loc-salda",
    question: "Burdur ilinde yer alan Türkiye'nin en derin ve temiz karstik göllerinden Salda Gölü haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Burdur Gölü",        type: "Tektonik",      x: 22.8, y: 60.5 },
      { label: "II",  name: "Salda Gölü",         type: "Karstik",       x: 20.8, y: 61.2 },
      { label: "III", name: "Eğirdir Gölü",       type: "Tektonik",      x: 26.2, y: 55.0 },
      { label: "IV",  name: "Beyşehir Gölü",      type: "Tektonik",      x: 31.5, y: 60.5 },
      { label: "V",   name: "Suğla Gölü",         type: "Karstik",       x: 33.5, y: 63.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Salda Gölü). Burdur ilinde yer alan berrak magnezit yapılı karstik gölümüzdür.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. DOĞRUDAN OLUŞUM TÜRÜ SORMA (5 Tıklanabilir Şık - answerMode: "choices")
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 9. Abant Gölü (Oluşum Türü) ---
  {
    id: "lake-type-abant",
    answerMode: "choices",
    question: "Haritada Bolu sınırları içerisinde gösterilen Abant Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Abant Gölü (Bolu)",  type: "Heyelan Set",  x: 29.5, y: 22.8 },
    ],
    choices: [
      { label: "A", text: "Heyelan Set Gölü" },
      { label: "B", text: "Tektonik Göl" },
      { label: "C", text: "Karstik Göl" },
      { label: "D", text: "Volkanik Set Gölü" },
      { label: "E", text: "Kıyı Set (Lagün) Gölü" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Heyelan Set Gölü). Abant Gölü, dağdan kayan kütlelerin vadi önünü tıkamasıyla oluşmuş tipik bir heyelan set gölüdür.",
  },

  // --- 10. Gala Gölü (Oluşum Türü) ---
  {
    id: "lake-type-gala",
    answerMode: "choices",
    question: "Haritada Edirne sınırlarında, Meriç Deltası yakınlarında gösterilen Gala Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Gala Gölü (Edirne)", type: "Alüvyal Set",  x: 3.8,  y: 14.5 },
    ],
    choices: [
      { label: "A", text: "Kıyı Set Gölü" },
      { label: "B", text: "Alüvyal Set Gölü" },
      { label: "C", text: "Buzul (Sirk) Gölü" },
      { label: "D", text: "Tektonik Göl" },
      { label: "E", text: "Volkanik Kaldera" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Alüvyal Set Gölü). Gala Gölü, Meriç Nehri'nin getirdiği alüvyonların vadi ağzını kapatmasıyla oluşmuş alüvyal set gölüdür.",
  },

  // --- 11. Tortum Gölü (Oluşum Türü) ---
  {
    id: "lake-type-tortum",
    answerMode: "choices",
    question: "Haritada Erzurum ili sınırlarında gösterilen Tortum Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Tortum Gölü (Erzurum)", type: "Heyelan Set", x: 81.5, y: 23.5 },
    ],
    choices: [
      { label: "A", text: "Heyelan Set Gölü" },
      { label: "B", text: "Karstik Göl" },
      { label: "C", text: "Tektonik Göl" },
      { label: "D", text: "Volkanik Maar Gölü" },
      { label: "E", text: "Kıyı Set (Lagün) Gölü" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Heyelan Set Gölü). Erzurum'da Kireçli Dağı'ndan kopan heyelan kütlesinin vadiyi kapatmasıyla oluşmuştur.",
  },

  // --- 12. Meke Gölü (Oluşum Türü) ---
  {
    id: "lake-type-meke",
    answerMode: "choices",
    question: "Haritada Konya-Karapınar çevresinde gösterilen Meke Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Meke Gölü (Konya)",   type: "Volkanik Maar", x: 39.5, y: 61.5 },
    ],
    choices: [
      { label: "A", text: "Alüvyal Set Gölü" },
      { label: "B", text: "Volkanik Maar Gölü" },
      { label: "C", text: "Heyelan Set Gölü" },
      { label: "D", text: "Tektonik Göl" },
      { label: "E", text: "Karstik Polye Gölü" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Volkanik Maar Gölü). Meke Gölü gaz patlaması sonucu oluşan bir maar çukurunda su birikmesiyle meydana gelmiştir.",
  },

  // --- 13. Terkos / Durugöl (Oluşum Türü) ---
  {
    id: "lake-type-terkos",
    answerMode: "choices",
    question: "Haritada İstanbul'un kuzeyinde Karadeniz kıyısında gösterilen Terkos (Durugöl) Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Terkos Gölü (İstanbul)", type: "Kıyı Set",   x: 15.5, y: 11.8 },
    ],
    choices: [
      { label: "A", text: "Tektonik Göl" },
      { label: "B", text: "Heyelan Set Gölü" },
      { label: "C", text: "Kıyı Set (Lagün) Gölü" },
      { label: "D", text: "Volkanik Set Gölü" },
      { label: "E", text: "Karstik Göl" },
    ],
    correctChoice: "C",
    explanation: "Doğru Cevap: C (Kıyı Set / Lagün Gölü). Kıyı kordonunun koyun önünü kapatmasıyla oluşan tipik bir deniz kıyı set gölüdür.",
  },

  // --- 14. Hazar Gölü (Oluşum Türü) ---
  {
    id: "lake-type-hazar",
    answerMode: "choices",
    question: "Haritada Elazığ ili sınırlarında Doğu Anadolu Fay Hattı üzerinde gösterilen Hazar Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Hazar Gölü (Elazığ)", type: "Tektonik",      x: 73.0, y: 47.5 },
    ],
    choices: [
      { label: "A", text: "Volkanik Set Gölü" },
      { label: "B", text: "Heyelan Set Gölü" },
      { label: "C", text: "Tektonik Göl" },
      { label: "D", text: "Karstik Göl" },
      { label: "E", text: "Alüvyal Set Gölü" },
    ],
    correctChoice: "C",
    explanation: "Doğru Cevap: C (Tektonik Göl). Doğu Anadolu Fay Hattı üzerindeki çöküntü oluğunda oluşan tektonik bir göldür.",
  },

  // --- 15. Köyceğiz Gölü (Oluşum Türü) ---
  {
    id: "lake-type-koycegiz",
    answerMode: "choices",
    question: "Haritada Muğla ilinde gösterilen Köyceğiz Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Köyceğiz Gölü (Muğla)", type: "Alüvyal Set", x: 13.8, y: 68.5 },
    ],
    choices: [
      { label: "A", text: "Alüvyal Set Gölü" },
      { label: "B", text: "Volkanik Kaldera" },
      { label: "C", text: "Tektonik Göl" },
      { label: "D", text: "Karstik Polye Gölü" },
      { label: "E", text: "Heyelan Set Gölü" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Alüvyal Set Gölü). Akarsuların taşıdığı alüvyonların koy önünü kapatmasıyla oluşan alüvyal set gölüdür.",
  },

  // --- 16. Salda Gölü (Oluşum Türü) ---
  {
    id: "lake-type-salda",
    answerMode: "choices",
    question: "Haritada Burdur ili sınırlarında gösterilen Salda Gölü'nün oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Salda Gölü (Burdur)", type: "Karstik",       x: 20.8, y: 61.2 },
    ],
    choices: [
      { label: "A", text: "Heyelan Set Gölü" },
      { label: "B", text: "Karstik Göl" },
      { label: "C", text: "Volkanik Set Gölü" },
      { label: "D", text: "Kıyı Set (Lagün) Gölü" },
      { label: "E", text: "Alüvyal Set Gölü" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Karstik Göl). Burdur'da kireçtaşlarının ve çözünebilir arazinin erimesiyle oluşan karstik gölümüzdür.",
  },
];
