/**
 * Osmanlı alfabesi (elifba) harf verisi.
 *
 * NOT: Buradaki harf şekilleri ve bağlanma kuralları, Osmanlıcanın da
 * kullandığı temel Arap yazı sistemi kurallarına dayanır. Yine de kapsam
 * büyüdükçe (M9 — Alfabe modülü) her harf üretime çıkmadan önce Osmanlıca
 * alanında uzman biri tarafından gözden geçirilmelidir — bkz. CLAUDE.md
 * "Önemli Kısıtlar" (içerik doğruluğu, otomatik/tahmini içerik üretilmemeli).
 *
 * Kapsam: Seviye 1 (Alfabe) müfredatının Ders 1-5'inde kullanılan 16 harf.
 * Kalan elifba harfleri (ha, hı, tı, zı, ayn, gayn, fe, kaf, kef, gef,
 * kef-i nunî, lam, mim, nun, he, ye, je) roadmap'te Ders 6-8 olarak
 * planlandı, henüz burada tanımlanmadı — bkz. content/CURRICULUM.md.
 */
export interface Letter {
  id: string;
  nameTr: string;
  nameEn: string;
  /** Tek başına (bağlantısız) biçim. */
  isolated: string;
  /** Kelime başında (sağdan) biçim. */
  initial: string;
  /** Kelime ortasında biçim. */
  medial: string;
  /** Kelime sonunda biçim. */
  final: string;
  /** Bir sonraki harfe (soluna) bağlanıp bağlanmadığı. */
  connectsToNext: boolean;
}

export const letters: Letter[] = [
  // Ders 1 — Alfabeye Giriş
  {
    id: 'elif',
    nameTr: 'Elif',
    nameEn: 'Elif',
    isolated: 'ا',
    initial: 'ا',
    medial: 'ـا',
    final: 'ـا',
    connectsToNext: false,
  },
  {
    id: 'be',
    nameTr: 'Be',
    nameEn: 'Be',
    isolated: 'ب',
    initial: 'بـ',
    medial: 'ـبـ',
    final: 'ـب',
    connectsToNext: true,
  },
  {
    id: 'pe',
    nameTr: 'Pe',
    nameEn: 'Pe',
    isolated: 'پ',
    initial: 'پـ',
    medial: 'ـپـ',
    final: 'ـپ',
    connectsToNext: true,
  },
  // Ders 2 — Bitişen Harfler I
  {
    id: 'te',
    nameTr: 'Te',
    nameEn: 'Te',
    isolated: 'ت',
    initial: 'تـ',
    medial: 'ـتـ',
    final: 'ـت',
    connectsToNext: true,
  },
  {
    id: 'se',
    nameTr: 'Se',
    nameEn: 'Se',
    isolated: 'ث',
    initial: 'ثـ',
    medial: 'ـثـ',
    final: 'ـث',
    connectsToNext: true,
  },
  {
    id: 'cim',
    nameTr: 'Cim',
    nameEn: 'Jim',
    isolated: 'ج',
    initial: 'جـ',
    medial: 'ـجـ',
    final: 'ـج',
    connectsToNext: true,
  },
  {
    id: 'cim-ucendisli',
    nameTr: 'Çim',
    nameEn: 'Che',
    isolated: 'چ',
    initial: 'چـ',
    medial: 'ـچـ',
    final: 'ـچ',
    connectsToNext: true,
  },
  // Ders 3 — Bitişmeyen Harfler (bir sonraki harfe bağlanmayan 6 harften 5'i)
  {
    id: 'dal',
    nameTr: 'Dal',
    nameEn: 'Dal',
    isolated: 'د',
    initial: 'د',
    medial: 'ـد',
    final: 'ـد',
    connectsToNext: false,
  },
  {
    id: 'zel',
    nameTr: 'Zel',
    nameEn: 'Zel',
    isolated: 'ذ',
    initial: 'ذ',
    medial: 'ـذ',
    final: 'ـذ',
    connectsToNext: false,
  },
  {
    id: 're',
    nameTr: 'Re',
    nameEn: 'Re',
    isolated: 'ر',
    initial: 'ر',
    medial: 'ـر',
    final: 'ـر',
    connectsToNext: false,
  },
  {
    id: 'ze',
    nameTr: 'Ze',
    nameEn: 'Ze',
    isolated: 'ز',
    initial: 'ز',
    medial: 'ـز',
    final: 'ـز',
    connectsToNext: false,
  },
  {
    id: 'vav',
    nameTr: 'Vav',
    nameEn: 'Vav',
    isolated: 'و',
    initial: 'و',
    medial: 'ـو',
    final: 'ـو',
    connectsToNext: false,
  },
  // Ders 4 — Islık Sesleri
  {
    id: 'sin',
    nameTr: 'Sin',
    nameEn: 'Sin',
    isolated: 'س',
    initial: 'سـ',
    medial: 'ـسـ',
    final: 'ـس',
    connectsToNext: true,
  },
  {
    id: 'sin-noktali',
    nameTr: 'Şin',
    nameEn: 'Shin',
    isolated: 'ش',
    initial: 'شـ',
    medial: 'ـشـ',
    final: 'ـش',
    connectsToNext: true,
  },
  {
    id: 'sad',
    nameTr: 'Sad',
    nameEn: 'Sad',
    isolated: 'ص',
    initial: 'صـ',
    medial: 'ـصـ',
    final: 'ـص',
    connectsToNext: true,
  },
  {
    id: 'dad',
    nameTr: 'Dad',
    nameEn: 'Dad',
    isolated: 'ض',
    initial: 'ضـ',
    medial: 'ـضـ',
    final: 'ـض',
    connectsToNext: true,
  },
];

export function getLetterById(id: string): Letter | undefined {
  return letters.find((letter) => letter.id === id);
}
