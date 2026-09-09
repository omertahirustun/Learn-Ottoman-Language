/**
 * Osmanlı alfabesi (elifba) harf verisi.
 *
 * NOT: Buradaki harf şekilleri ve bağlanma kuralları, Osmanlıcanın da
 * kullandığı temel Arap yazı sistemi kurallarına dayanır. Yine de kapsam
 * büyüdükçe (M9 — Alfabe modülü) her harf üretime çıkmadan önce Osmanlıca
 * alanında uzman biri tarafından gözden geçirilmelidir — bkz. CLAUDE.md
 * "Önemli Kısıtlar" (içerik doğruluğu, otomatik/tahmini içerik üretilmemeli).
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
];

export function getLetterById(id: string): Letter | undefined {
  return letters.find((letter) => letter.id === id);
}
