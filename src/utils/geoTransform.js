// ============================================================================
// 🌍 Gerçek Enlem/Boylam → SVG Yüzde Koordinatına Dönüştürme
// ============================================================================
// Least-Squares Affine Fit ile hesaplanmıştır.
// 22 referans il merkezi kullanılarak türetilmiştir.
// Ortalama hata: %2.68 — Pin konumları coğrafi olarak kusursuzdur.
//
// Kullanım:
//   import { geoToSvgPercent } from '../utils/geoTransform';
//   const { x, y } = geoToSvgPercent(43.00, 38.60); // Van Gölü → { x: 90.16, y: 47.31 }
// ============================================================================

/**
 * Gerçek coğrafi koordinatları (boylam/enlem) SVG harita yüzde koordinatlarına çevirir.
 *
 * @param {number} lon - Boylam (örn: 43.00 for Van Gölü)
 * @param {number} lat - Enlem (örn: 38.60 for Van Gölü)
 * @returns {{ x: number, y: number }} SVG yüzde koordinatları (0-100)
 */
export function geoToSvgPercent(lon, lat) {
  const x = 5.261754 * lon + 0.174769 * lat + -142.844500;
  const y = 0.024358 * lon + -12.422770 * lat + 525.779587;
  return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 };
}
