// ============================================================================
// 🌾 Türkiye Ovaları Soru Veri Tabanı (%100 ÖSYM KPSS Tipi)
// Delta Ovaları | Karstik Ovalar (Polyeler) | Tektonik Ovalar
// ============================================================================

export const PLAINS_QUESTIONS_DATA = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. DELTA OVALARI — Haritada Yer Bulma
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 1. Çukurova (En Büyük Delta Ovası) ---
  {
    id: "plain-pos-cukurova",
    question: "Haritada Seyhan ve Ceyhan nehirlerinin alüvyonlarıyla oluşmuş, Türkiye'nin en büyük delta ovası olan Çukurova kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Çukurova (Adana)",           type: "Delta Ovası",    x: 50.5, y: 68.0 },
      { label: "II",  name: "Bafra Ovası (Samsun)",        type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "III", name: "Konya Ovası",                 type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "IV",  name: "Ergene Ovası (Trakya)",       type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "V",   name: "Silifke Ovası (Mersin)",      type: "Delta Ovası",    x: 41.0, y: 73.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Çukurova / Adana). Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlarla oluşmuş Türkiye'nin en büyük ve en verimli delta ovasıdır.",
  },

  // --- 2. Bafra Ovası ---
  {
    id: "plain-pos-bafra",
    question: "Haritada Kızılırmak nehrinin Karadeniz kıyısında oluşturduğu Bafra Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bafra Ovası (Samsun)",        type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "II",  name: "Çarşamba Ovası (Samsun)",      type: "Delta Ovası",    x: 55.5, y: 11.5 },
      { label: "III", name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
      { label: "IV",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "V",   name: "Suluova (Amasya)",             type: "Tektonik Ova",   x: 51.4, y: 21.7 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Bafra Ovası). Kızılırmak'ın Karadeniz'e döküldüğü yerde oluşturduğu verimli delta ovasıdır.",
  },

  // --- 3. Çarşamba Ovası ---
  {
    id: "plain-pos-carsamba",
    question: "Haritada Yeşilırmak nehrinin Karadeniz kıyısında oluşturduğu Çarşamba Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Çarşamba Ovası (Samsun)",      type: "Delta Ovası",    x: 55.5, y: 11.5 },
      { label: "II",  name: "Bafra Ovası (Samsun)",         type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "III", name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "IV",  name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "V",   name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Çarşamba Ovası). Yeşilırmak'ın taşıdığı alüvyonlarla Samsun kıyısında oluşan delta ovasıdır.",
  },

  // --- 4. Ege Delta Ovaları (Balat = Büyük Menderes) ---
  {
    id: "plain-pos-balat",
    question: "Haritada Ege Bölgesi'nde Büyük Menderes nehrinin oluşturduğu ve antik Milet limanını dolduran Balat Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Dikili Ovası (İzmir)",         type: "Delta Ovası",    x: 7.0,  y: 37.0 },
      { label: "II",  name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "III", name: "Selçuk Ovası (İzmir)",          type: "Delta Ovası",    x: 5.0,  y: 49.5 },
      { label: "IV",  name: "Balat Ovası (Aydın)",           type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "V",   name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
    ],
    correctLabel: "IV",
    explanation: "Doğru Cevap: IV (Balat Ovası / Aydın). Büyük Menderes'in taşıdığı alüvyonlar antik Milet limanını doldurarak Balat Delta Ovası'nı oluşturmuştur.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. KARSTİK OVALAR (POLYELER) — TAKEŞ / TAKKEM
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 5. Karstik Ova Yer Bulma (Elmalı) ---
  {
    id: "plain-pos-elmali",
    question: "Haritada Antalya ilinde yer alan, kireçtaşı erimesiyle oluşmuş Elmalı Karstik Ovası (Polyesi) kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Elmalı Ovası (Antalya)",       type: "Karstik Ova",    x: 19.0, y: 72.0 },
      { label: "II",  name: "Korkuteli Ovası (Antalya)",     type: "Karstik Ova",    x: 22.5, y: 68.0 },
      { label: "III", name: "Tefenni Ovası (Burdur)",        type: "Karstik Ova",    x: 21.4, y: 62.4 },
      { label: "IV",  name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "V",   name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Elmalı Ovası). Antalya'nın batısında, Akdeniz Bölgesi Göller Yöresi'nde kireçtaşının erimesiyle oluşmuş karstik ovadır (polye).",
  },

  // --- 6. Karstik Ova Türü Sorma ---
  {
    id: "plain-type-karstik",
    question: "Haritada numaralandırılan ovalardan hangisi, kireçtaşının erimesiyle oluşmuş bir karstik ova (polye) değildir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tefenni Ovası (Burdur)",       type: "Karstik Ova",    x: 21.4, y: 62.4 },
      { label: "II",  name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "III", name: "Kestel Ovası (Antalya)",        type: "Karstik Ova",    x: 24.0, y: 71.0 },
      { label: "IV",  name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
      { label: "V",   name: "Iğdır Ovası",                   type: "Tektonik Ova",   x: 94.3, y: 28.4 },
    ],
    correctLabel: "V",
    explanation: "Doğru Cevap: V (Iğdır Ovası). Iğdır Ovası tektonik kökenli bir çöküntü ovasıdır. Diğerleri (Tefenni, Acıpayam, Kestel, Muğla) Akdeniz/Göller Yöresi'ndeki karstik ovalardır.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. TEKTONİK OVALAR — Haritada Yer Bulma
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 7. Konya Ovası (En Büyük İç Ova) ---
  {
    id: "plain-pos-konya",
    question: "Haritada Türkiye'nin yüz ölçümü en büyük iç ovası olan Konya Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Konya Ovası",                  type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "II",  name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "III", name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "IV",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "V",   name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Konya Ovası). İç Anadolu Bölgesi'nde yer alan Konya Ovası, Türkiye'nin yüzölçümü en büyük iç ovasıdır.",
  },

  // --- 8. Iğdır Ovası (Mikroklima) ---
  {
    id: "plain-pos-igdir",
    question: "Haritada Doğu Anadolu'da mikroklima özelliği gösteren ve pamuk tarımı yapılabilen Iğdır Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Iğdır Ovası",                  type: "Tektonik Ova",   x: 94.3, y: 28.4 },
      { label: "II",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "III", name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "IV",  name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "V",   name: "Hakkâri Yüksekova",            type: "Tektonik Ova",   x: 96.0, y: 58.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Iğdır Ovası). Ağrı Dağı'nın eteklerinde yer alan Iğdır Ovası, çevre dağların koruyucu etkisiyle mikroklima özelliği gösterir ve pamuk bile yetiştirilebilir.",
  },

  // --- 9. Erzincan Ovası (KAF Üzerinde) ---
  {
    id: "plain-pos-erzincan",
    question: "Haritada Kuzey Anadolu Fay Hattı (KAF) üzerinde yer alan tektonik çöküntü ovası Erzincan Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "II",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "III", name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "IV",  name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "V",   name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Erzincan Ovası). KAF (Kuzey Anadolu Fayı) üzerinde oluşmuş tektonik bir çöküntü ovasıdır ve deprem riski yüksektir.",
  },

  // --- 10. Ova Türü Sorma (Delta vs Tektonik) ---
  {
    id: "plain-type-delta-vs-tektonik",
    question: "Haritada numaralandırılan ovalardan hangisi, akarsu biriktirmesiyle kıyıda oluşmuş bir delta ovasıdır?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "II",  name: "Konya Ovası",                  type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "III", name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "IV",  name: "Silifke Ovası (Mersin)",       type: "Delta Ovası",    x: 41.0, y: 73.5 },
      { label: "V",   name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
    ],
    correctLabel: "IV",
    explanation: "Doğru Cevap: IV (Silifke Ovası). Göksu Nehri'nin Akdeniz kıyısında oluşturduğu delta ovasıdır. Ergene, Konya, Düzce ve Muş ovaları tektonik kökenli ovalardır.",
  },

  // --- 11. Ergene Ovası ---
  {
    id: "plain-pos-ergene",
    question: "Haritada Trakya Bölgesi'nde Edirne ve Tekirdağ sınırları içinde yer alan tarım açısından verimli Ergene Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "II",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "III", name: "Bafra Ovası (Samsun)",          type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "IV",  name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "V",   name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Ergene Ovası). Trakya'nın ortasında Edirne-Tekirdağ-Kırklareli sınırlarında yer alan geniş tarım ovasıdır.",
  },

  // --- 12. Menemen Ovası (Gediz Deltası) ---
  {
    id: "plain-pos-menemen",
    question: "Haritada Gediz Nehri'nin İzmir kıyısında oluşturduğu Menemen Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Dikili Ovası (Bakırçay)",      type: "Delta Ovası",    x: 7.0,  y: 37.0 },
      { label: "II",  name: "Menemen Ovası (Gediz)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "III", name: "Selçuk Ovası (K. Menderes)",    type: "Delta Ovası",    x: 5.0,  y: 49.5 },
      { label: "IV",  name: "Balat Ovası (B. Menderes)",     type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "V",   name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Menemen Ovası). Gediz Nehri'nin taşıdığı alüvyonlarla İzmir kıyısında oluşturduğu delta ovasıdır.",
  },

  // --- 13. Silifke Ovası (Delta - Yer Bulma) ---
  {
    id: "plain-pos-silifke",
    question: "Haritada Göksu Nehri'nin Akdeniz'e döküldüğü yerde taşıdığı alüvyonlarla oluşturduğu Silifke Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Silifke Ovası (Mersin)",       type: "Delta Ovası",    x: 41.0, y: 73.5 },
      { label: "II",  name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
      { label: "III", name: "Bafra Ovası (Samsun)",          type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "IV",  name: "Antalya Ovası",                 type: "Karstik Ova",    x: 25.7, y: 71.3 },
      { label: "V",   name: "Tefenni Ovası (Burdur)",        type: "Karstik Ova",    x: 21.4, y: 62.4 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Silifke Ovası / Mersin). Göksu Nehri'nin Mersin kıyılarında oluşturduğu verimli bir delta ovasıdır.",
  },

  // --- 14. Tefenni Ovası (Karstik Ova / Polye - Yer Bulma) ---
  {
    id: "plain-pos-tefenni",
    question: "Haritada Göller Yöresi'nde (Burdur) kireç taşlarının erimesiyle oluşan Tefenni Karstik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Tefenni Ovası (Burdur)",       type: "Karstik Ova",    x: 21.4, y: 62.4 },
      { label: "II",  name: "Elmalı Ovası (Antalya)",       type: "Karstik Ova",    x: 19.0, y: 72.0 },
      { label: "III", name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "IV",  name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "V",   name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Tefenni Ovası / Burdur). Burdur sınırlarında yer alan Tefenni Ovası, Akdeniz Bölgesi'nin TAKEŞ/TAKKEM şifresi içinde yer alan önemli bir karstik polyedir.",
  },

  // --- 15. Dikili Ovası (Ege Deltası - Yer Bulma) ---
  {
    id: "plain-pos-dikili",
    question: "Haritada Bakırçay'ın Ege Denizi kıyısında oluşturduğu Dikili Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Dikili Ovası (İzmir)",         type: "Delta Ovası",    x: 7.0,  y: 37.0 },
      { label: "II",  name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "III", name: "Selçuk Ovası (İzmir)",          type: "Delta Ovası",    x: 5.0,  y: 49.5 },
      { label: "IV",  name: "Balat Ovası (Aydın)",           type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "V",   name: "Bafra Ovası (Samsun)",          type: "Delta Ovası",    x: 50.5, y: 11.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Dikili Ovası / İzmir). Dikili Ovası, Ege Bölgesi'nin en kuzeyinde yer alan Bakırçay'ın taşıdığı alüvyonlarla oluşan delta ovasıdır.",
  },

  // --- 16. Muş Ovası (Doğu Anadolu Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-mus",
    question: "Haritada Doğu Anadolu Bölgesi'nde Doğu Anadolu Fay Hattı üzerindeki çöküntü alanında oluşmuş tektonik nitelikli Muş Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "II",  name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "III", name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "IV",  name: "Iğdır Ovası",                   type: "Tektonik Ova",   x: 94.3, y: 28.4 },
      { label: "V",   name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Muş Ovası). Muş Ovası, Doğu Anadolu Bölgesi'nin en geniş ve verimli tektonik çöküntü ovalarından biridir.",
  },

  // --- 17. Malatya Ovası (Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-malatya",
    question: "Haritada Doğu Anadolu'da etrafı dağlarla çevrili çöküntü alanında yer alan ve kayısı yetiştiriciliğinde ilk sırada gelen Malatya Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "II",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "III", name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "IV",  name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "V",   name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Malatya Ovası). Malatya Ovası, fay hatlarının oluşturduğu çöküntü üzerinde gelişmiş tektonik bir iç ovadır.",
  },

  // --- 18. Acıpayam Ovası (Karstik Ova - Yer Bulma) ---
  {
    id: "plain-pos-acipayam",
    question: "Haritada Denizli il sınırları içerisinde yer alan Acıpayam Karstik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "II",  name: "Tefenni Ovası (Burdur)",       type: "Karstik Ova",    x: 21.4, y: 62.4 },
      { label: "III", name: "Elmalı Ovası (Antalya)",       type: "Karstik Ova",    x: 19.0, y: 72.0 },
      { label: "IV",  name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
      { label: "V",   name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Acıpayam Ovası / Denizli). Acıpayam Ovası, Göller Yöresi ile Ege arasındaki geçiş sahasında bulunan kireçtaşı erimesiyle oluşmuş karstik bir ovadır.",
  },

  // --- 19. Ova Türü Sorma (Tektonik vs Karstik/Delta) ---
  {
    id: "plain-type-kestel",
    question: "Haritada gösterilen ovalardan hangisi oluşum türü bakımından faylanmaya bağlı çökmelerle oluşmuş bir tektonik ova değildir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Kestel Ovası (Antalya)",        type: "Karstik Ova",    x: 24.0, y: 71.0 },
      { label: "II",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "III", name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "IV",  name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "V",   name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Kestel Ovası / Antalya). Kestel Ovası karstik kökenli bir ovadır (polye). Düzce, Erzincan, Eskişehir ve Malatya ovaları ise fay hatları üzerindeki tektonik ovalardır.",
  },

  // --- 20. Selçuk Ovası (Küçük Menderes Deltası - Yer Bulma) ---
  {
    id: "plain-pos-selcuk",
    question: "Haritada Küçük Menderes nehrinin getirdiği alüvyonlarla antik Efes limanını doldurması sonucu oluşan Selçuk Delta Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Selçuk Ovası (İzmir)",          type: "Delta Ovası",    x: 5.0,  y: 49.5 },
      { label: "II",  name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "III", name: "Dikili Ovası (İzmir)",         type: "Delta Ovası",    x: 7.0,  y: 37.0 },
      { label: "IV",  name: "Balat Ovası (Aydın)",           type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "V",   name: "Silifke Ovası (Mersin)",       type: "Delta Ovası",    x: 41.0, y: 73.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Selçuk Ovası / İzmir). Selçuk Ovası, Küçük Menderes'in taşıdığı alüvyonlarla oluşmuş, kıyının dolmasıyla Efes antik kentinin denizden uzaklaşmasına neden olan delta ovasıdır.",
  },

  // --- 21. Eskişehir Ovası (İç Anadolu Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-eskisehir",
    question: "Haritada İç Anadolu'nun batısında, Porsuk Çayı çanağında kurulmuş tektonik kökenli Eskişehir Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "II",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "III", name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "IV",  name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "V",   name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Eskişehir Ovası). Eskişehir Ovası, İç Batı Anadolu fay hatları üzerindeki çöküntü alanında oluşan tektonik bir ovadır.",
  },

  // --- 22. Ova Türü Sorma (Ege Deltaları vs Muğla Ovası) ---
  {
    id: "plain-type-mugla",
    question: "Haritada Ege Bölgesi kıyılarında yer alan ve deniz biriktirmesiyle oluşan aşağıdaki ovalardan hangisi bir delta ovası değildir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
      { label: "II",  name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
      { label: "III", name: "Balat Ovası (Aydın)",           type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "IV",  name: "Dikili Ovası (İzmir)",         type: "Delta Ovası",    x: 7.0,  y: 37.0 },
      { label: "V",   name: "Selçuk Ovası (İzmir)",          type: "Delta Ovası",    x: 5.0,  y: 49.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Muğla Ovası). Muğla Ovası bir polye (karstik ova) alanıdır. Menemen, Balat, Dikili ve Selçuk ovaları ise akarsuların oluşturduğu delta ovalarıdır.",
  },

  // --- 23. Düzce Ovası (Batı Karadeniz Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-duzce",
    question: "Haritada Kuzey Anadolu Fay Hattı (KAF) üzerinde, Batı Karadeniz'de yer alan tektonik nitelikli Düzce Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "II",  name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "III", name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "IV",  name: "Bafra Ovası (Samsun)",          type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "V",   name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Düzce Ovası). Kuzey Anadolu Fay Hattı (KAF) üzerinde Batı Karadeniz geçiş alanında oluşmuş tektonik bir çöküntü ovasıdır.",
  },

  // --- 24. Suluova — Amasya (Orta Karadeniz Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-suluova",
    question: "Haritada Yeşilırmak vadisi üzerinde, Amasya il sınırlarında yer alan tektonik nitelikli Suluova kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "II",  name: "Çarşamba Ovası (Samsun)",      type: "Delta Ovası",    x: 55.5, y: 11.5 },
      { label: "III", name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "IV",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "V",   name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Suluova / Amasya). Yeşilırmak ve kolları boyunca fay hatları üzerinde oluşmuş verimli tektonik çöküntü ovasıdır.",
  },

  // --- 25. Hakkâri Yüksekova (Doğu Anadolu - En Yüksek İç Ova) ---
  {
    id: "plain-pos-yuksekova",
    question: "Haritada Türkiye'nin Güneydoğu ucunda yer alan ve en yüksek tektonik iç ovalarından biri olan Hakkâri Yüksekova kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Hakkâri Yüksekova",            type: "Tektonik Ova",   x: 96.4, y: 59.9 },
      { label: "II",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "III", name: "Iğdır Ovası",                   type: "Tektonik Ova",   x: 94.3, y: 28.4 },
      { label: "IV",  name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "V",   name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Hakkâri Yüksekova). 1.950 metre civarındaki ortalama yükseltisiyle Türkiye'nin en yüksek tektonik iç ovalarından biridir.",
  },

  // --- 26. Muğla Ovası (Güney Ege Karstik Polye - Yer Bulma) ---
  {
    id: "plain-pos-mugla-loc",
    question: "Haritada Güney Ege Bölümü'nde kireçtaşlarının erimesiyle oluşan ve TAKEŞ/TAKKEM kodlamasında yer alan Muğla Karstik Ovası (Polyesi) kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
      { label: "II",  name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "III", name: "Elmalı Ovası (Antalya)",       type: "Karstik Ova",    x: 19.0, y: 72.0 },
      { label: "IV",  name: "Balat Ovası (Aydın)",           type: "Delta Ovası",    x: 6.0,  y: 57.0 },
      { label: "V",   name: "Tefenni Ovası (Burdur)",        type: "Karstik Ova",    x: 21.4, y: 62.4 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Muğla Ovası). Akdeniz iklim sahasında kireçtaşı (kalker) erimesi sonucu oluşan polye (karstik ova) alanıdır.",
  },

  // --- 27. Pasinler Ovası — Erzurum (Doğu Anadolu Tektonik - Yer Bulma) ---
  {
    id: "plain-pos-pasinler",
    question: "Haritada Erzurum ili sınırlarında Aras Nehri havzasında yer alan ve tarihi savaşlara sahne olmuş Pasinler Tektonik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Pasinler Ovası (Erzurum)",      type: "Tektonik Ova",   x: 80.8, y: 27.8 },
      { label: "II",  name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "III", name: "Iğdır Ovası",                   type: "Tektonik Ova",   x: 94.3, y: 28.4 },
      { label: "IV",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "V",   name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Pasinler Ovası / Erzurum). Doğu Anadolu Bölgesi'nde fay hatları boyunca oluşmuş verimli bir tektonik çöküntü ovasıdır.",
  },

  // --- 28. Elbistan Ovası — Kahramanmaraş (Tektonik & Linyit - Yer Bulma) ---
  {
    id: "plain-pos-elbistan",
    question: "Haritada Kahramanmaraş il sınırları içinde yer alan ve geniş linyit yataklarıyla tanınan Elbistan Tektonik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Elbistan Ovası (K.Maraş)",     type: "Tektonik Ova",   x: 58.3, y: 57.6 },
      { label: "II",  name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "III", name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
      { label: "IV",  name: "Amik Ovası (Hatay)",            type: "Tektonik Ova",   x: 54.3, y: 76.4 },
      { label: "V",   name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Elbistan Ovası / K.Maraş). Doğu Anadolu Fay Hattı oluğunda gelişmiş, Türkiye'nin önemli linyit havzalarından biri olan tektonik ovadır.",
  },

  // --- 29. Niksar & Erbaa Ovaları — Tokat (KAF Olukları - Yer Bulma) ---
  {
    id: "plain-pos-niksar",
    question: "Haritada Tokat il sınırlarında Kelkit Çayı vadisi ve Kuzey Anadolu Fay Hattı üzerinde uzanan Niksar ve Erbaa Ovaları kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Niksar & Erbaa (Tokat)",        type: "Tektonik Ova",   x: 56.2, y: 24.9 },
      { label: "II",  name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "III", name: "Çarşamba Ovası (Samsun)",      type: "Delta Ovası",    x: 55.5, y: 11.5 },
      { label: "IV",  name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
      { label: "V",   name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Niksar ve Erbaa Ovaları / Tokat). Kelkit oluğunda KAF boyunca sıralanmış tektonik çöküntü ovalarıdır.",
  },

  // --- 30. Amik Ovası — Hatay (Graben - Yer Bulma) ---
  {
    id: "plain-pos-amik",
    question: "Haritada Hatay ili sınırlarında Asi Nehri'nin suladığı ve Ölü Deniz fay kuşağı çöküntüsünde yer alan Amik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Amik Ovası (Hatay)",            type: "Tektonik Ova",   x: 54.3, y: 76.4 },
      { label: "II",  name: "Çukurova (Adana)",             type: "Delta Ovası",    x: 50.5, y: 68.0 },
      { label: "III", name: "Silifke Ovası (Mersin)",       type: "Delta Ovası",    x: 41.0, y: 73.5 },
      { label: "IV",  name: "Elbistan Ovası (K.Maraş)",     type: "Tektonik Ova",   x: 58.3, y: 57.6 },
      { label: "V",   name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Amik Ovası / Hatay). Hatay grabeni içinde, Asi Nehri'nin taşıdığı alüvyonlarla beslenen verimli tektonik çöküntü ovasıdır.",
  },

  // --- 31. Bursa & İnegöl Ovaları (Güney Marmara - Yer Bulma) ---
  {
    id: "plain-pos-bursa",
    question: "Haritada Güney Marmara'da Uludağ'ın eteklerinde fay hatları boyunca oluşmuş Bursa ve İnegöl tektonik ovaları kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bursa & İnegöl Ovaları",        type: "Tektonik Ova",   x: 17.6, y: 27.2 },
      { label: "II",  name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
      { label: "III", name: "Ergene Ovası (Trakya)",        type: "Tektonik Ova",   x: 8.0,  y: 12.0 },
      { label: "IV",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "V",   name: "Menemen Ovası (İzmir)",         type: "Delta Ovası",    x: 5.5,  y: 44.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Bursa & İnegöl Ovaları). Güney Marmara fay hatları üzerinde oluşmuş verimli tarım ve sanayi ovalarıdır.",
  },

  // --- 32. Develi Ovası — Kayseri (Volkan Altı Çöküntü Ovası - Yer Bulma) ---
  {
    id: "plain-pos-develi",
    question: "Haritada Erciyes Dağı'nın güney eteklerinde yer alan ve Sultan Sazlığı sulak alanını barındıran Develi Tektonik Ovası kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Develi Ovası (Kayseri)",        type: "Tektonik Ova",   x: 52.3, y: 48.7 },
      { label: "II",  name: "Konya Ovası",                   type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "III", name: "Malatya Ovası",                type: "Tektonik Ova",   x: 65.6, y: 49.0 },
      { label: "IV",  name: "Elbistan Ovası (K.Maraş)",     type: "Tektonik Ova",   x: 58.3, y: 57.6 },
      { label: "V",   name: "Eskişehir Ovası",              type: "Tektonik Ova",   x: 27.1, y: 34.2 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Develi Ovası / Kayseri). Erciyes volkan kütlesinin güneyinde faylanma ve çökmeyle oluşmuş tektonik bir iç ovadır.",
  },

  // --- 33. Ova Türü Sorma (Kaf Üzerindeki Ovalar vs Karstik/Delta) ---
  {
    id: "plain-type-kaf-ovalar",
    question: "Haritada Kuzey Anadolu Fay Hattı (KAF) oluğunda yer alan aşağıdaki ovalardan hangisi bir tektonik çöküntü ovası değildir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Çarşamba Ovası (Samsun)",      type: "Delta Ovası",    x: 55.5, y: 11.5 },
      { label: "II",  name: "Düzce Ovası",                  type: "Tektonik Ova",   x: 29.1, y: 18.4 },
      { label: "III", name: "Suluova (Amasya)",              type: "Tektonik Ova",   x: 51.4, y: 21.7 },
      { label: "IV",  name: "Niksar Ovası (Tokat)",         type: "Tektonik Ova",   x: 56.2, y: 24.9 },
      { label: "V",   name: "Erzincan Ovası",               type: "Tektonik Ova",   x: 72.0, y: 35.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Çarşamba Ovası). Çarşamba Ovası Yeşilırmak'ın oluşturduğu bir delta ovasıdır. Düzce, Suluova, Niksar ve Erzincan KAF üzerindeki tektonik ovalardır.",
  },

  // --- 34. Ova Türü Sorma (Göller Yöresi Karstik Polyeler) ---
  {
    id: "plain-type-takes",
    question: "Haritada gösterilen Akdeniz ve Göller Yöresi ovalarından hangisi kalker erimesi sonucu oluşan bir karstik ova (polye) değildir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Silifke Ovası (Mersin)",       type: "Delta Ovası",    x: 41.0, y: 73.5 },
      { label: "II",  name: "Tefenni Ovası (Burdur)",       type: "Karstik Ova",    x: 21.4, y: 62.4 },
      { label: "III", name: "Acıpayam Ovası (Denizli)",      type: "Karstik Ova",    x: 17.5, y: 62.0 },
      { label: "IV",  name: "Elmalı Ovası (Antalya)",       type: "Karstik Ova",    x: 19.0, y: 72.0 },
      { label: "V",   name: "Muğla Ovası",                   type: "Karstik Ova",    x: 12.8, y: 66.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Silifke Ovası). Silifke Ovası Göksu Nehri'nin taşıdığı alüvyonlarla oluşmuş bir delta ovasıdır. Tefenni, Acıpayam, Elmalı ve Muğla ovaları ise TAKEŞ/TAKKEM şifresindeki karstik polyelerdir.",
  },

  // --- 35. Ova Türü Sorma (Güneydoğu & Doğu Anadolu İç Ovaları) ---
  {
    id: "plain-type-ic-ovalar",
    question: "Haritada numaralandırılan ovalardan hangisi deniz kıyısında akarsu biriktirmesiyle oluşan bir delta ovasıdır?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Bafra Ovası (Samsun)",        type: "Delta Ovası",    x: 50.5, y: 11.0 },
      { label: "II",  name: "Konya Ovası",                  type: "Tektonik Ova",   x: 36.3, y: 55.8 },
      { label: "III", name: "Iğdır Ovası",                   type: "Tektonik Ova",   x: 94.3, y: 28.4 },
      { label: "IV",  name: "Muş Ovası",                    type: "Tektonik Ova",   x: 84.0, y: 40.9 },
      { label: "V",   name: "Pasinler Ovası (Erzurum)",      type: "Tektonik Ova",   x: 80.8, y: 27.8 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Bafra Ovası). Bafra Ovası Kızılırmak'ın Karadeniz kıyısında oluşturduğu delta ovasıdır. Konya, Iğdır, Muş ve Pasinler ovaları iç kısımlardaki tektonik ovalardır.",
  },
];
