// ============================================================================
// 🗺️ Körfez Soru Veri Tabanı (%100 Sade, Doğrudan & ÖSYM KPSS Tipi)
// ============================================================================

export const GULF_QUESTIONS_DATA = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. HARİTADA YER BULMA SORULARI (Pin Tıklamalı - isNameSecret: true)
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 1. İzmit Körfezi ---
  {
    id: "gulf-pos-izmit",
    question: "Haritada Marmara Denizi'nin doğusunda yer alan İzmit Körfezi kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "İzmit Körfezi (Kocaeli)",           sea: "Marmara",  x: 21.0, y: 19.5 },
      { label: "II",  name: "Gemlik Körfezi (Bursa)",            sea: "Marmara",  x: 18.2, y: 23.5 },
      { label: "III", name: "Bandırma Körfezi (Balıkesir)",       sea: "Marmara",  x: 12.5, y: 22.5 },
      { label: "IV",  name: "Erdek Körfezi (Balıkesir)",          sea: "Marmara",  x: 9.8,  y: 21.8 },
      { label: "V",   name: "Saros Körfezi (Çanakkale)",         sea: "Ege",      x: 4.2,  y: 19.5 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (İzmit Körfezi). Kocaeli ilinde Marmara Denizi'nin doğusunda yer alır.",
  },

  // --- 2. Saros Körfezi ---
  {
    id: "gulf-pos-saros",
    question: "Haritada Gelibolu Yarımadası kuzeyinde yer alan Saros Körfezi kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Saros Körfezi (Çanakkale/Edirne)", sea: "Ege",      x: 4.2,  y: 19.5 },
      { label: "II",  name: "İzmit Körfezi (Kocaeli)",           sea: "Marmara",  x: 21.0, y: 19.5 },
      { label: "III", name: "Edremit Körfezi (Balıkesir)",       sea: "Ege",      x: 6.2,  y: 33.5 },
      { label: "IV",  name: "Antalya Körfezi (Antalya)",         sea: "Akdeniz",  x: 30.2, y: 68.2 },
      { label: "V",   name: "İskenderun Körfezi (Hatay)",        sea: "Akdeniz",  x: 52.5, y: 72.0 },
    ],
    correctLabel: "I",
    explanation: "Doğru Cevap: I (Saros Körfezi). Ege Denizi'nin kuzeyinde, Gelibolu Yarımadası kuzeyindedir.",
  },

  // --- 3. Hisarönü Körfezi ---
  {
    id: "gulf-pos-hisaronu",
    question: "Haritada Muğla-Marmaris kıyısında Datça ile Bozburun arasında yer alan Hisarönü Körfezi kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Güllük Körfezi (Muğla)",            sea: "Ege",      x: 7.8,  y: 62.5 },
      { label: "II",  name: "Gökova Körfezi (Muğla)",            sea: "Ege",      x: 9.5,  y: 66.0 },
      { label: "III", name: "Hisarönü Körfezi (Muğla)",          sea: "Ege",      x: 11.2, y: 69.5 },
      { label: "IV",  name: "Fethiye Körfezi (Muğla)",           sea: "Ege",      x: 15.5, y: 71.0 },
      { label: "V",   name: "Kuşadası Körfezi (Aydın)",          sea: "Ege",      x: 6.8,  y: 54.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Hisarönü Körfezi). Muğla Marmaris ilçesinde Datça ile Bozburun arasında yer alır.",
  },

  // --- 4. Bandırma Körfezi (Kapıdağ Doğusu) ---
  {
    id: "gulf-pos-bandirma",
    question: "Haritada Kapıdağ Yarımadası'nın doğusunda yer alan Bandırma Körfezi kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Erdek Körfezi (Balıkesir)",          sea: "Marmara",  x: 9.8,  y: 21.8 },
      { label: "II",  name: "Bandırma Körfezi (Balıkesir)",       sea: "Marmara",  x: 12.5, y: 22.5 },
      { label: "III", name: "Gemlik Körfezi (Bursa)",            sea: "Marmara",  x: 18.2, y: 23.5 },
      { label: "IV",  name: "İzmit Körfezi (Kocaeli)",           sea: "Marmara",  x: 21.0, y: 19.5 },
      { label: "V",   name: "Edremit Körfezi (Balıkesir)",       sea: "Ege",      x: 6.2,  y: 33.5 },
    ],
    correctLabel: "II",
    explanation: "Doğru Cevap: II (Bandırma Körfezi). Kapıdağ Yarımadası'nın batısında Erdek, doğusunda Bandırma Körfezi yer alır.",
  },

  // --- 5. Gökova Körfezi ---
  {
    id: "gulf-pos-gokova",
    question: "Haritada Bodrum Yarımadası ile Datça Yarımadası arasında kalan Gökova Körfezi kaç numaralı pindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Kuşadası Körfezi (Aydın)",          sea: "Ege",      x: 6.8,  y: 54.5 },
      { label: "II",  name: "Güllük Körfezi (Muğla)",            sea: "Ege",      x: 7.8,  y: 62.5 },
      { label: "III", name: "Gökova Körfezi (Muğla)",            sea: "Ege",      x: 9.5,  y: 66.0 },
      { label: "IV",  name: "Hisarönü Körfezi (Muğla)",          sea: "Ege",      x: 11.2, y: 69.5 },
      { label: "V",   name: "Fethiye Körfezi (Muğla)",           sea: "Ege",      x: 15.5, y: 71.0 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (Gökova Körfezi). Bodrum ile Datça yarımadaları arasında kalan koruma altındaki körfezimizdir.",
  },

  // --- 6. İskenderun Körfezi ---
  {
    id: "gulf-pos-iskenderun",
    question: "Haritada Akdeniz'in doğusunda Hatay kıyısında yer alan İskenderun Körfezi kaç numaralı pin üzerindedir?",
    isNameSecret: true,
    pins: [
      { label: "I",   name: "Antalya Körfezi",                  sea: "Akdeniz",  x: 30.2, y: 68.2 },
      { label: "II",  name: "Fethiye Körfezi",                  sea: "Ege",      x: 15.5, y: 71.0 },
      { label: "III", name: "İskenderun Körfezi (Hatay)",        sea: "Akdeniz",  x: 52.5, y: 72.0 },
      { label: "IV",  name: "Kuşadası Körfezi",                 sea: "Ege",      x: 6.8,  y: 54.5 },
      { label: "V",   name: "İzmit Körfezi",                    sea: "Marmara",  x: 21.0, y: 19.5 },
    ],
    correctLabel: "III",
    explanation: "Doğru Cevap: III (İskenderun Körfezi). Hatay ilinde Akdeniz'in doğusunda yer alan önemli sanayi körfezimizdir.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. NET BİLGİ SORULARI (Kirlilik / Temizlik - answerMode: "choices")
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 7. Saros Körfezi (En Temiz / Kendi Kendini Temizleyen) ---
  {
    id: "gulf-info-saros",
    answerMode: "choices",
    question: "Ege Denizi'nde yer alan, güçlü akıntıları sayesinde kendi kendini temizleme özelliğine sahip en temiz körfezimiz aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "Saros Körfezi",        sea: "Ege",      x: 4.2,  y: 19.5 },
    ],
    choices: [
      { label: "A", text: "Saros Körfezi" },
      { label: "B", text: "İzmit Körfezi" },
      { label: "C", text: "İzmir Körfezi" },
      { label: "D", text: "Çandarlı Körfezi" },
      { label: "E", text: "İskenderun Körfezi" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Saros Körfezi). Çanakkale/Edirne sınırındaki Saros Körfezi, özel akıntı yapısı nedeniyle Ege'nin kendi kendini temizleyen en temiz körfezidir.",
  },

  // --- 8. İzmit Körfezi (En Kirli / Sanayi) ---
  {
    id: "gulf-info-izmit",
    answerMode: "choices",
    question: "Sanayi tesislerinin ve liman faaliyetlerinin yoğunluğuna bağlı olarak Marmara Denizi'nde kirlilik oranı en yüksek olan körfez aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "İzmit Körfezi",        sea: "Marmara",  x: 21.0, y: 19.5 },
    ],
    choices: [
      { label: "A", text: "Erdek Körfezi" },
      { label: "B", text: "Gemlik Körfezi" },
      { label: "C", text: "İzmit Körfezi" },
      { label: "D", text: "Saros Körfezi" },
      { label: "E", text: "Bandırma Körfezi" },
    ],
    correctChoice: "C",
    explanation: "Doğru Cevap: C (İzmit Körfezi). İzmit Körfezi etrafındaki ağır sanayi tesisleri ve limanlar nedeniyle kirliliğin en yüksek olduğu körfezdir.",
  },

  // --- 9. İskenderun Körfezi (Ağır Sanayi / Demir-Çelik) ---
  {
    id: "gulf-info-iskenderun",
    answerMode: "choices",
    question: "Türkiye'de demir-çelik sanayisi ve petrol rafinerisi faaliyetlerine bağlı olarak deniz kirliliği yüksek olan Akdeniz körfezi aşağıdakilerden hangisidir?",
    pins: [
      { label: "I",   name: "İskenderun Körfezi",   sea: "Akdeniz",  x: 52.5, y: 72.0 },
    ],
    choices: [
      { label: "A", text: "Antalya Körfezi" },
      { label: "B", text: "Fethiye Körfezi" },
      { label: "C", text: "İskenderun Körfezi" },
      { label: "D", text: "Hisarönü Körfezi" },
      { label: "E", text: "Gökova Körfezi" },
    ],
    correctChoice: "C",
    explanation: "Doğru Cevap: C (İskenderun Körfezi). Hatay/İskenderun demir-çelik ve petrol tesisleri nedeniyle Akdeniz'in kirliliği yüksek ağır sanayi körfezidir.",
  },

  // --- 10. Gökova Körfezi (En Az Kirli - Pinli) ---
  {
    id: "gulf-info-gokova",
    question: "Haritada numaralandırılan körfezlerden hangisinde sanayi tesislerinin ve liman faaliyetlerinin azlığına bağlı olarak deniz kirliliği EN AZDIR?",
    isNameSecret: false,
    pins: [
      { label: "I",   name: "İzmit Körfezi (Kocaeli)",          sea: "Marmara",  x: 21.0, y: 19.5 },
      { label: "II",  name: "İzmir Körfezi (İzmir)",            sea: "Ege",      x: 5.2,  y: 46.5 },
      { label: "III", name: "İskenderun Körfezi (Hatay)",       sea: "Akdeniz",  x: 52.5, y: 72.0 },
      { label: "IV",  name: "Çandarlı Körfezi (İzmir)",        sea: "Ege",      x: 6.5,  y: 40.8 },
      { label: "V",   name: "Gökova Körfezi (Muğla)",           sea: "Ege",      x: 9.5,  y: 66.0 },
    ],
    correctLabel: "V",
    explanation: "Doğru Cevap: V (Gökova Körfezi). İzmit, İzmir, Çandarlı ve İskenderun sanayi ve liman körfezleri iken Gökova doğal yapısını korumuş en temiz körfezdir.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. GÜZERGÂH VE SIRALAMA SORULARI (answerMode: "choices")
  // ═══════════════════════════════════════════════════════════════════════════

  // --- 11. İzmir -> Çanakkale Kuzeye Kıyı Seyri ---
  {
    id: "gulf-route-izmir-kuzey",
    answerMode: "choices",
    question: "İzmir Limanı'ndan kalkan bir gemi, kıyı şeridini takip ederek kuzeye doğru ilerleyip Çanakkale Boğazı'na ulaşmıştır. Bu gemi yolculuk sırasında aşağıdaki körfezlerden hangisinden geçer?",
    pins: [
      { label: "I",   name: "Çandarlı Körfezi",     sea: "Ege",  x: 6.5,  y: 40.8 },
      { label: "II",  name: "Gökova Körfezi",       sea: "Ege",  x: 9.5,  y: 66.0 },
      { label: "III", name: "Hisarönü Körfezi",     sea: "Ege",  x: 11.2, y: 69.5 },
      { label: "IV",  name: "Fethiye Körfezi",      sea: "Ege",  x: 15.5, y: 71.0 },
      { label: "V",   name: "Antalya Körfezi",      sea: "Akdeniz",x: 30.2,y: 68.2 },
    ],
    choices: [
      { label: "A", text: "Gökova Körfezi" },
      { label: "B", text: "Çandarlı Körfezi" },
      { label: "C", text: "Hisarönü Körfezi" },
      { label: "D", text: "Fethiye Körfezi" },
      { label: "E", text: "Antalya Körfezi" },
    ],
    correctChoice: "B",
    explanation: "Doğru Cevap: B (Çandarlı Körfezi). İzmir'den kuzeye çıkılırken sırasıyla Çandarlı ve Edremit körfezlerinden geçilir.",
  },

  // --- 12. Bozcaada -> Bodrum Kuzeyden Güneye ---
  {
    id: "gulf-route-bozcaada-bodrum",
    answerMode: "choices",
    question: "Bozcaada'dan yola çıkan bir gemi, Ege kıyılarını takip ederek Muğla'nın Bodrum ilçesine ulaşmıştır. Bu gemi rota boyunca aşağıdaki körfezlerden hangisinden EN SON geçmiştir?",
    pins: [
      { label: "I",   name: "Edremit Körfezi",      sea: "Ege",  x: 6.2,  y: 33.5 },
      { label: "II",  name: "Çandarlı Körfezi",     sea: "Ege",  x: 6.5,  y: 40.8 },
      { label: "III", name: "İzmir Körfezi",        sea: "Ege",  x: 5.2,  y: 46.5 },
      { label: "IV",  name: "Kuşadası Körfezi",     sea: "Ege",  x: 6.8,  y: 54.5 },
      { label: "V",   name: "Güllük Körfezi",       sea: "Ege",  x: 7.8,  y: 62.5 },
    ],
    choices: [
      { label: "A", text: "Edremit Körfezi" },
      { label: "B", text: "Çandarlı Körfezi" },
      { label: "C", text: "İzmir Körfezi" },
      { label: "D", text: "Kuşadası Körfezi" },
      { label: "E", text: "Güllük (Mandalya) Körfezi" },
    ],
    correctChoice: "E",
    explanation: "Doğru Cevap: E (Güllük Körfezi). Kuzeyden güneye sıralamada Bodrum'un hemen kuzeyinde yer alan Güllük Körfezi en son geçilen körfezdir.",
  },

  // --- 13. Marmara Batıdan Doğuya Seyir Sırası ---
  {
    id: "gulf-route-marmara-bati-dogu",
    answerMode: "choices",
    question: "Çanakkale Boğazı'ndan Marmara Denizi'ne giren bir gemi, Marmara'nın güney kıyılarını izleyerek Kocaeli'ne ulaşmak istemektedir. Bu geminin batıdan doğuya doğru sırasıyla geçmesi gereken körfezler hangisidir?",
    pins: [
      { label: "I",   name: "Erdek Körfezi",        sea: "Marmara",  x: 9.8,  y: 21.8 },
      { label: "II",  name: "Bandırma Körfezi",     sea: "Marmara",  x: 12.5, y: 22.5 },
      { label: "III", name: "Gemlik Körfezi",       sea: "Marmara",  x: 18.2, y: 23.5 },
      { label: "IV",  name: "İzmit Körfezi",        sea: "Marmara",  x: 21.0, y: 19.5 },
    ],
    choices: [
      { label: "A", text: "Erdek — Bandırma — Gemlik — İzmit" },
      { label: "B", text: "İzmit — Gemlik — Bandırma — Erdek" },
      { label: "C", text: "Gemlik — Erdek — Bandırma — İzmit" },
      { label: "D", text: "Bandırma — Erdek — İzmit — Gemlik" },
      { label: "E", text: "Erdek — Gemlik — Bandırma — İzmit" },
    ],
    correctChoice: "A",
    explanation: "Doğru Cevap: A (Erdek — Bandırma — Gemlik — İzmit). Marmara güney kıyısında batıdan doğuya sıralama Erdek -> Bandırma -> Gemlik -> İzmit şeklindedir.",
  },
];
