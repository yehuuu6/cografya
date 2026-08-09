// ============================================================================
// 🌊 Türkiye Körfezleri Veri Tabanı (SVG Harita Pikselleri ile %100 Uyumlu)
// ============================================================================

export const GULFS_DATA = [
  // === EGE KÖRFEZLERİ (Kuzeyden Güneye) ===
  { id: "saros", name: "Saros Körfezi", sea: "Ege", province: "Çanakkale / Edirne", x: 4.2, y: 19.5 },
  { id: "edremit", name: "Edremit Körfezi", sea: "Ege", province: "Balıkesir", x: 6.2, y: 33.5 },
  { id: "candarli", name: "Çandarlı Körfezi", sea: "Ege", province: "İzmir", x: 6.5, y: 40.8 },
  { id: "izmir", name: "İzmir Körfezi", sea: "Ege", province: "İzmir", x: 5.2, y: 46.5 },
  { id: "kusadasi", name: "Kuşadası Körfezi", sea: "Ege", province: "Aydın / İzmir", x: 6.8, y: 54.5 },
  { id: "gulluk", name: "Güllük Körfezi", sea: "Ege", province: "Muğla", x: 7.8, y: 62.5 },
  { id: "gokova", name: "Gökova Körfezi", sea: "Ege", province: "Muğla", x: 9.5, y: 66.0 },
  { id: "hisaronu", name: "Hisarönü Körfezi", sea: "Ege", province: "Muğla", x: 11.2, y: 69.5 },
  { id: "fethiye", name: "Fethiye Körfezi", sea: "Ege", province: "Muğla", x: 15.5, y: 71.0 },

  // === MARMARA KÖRFEZLERİ (Doğudan Batıya) ===
  { id: "izmit", name: "İzmit Körfezi", sea: "Marmara", province: "Kocaeli", x: 21.0, y: 19.5 },
  { id: "gemlik", name: "Gemlik Körfezi", sea: "Marmara", province: "Bursa", x: 18.2, y: 23.5 },
  { id: "bandirma", name: "Bandırma Körfezi", sea: "Marmara", province: "Balıkesir", x: 12.5, y: 22.5 },
  { id: "erdek", name: "Erdek Körfezi", sea: "Marmara", province: "Balıkesir", x: 9.8, y: 21.8 },

  // === AKDENİZ KÖRFEZLERİ (Batıdan Doğuya) ===
  { id: "antalya", name: "Antalya Körfezi", sea: "Akdeniz", province: "Antalya", x: 30.2, y: 68.2 },
  { id: "iskenderun", name: "İskenderun Körfezi", sea: "Akdeniz", province: "Hatay", x: 52.5, y: 72.0 },
];

// === KÖRFEZ KATEGORİLERİ & KODLAMA HİKAYELERİ ===
export const GULF_CATEGORIES = [
  {
    id: "ege-korfezleri",
    name: "Ege Körfezleri (Kuzeyden Güneye)",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    gulfs: ["saros", "edremit", "candarli", "izmir", "kusadasi", "gulluk", "gokova", "hisaronu", "fethiye"],
    story: "**SEÇİK Gülerek Gök Hisarı Fethetti**\n(Saros, Edremit, Çandarlı, İzmir, Kuşadası, Güllük, Gökova, Hisarönü, Fethiye)"
  },
  {
    id: "marmara-korfezleri",
    name: "Marmara Körfezleri (Doğudan Batıya)",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.4)",
    gulfs: ["izmit", "gemlik", "bandirma", "erdek"],
    story: "**InstaGramını BEğendim**\n(İzmit, Gemlik, Bandırma, Erdek)"
  },
  {
    id: "akdeniz-korfezleri",
    name: "Akdeniz Körfezleri (Batıdan Doğuya)",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    gulfs: ["antalya", "iskenderun"],
    story: "Akdeniz kıyılarında batıdan doğuya sıralamada Antalya ve İskenderun yer alır."
  }
];
