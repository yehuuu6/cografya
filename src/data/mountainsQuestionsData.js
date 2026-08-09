// ============================================================================
// 🏔️ Türkiye Dağları Soru Veri Tabanı (%100 Sade, Doğrudan & ÖSYM KPSS Tipi)
// Kıvrım, Kırık (Horst) ve Volkanik Dağlar
// ============================================================================

export const MOUNTAIN_QUESTIONS_DATA = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. HARİTADA YER BULMA SORULARI (Pin Tıklamalı - isNameSecret: true)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 1. Kaçkar Dağları (Yer Bulma) ---
  {
    id: "mt-loc-kackar",
    question: "Doğu Karadeniz'de Rize-Artvin sınırında uzanan ve yüksek zirvelerinde buzul göllerine ev sahipliği yapan Kaçkar Dağları haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Kaçkar Dağları (Rize/Artvin)", type: "Kıvrım Dağ",   x: 79.5, y: 16.5 },
      { label: "II",  name: "Ilgaz Dağları (Kastamonu)",    type: "Kıvrım Dağ",   x: 38.2, y: 22.5 },
      { label: "III", name: "Köroğlu Dağları (Bolu)",       type: "Kıvrım Dağ",   x: 30.5, y: 25.5 },
      { label: "IV",  name: "Yıldız Dağları (Kırklareli)",  type: "Kıvrım Dağ",   x: 8.5,  y: 8.5 },
      { label: "V",   name: "Cilo Dağları (Hakkâri)",       type: "Kıvrım Dağ",   x: 93.5, y: 54.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Kaçkar Dağları). Doğu Karadeniz Dağları'nın en yüksek bölümünü oluşturan kıvrım dağ sırasıdır.",
  },

  // --- 2. Büyük Ağrı Dağı (Yer Bulma) ---
  {
    id: "mt-loc-agri",
    question: "Türkiye'nin en yüksek noktası olan volkanik oluşumlu Büyük Ağrı Dağı haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erciyes Dağı (Kayseri)",       type: "Volkanik Dağ", x: 47.5, y: 46.2 },
      { label: "II",  name: "Hasan Dağı (Aksaray)",         type: "Volkanik Dağ", x: 41.5, y: 52.5 },
      { label: "III", name: "Süphan Dağı (Bitlis)",         type: "Volkanik Dağ", x: 87.5, y: 39.5 },
      { label: "IV",  name: "Büyük Ağrı Dağı (Ağrı)",       type: "Volkanik Dağ", x: 93.8, y: 28.5 },
      { label: "V",   name: "Nemrut Dağı (Bitlis)",         type: "Volkanik Dağ", x: 86.2, y: 45.5 },
    ],
    correctLabel: "IV",
    explanation: "Doğru Cevap: IV (Büyük Ağrı Dağı). Ağrı-Iğdır sınırında 5.137 metre yüksekliğiyle Türkiye'nin en yüksek volkanik dağıdır.",
  },

  // --- 3. Erciyes Dağı (Yer Bulma) ---
  {
    id: "mt-loc-erciyes",
    question: "İç Anadolu Bölgesi'nde Kayseri il sınırlarında yer alan sönmüş volkanik Erciyes Dağı haritada kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erciyes Dağı (Kayseri)",       type: "Volkanik Dağ", x: 47.5, y: 46.2 },
      { label: "II",  name: "Hasan Dağı (Aksaray)",         type: "Volkanik Dağ", x: 41.5, y: 52.5 },
      { label: "III", name: "Karadağ (Karaman)",            type: "Volkanik Dağ", x: 37.5, y: 62.5 },
      { label: "IV",  name: "Büyük Ağrı Dağı (Ağrı)",       type: "Volkanik Dağ", x: 93.8, y: 28.5 },
      { label: "V",   name: "Süphan Dağı (Bitlis)",         type: "Volkanik Dağ", x: 87.5, y: 39.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Erciyes Dağı). İç Anadolu Bölgesi'nin en yüksek volkanik dağıdır (3.917 m).",
  },

  // --- 4. Cilo (Sat) Dağları (Yer Bulma) ---
  {
    id: "mt-loc-cilo",
    question: "Türkiye'nin güneydoğusunda Hakkâri ilinde yer alan ve güncel buzullara (sirk buzulları) sahip Cilo (Sat) Dağları haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Kaçkar Dağları (Rize)",        type: "Kıvrım Dağ",   x: 79.5, y: 16.5 },
      { label: "II",  name: "Munzur Dağları (Tunceli)",     type: "Kıvrım Dağ",   x: 71.5, y: 38.5 },
      { label: "III", name: "Cilo (Sat) Dağları (Hakkâri)", type: "Kıvrım Dağ",   x: 93.5, y: 54.5 },
      { label: "IV",  name: "Bolkar Dağları (Mersin)",      type: "Kıvrım Dağ",   x: 42.5, y: 64.5 },
      { label: "V",   name: "Bey Dağları (Antalya)",        type: "Kıvrım Dağ",   x: 23.5, y: 72.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Cilo Dağları). Hakkâri'de Uludoruk (4.135 m) zirvesine sahip kıvrım dağ sırasıdır.",
  },

  // --- 5. Kazdağları (Yer Bulma) ---
  {
    id: "mt-loc-kazdaglari",
    question: "Çanakkale ve Balıkesir sınırında Biga Yarımadası'nda yer alan kırık oluşumlu Kazdağları haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Kazdağları (Çanakkale/Balıkesir)", type: "Kırık Dağ (Horst)", x: 6.5, y: 30.5 },
      { label: "II",  name: "Madra Dağı (Balıkesir/İzmir)",     type: "Kırık Dağ (Horst)", x: 8.5, y: 36.5 },
      { label: "III", name: "Bozdağlar (İzmir)",                type: "Kırık Dağ (Horst)", x: 10.2,y: 48.5 },
      { label: "IV",  name: "Aydın Dağları (Aydın)",            type: "Kırık Dağ (Horst)", x: 9.8, y: 53.5 },
      { label: "V",   name: "Menteşe Dağları (Muğla)",          type: "Kırık Dağ (Horst)", x: 11.5,y: 64.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Kazdağları). Ege/Marmara geçişinde yer alan kırık (horst) oluşumlu dağımızdır.",
  },

  // --- 6. Nur (Amanos) Dağları (Yer Bulma) ---
  {
    id: "mt-loc-nur",
    question: "Ege Bölgesi dışında yer alan ve Hatay ilinde bulunan tek kırık dağ sırası olan Nur (Amanos) Dağları haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bolkar Dağları (Mersin)",      type: "Kıvrım Dağ",        x: 42.5, y: 64.5 },
      { label: "II",  name: "Aladağlar (Niğde)",            type: "Kıvrım Dağ",        x: 45.2, y: 60.5 },
      { label: "III", name: "Nur (Amanos) Dağları (Hatay)",  type: "Kırık Dağ (Horst)", x: 53.5, y: 75.5 },
      { label: "IV",  name: "Bey Dağları (Antalya)",        type: "Kıvrım Dağ",        x: 23.5, y: 72.5 },
      { label: "V",   name: "Menteşe Dağları (Muğla)",      type: "Kırık Dağ (Horst)", x: 11.5, y: 64.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Nur / Amanos Dağları). Hatay ilinde yer alan, Ege Bölgesi dışındaki tek kırık (horst) dağdır.",
  },

  // --- 7. Yıldız (Istranca) Dağları (Yer Bulma) ---
  {
    id: "mt-loc-yildiz",
    question: "Marmara Bölgesi'nin kuzeybatısında Kırklareli ilinde Karadeniz'e paralel uzanan Yıldız (Istranca) Dağları haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Yıldız Dağları (Kırklareli)", type: "Kıvrım Dağ", x: 8.5,  y: 8.5 },
      { label: "II",  name: "Köroğlu Dağları (Bolu)",       type: "Kıvrım Dağ", x: 30.5, y: 25.5 },
      { label: "III", name: "Küre Dağları (Kastamonu)",     type: "Kıvrım Dağ", x: 35.8, y: 14.5 },
      { label: "IV",  name: "Canik Dağları (Samsun)",       type: "Kıvrım Dağ", x: 50.5, y: 17.5 },
      { label: "V",   name: "Ilgaz Dağları (Çankırı)",      type: "Kıvrım Dağ", x: 38.2, y: 22.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Yıldız / Istranca Dağları). Trakya'nın Karadeniz kıyısında uzanan kıvrım dağ sırasıdır.",
  },

  // --- 8. Bolkar Dağları (Yer Bulma) ---
  {
    id: "mt-loc-bolkar",
    question: "Orta Toroslar üzerinde Mersin ve Niğde sınırlarında uzanan kıvrım oluşumlu Bolkar Dağları haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bey Dağları (Antalya)",        type: "Kıvrım Dağ", x: 23.5, y: 72.5 },
      { label: "II",  name: "Bolkar Dağları (Mersin/Niğde)", type: "Kıvrım Dağ", x: 42.5, y: 64.5 },
      { label: "III", name: "Aladağlar (Niğde/Adana)",       type: "Kıvrım Dağ", x: 45.2, y: 60.5 },
      { label: "IV",  name: "Hasan Dağı (Aksaray)",         type: "Volkanik Dağ",x: 41.5, y: 52.5 },
      { label: "V",   name: "Erciyes Dağı (Kayseri)",       type: "Volkanik Dağ",x: 47.5, y: 46.2 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Bolkar Dağları). Mersin-Niğde sınırında Toroslar silsilesinde yer alan kıvrım dağıdır.",
  },

  // --- 9. Süphan Dağı (Yer Bulma) ---
  {
    id: "mt-loc-suphan",
    question: "Van Gölü'nün kuzeyinde Bitlis ve Van sınırlarında yer alan volkanik Süphan Dağı haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Nemrut Dağı (Bitlis)",         type: "Volkanik Dağ", x: 86.2, y: 45.5 },
      { label: "II",  name: "Süphan Dağı (Bitlis/Van)",     type: "Volkanik Dağ", x: 87.5, y: 39.5 },
      { label: "III", name: "Tendürek Dağı (Ağrı/Van)",     type: "Volkanik Dağ", x: 92.5, y: 35.5 },
      { label: "IV",  name: "Büyük Ağrı Dağı (Ağrı)",       type: "Volkanik Dağ", x: 93.8, y: 28.5 },
      { label: "V",   name: "Munzur Dağları (Tunceli)",     type: "Kıvrım Dağ",   x: 71.5, y: 38.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Süphan Dağı). Van Gölü'nün hemen kuzeyinde yükselen Türkiye'nin 3. en yüksek volkanik dağıdır (4.058 m).",
  },

  // --- 10. Karacadağ Doğu (Yer Bulma) ---
  {
    id: "mt-loc-karacadag",
    question: "Güneydoğu Anadolu Bölgesi'nde Şanlıurfa ve Diyarbakır arasında geniş alana yayılan kalkan biçimli volkan Karacadağ haritada kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Karadağ (Karaman)",            type: "Volkanik Dağ", x: 37.5, y: 62.5 },
      { label: "II",  name: "Hasan Dağı (Aksaray)",         type: "Volkanik Dağ", x: 41.5, y: 52.5 },
      { label: "III", name: "Karacadağ (Şanlıurfa/Diyarbakır)", type: "Volkanik Dağ", x: 73.5, y: 59.5 },
      { label: "IV",  name: "Cilo Dağları (Hakkâri)",       type: "Kıvrım Dağ",   x: 93.5, y: 54.5 },
      { label: "V",   name: "Nemrut Dağı (Bitlis)",         type: "Volkanik Dağ", x: 86.2, y: 45.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Karacadağ). Akıcı lavların geniş alana yayılmasıyla oluşan kalkan biçimli tek volkanik dağımızdır.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. DOĞRUDAN OLUŞUM TÜRÜ SORMA (5 Tıklanabilir Şık - answerMode: "choices")
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 11. Bozdağlar (Oluşum Türü) ---
  {
    id: "mt-type-bozdaglar",
    answerMode: "choices",
    question: "Haritada İzmir-Manisa çevresinde gösterilen Bozdağlar'ın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Bozdağlar (İzmir/Manisa)", type: "Kırık Dağ (Horst)", x: 10.2, y: 48.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Buzul (Sirk) Dağı" },
      { label: "E", text: "Karstik Aşınım Dağı" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Kırık Dağ / Horst). Ege Bölgesi'ndeki fayı takip eden kırılma hareketleriyle oluşan horst yapılı kırık dağıdır.",
  },

  // --- 12. Ilgaz Dağları (Oluşum Türü) ---
  {
    id: "mt-type-ilgaz",
    answerMode: "choices",
    question: "Haritada Kastamonu-Çankırı sınırında gösterilen Ilgaz Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Ilgaz Dağları (Kastamonu/Çankırı)", type: "Kıvrım Dağ", x: 38.2, y: 22.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Volkanik Kaldera" },
      { label: "E", text: "Alüvyal Birikim Dağı" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Kıvrım Dağ). Kuzey Anadolu Dağları silsilesi içerisinde levha sıkışmasıyla oluşan kıvrım dağıdır.",
  },

  // --- 13. Hasan Dağı (Oluşum Türü) ---
  {
    id: "mt-type-hasan",
    answerMode: "choices",
    question: "Haritada Aksaray-Niğde sınırında gösterilen Hasan Dağı'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Hasan Dağı (Aksaray/Niğde)", type: "Volkanik Dağ", x: 41.5, y: 52.5 },
    ],
    choices: [
      { label: "A", text: "Kırık Dağ (Horst)" },
      { label: "B", text: "Kıvrım Dağ" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Karstik Dağ" },
      { label: "E", text: "Heyelan Birikim Dağı" },
    ],
    correctChoice: "C",
    explanation: "Doğru Cevap: C (Volkanik Dağ). İç Anadolu fay hattı boyunca magmanın yüzeye çıkmasıyla oluşan sönmüş volkanik konidir.",
  },

  // --- 14. Nur (Amanos) Dağları (Oluşum Türü) ---
  {
    id: "mt-type-nur",
    answerMode: "choices",
    question: "Haritada Hatay ili sınırlarında gösterilen Nur (Amanos) Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Nur Dağları (Hatay)", type: "Kırık Dağ (Horst)", x: 53.5, y: 75.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Buzul Dağı" },
      { label: "E", text: "Karstik Polye Dağı" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Kırık Dağ / Horst). Hatay tektonik çöküntüsü yanında Ege Bölgesi dışında yer alan istisnai kırık dağımızdır.",
  },

  // --- 15. Köroğlu Dağları (Oluşum Türü) ---
  {
    id: "mt-type-koroglu",
    answerMode: "choices",
    question: "Haritada Bolu ili sınırlarında gösterilen Köroğlu Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Köroğlu Dağları (Bolu)", type: "Kıvrım Dağ", x: 30.5, y: 25.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Maar" },
      { label: "D", text: "Volkanik Kaldera" },
      { label: "E", text: "Kıyı Seti" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Kıvrım Dağ). Batı Karadeniz ile İç Anadolu geçişinde yer alan kıvrım dağ sırasıdır.",
  },

  // --- 16. Kula Volkanları (Oluşum Türü) ---
  {
    id: "mt-type-kula",
    answerMode: "choices",
    question: "Haritada Manisa Kula çevresinde gösterilen Türkiye'nin en genç volkanik sahasının oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Kula Volkanları (Manisa)", type: "Volkanik Koni", x: 12.8, y: 46.5 },
    ],
    choices: [
      { label: "A", text: "Kırık Dağ (Horst)" },
      { label: "B", text: "Volkanik Dağ / Koni Sahası" },
      { label: "C", text: "Kıvrım Dağ" },
      { label: "D", text: "Karstik Aşınım Sahası" },
      { label: "E", text: "Heyelan Set Sahası" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Volkanik Dağ / Koni Sahası). Manisa Kula'da yer alan, küçük cüruf konilerinden oluşan Türkiye'nin en genç volkanik alanıdır.",
  },

  // --- 17. Aydın Dağları (Oluşum Türü) ---
  {
    id: "mt-type-aydin",
    answerMode: "choices",
    question: "Haritada Aydın ve İzmir sınırında gösterilen Aydın Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Aydın Dağları (Aydın/İzmir)", type: "Kırık Dağ (Horst)", x: 9.8, y: 53.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Buzul Dağı" },
      { label: "E", text: "Alüvyal Set" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Kırık Dağ / Horst). Büyük Menderes ile Küçük Menderes grabenleri arasında yer alan kırık (horst) dağıdır.",
  },

  // --- 18. Tendürek Dağı (Oluşum Türü) ---
  {
    id: "mt-type-tendurek",
    answerMode: "choices",
    question: "Haritada Ağrı-Van sınırında gösterilen Tendürek Dağı'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Tendürek Dağı (Ağrı/Van)", type: "Volkanik Dağ", x: 92.5, y: 35.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Volkanik Dağ" },
      { label: "C", text: "Kırık Dağ (Horst)" },
      { label: "D", text: "Heyelan Seti" },
      { label: "E", text: "Karstik Dağ" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Volkanik Dağ). Doğu Anadolu fay hatları üzerindeki genç volkanik dağlarımızdan biridir.",
  },

  // --- 19. Bey Dağları (Oluşum Türü) ---
  {
    id: "mt-type-beydaglari",
    answerMode: "choices",
    question: "Haritada Antalya il sınırlarında Batı Toroslar üzerinde gösterilen Bey Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Bey Dağları (Antalya)", type: "Kıvrım Dağ", x: 23.5, y: 72.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Alüvyal Dağ" },
      { label: "E", text: "Volkanik Kaldera" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Kıvrım Dağ). Akdeniz Bölgesi Batı Toroslar kuşağı içerisinde yer alan tortul kıvrım dağıdır.",
  },

  // --- 20. Menteşe Dağları (Oluşum Türü) ---
  {
    id: "mt-type-mentese",
    answerMode: "choices",
    question: "Haritada Muğla ili sınırlarında gösterilen Menteşe Dağları'nın oluşum türü aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Menteşe Dağları (Muğla)", type: "Kırık Dağ (Horst)", x: 11.5, y: 64.5 },
    ],
    choices: [
      { label: "A", text: "Kıvrım Dağ" },
      { label: "B", text: "Kırık Dağ (Horst)" },
      { label: "C", text: "Volkanik Dağ" },
      { label: "D", text: "Karstik Polye Dağı" },
      { label: "E", text: "Heyelan Set Dağı" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Kırık Dağ / Horst). Muğla yöresinde kıyıya çapraz uzanan kırık (horst) oluşumlu dağ kütlesidir.",
  },
];
