/**
 * Osmanlı alfabesi (elifba) harf verisi.
 *
 * NOT: Buradaki harf şekilleri ve bağlanma kuralları, Osmanlıcanın da
 * kullandığı temel Arap yazı sistemi kurallarına dayanır. Yine de kapsam
 * büyüdükçe (M9 — Alfabe modülü) her harf üretime çıkmadan önce Osmanlıca
 * alanında uzman biri tarafından gözden geçirilmelidir — bkz. CLAUDE.md
 * "Önemli Kısıtlar" (içerik doğruluğu, otomatik/tahmini içerik üretilmemeli).
 *
 * Kapsam: Seviye 1 (Alfabe) müfredatının Ders 1-9'unda kullanılan 33 harf —
 * geleneksel Osmanlı elifbasının tamamı (lam-elif bitişik harfi hariç).
 * Ders bazlı gruplama için bkz. content/CURRICULUM.md.
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
  // Ders 6 — Kalın Sesler (Arapça kökenli sözcüklerde ayrı yazılan, Osmanlı
  // Türkçesi telaffuzunda çoğunlukla "düz" karşılıklarıyla aynı okunan harfler)
  {
    id: 'ha',
    nameTr: 'Ha',
    nameEn: 'Ha',
    isolated: 'ح',
    initial: 'حـ',
    medial: 'ـحـ',
    final: 'ـح',
    connectsToNext: true,
  },
  {
    id: 'hi',
    nameTr: 'Hı',
    nameEn: 'Khı',
    isolated: 'خ',
    initial: 'خـ',
    medial: 'ـخـ',
    final: 'ـخ',
    connectsToNext: true,
  },
  {
    id: 'ti',
    nameTr: 'Tı',
    nameEn: 'Tı',
    isolated: 'ط',
    initial: 'طـ',
    medial: 'ـطـ',
    final: 'ـط',
    connectsToNext: true,
  },
  {
    id: 'zi',
    nameTr: 'Zı',
    nameEn: 'Zı',
    isolated: 'ظ',
    initial: 'ظـ',
    medial: 'ـظـ',
    final: 'ـظ',
    connectsToNext: true,
  },
  {
    id: 'ayn',
    nameTr: 'Ayn',
    nameEn: 'Ayn',
    isolated: 'ع',
    initial: 'عـ',
    medial: 'ـعـ',
    final: 'ـع',
    connectsToNext: true,
  },
  {
    id: 'gayn',
    nameTr: 'Gayn',
    nameEn: 'Ghayn',
    isolated: 'غ',
    initial: 'غـ',
    medial: 'ـغـ',
    final: 'ـغ',
    connectsToNext: true,
  },
  // Ders 7 — Son Harfler I
  {
    id: 'fe',
    nameTr: 'Fe',
    nameEn: 'Fe',
    isolated: 'ف',
    initial: 'فـ',
    medial: 'ـفـ',
    final: 'ـف',
    connectsToNext: true,
  },
  {
    id: 'kaf',
    nameTr: 'Kaf',
    nameEn: 'Qaf',
    isolated: 'ق',
    initial: 'قـ',
    medial: 'ـقـ',
    final: 'ـق',
    connectsToNext: true,
  },
  {
    id: 'kef',
    nameTr: 'Kef',
    nameEn: 'Kef',
    isolated: 'ك',
    initial: 'كـ',
    medial: 'ـكـ',
    final: 'ـك',
    connectsToNext: true,
  },
  {
    id: 'gef',
    nameTr: 'Gef',
    nameEn: 'Gef',
    isolated: 'گ',
    initial: 'گـ',
    medial: 'ـگـ',
    final: 'ـگ',
    connectsToNext: true,
  },
  {
    id: 'kef-i-nuni',
    nameTr: 'Kef-i Nunî',
    nameEn: 'Sağır Kef',
    isolated: 'ڭ',
    initial: 'ڭـ',
    medial: 'ـڭـ',
    final: 'ـڭ',
    connectsToNext: true,
  },
  // Ders 8 — Son Harfler II (alfabenin tamamlanması)
  {
    id: 'lam',
    nameTr: 'Lam',
    nameEn: 'Lam',
    isolated: 'ل',
    initial: 'لـ',
    medial: 'ـلـ',
    final: 'ـل',
    connectsToNext: true,
  },
  {
    id: 'mim',
    nameTr: 'Mim',
    nameEn: 'Mim',
    isolated: 'م',
    initial: 'مـ',
    medial: 'ـمـ',
    final: 'ـم',
    connectsToNext: true,
  },
  {
    id: 'nun',
    nameTr: 'Nun',
    nameEn: 'Nun',
    isolated: 'ن',
    initial: 'نـ',
    medial: 'ـنـ',
    final: 'ـن',
    connectsToNext: true,
  },
  {
    id: 'he',
    nameTr: 'He',
    nameEn: 'He',
    isolated: 'ه',
    initial: 'هـ',
    medial: 'ـهـ',
    final: 'ـه',
    connectsToNext: true,
  },
  {
    id: 'ye',
    nameTr: 'Ye',
    nameEn: 'Ye',
    isolated: 'ي',
    initial: 'يـ',
    medial: 'ـيـ',
    final: 'ـي',
    connectsToNext: true,
  },
  {
    id: 'je',
    nameTr: 'Je',
    nameEn: 'Zhe',
    isolated: 'ژ',
    // ze (ز) ile aynı gövdeyi paylaşır, dolayısıyla o da bir sonraki harfe
    // bağlanmaz — Ders 3'teki "bitişmeyen harfler" kuralının bir istisna
    // değil, aynı ailenin bir üyesi.
    initial: 'ژ',
    medial: 'ـژ',
    final: 'ـژ',
    connectsToNext: false,
  },
];

export function getLetterById(id: string): Letter | undefined {
  return letters.find((letter) => letter.id === id);
}
