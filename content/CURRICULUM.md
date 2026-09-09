# LearnOttoman Müfredat Yol Haritası

Bu doküman CLAUDE.md'deki Faz 1 hedefini ("müfredat iskeleti, ilk 3-5 dersin
içeriği") somutlaştırır: uygulamanın seviye/ders yapısını ve hangi dersin
şu an gerçek içerikle dolu, hangisinin backlog'da olduğunu tanımlar.
`types/models.ts`'teki `Lesson.level` alanı buradaki Seviye numarasına,
`Lesson.orderIndex` ise bir seviye içindeki ders sırasına karşılık gelir.

## Seviye 1 — Alfabe (Elifbâ)

Amaç: Osmanlı alfabesindeki harfleri şekil ve isimle tanıma. Bu oturumda
5 ders tam içerikle yazıldı (`content/lessons/`), kalan 3 ders planlandı
ama henüz yazılmadı.

| # | Ders | Durum | Harfler | Odak |
|---|------|-------|---------|------|
| 1 | Alfabeye Giriş | ✅ Yazıldı (`lesson-001`) | elif, be, pe | Temel tanıma |
| 2 | Bitişen Harfler I | ✅ Yazıldı (`lesson-002`) | te, se, cim, çim | Bitişen harf kavramı |
| 3 | Bitişmeyen Harfler | ✅ Yazıldı (`lesson-003`) | dal, zel, re, ze, vav | Bağlanmama kuralı |
| 4 | Islık Sesleri | ✅ Yazıldı (`lesson-004`) | sin, şin, sad, dad | Nokta sayısı ayrımı |
| 5 | Karma Tekrar | ✅ Yazıldı (`lesson-005`) | Ders 1-4'ten seçmeler | Benzer şekilli harf ayrımı (be/pe/te/se, sin/şin, dal/zel) |
| 6 | Kalın Sesler | ⏳ Backlog | ha, hı, tı, zı, ayn, gayn | — |
| 7 | Son Harfler | ⏳ Backlog | fe, kaf, kef, gef, kef-i nunî | — |
| 8 | Alfabe Tamamlama | ⏳ Backlog | lam, mim, nun, he, ye, je | Tüm alfabe tekrarı/değerlendirme |

Ders 6-8'in harf şekilleri `content/letters/letters.ts`'e henüz eklenmedi —
bir sonraki içerik oturumunda Ders 1-5'teki kalıp (bkz. `helpers.ts`)
izlenerek eklenecek.

**Egzersiz kapsamı:** Ders 1-5'teki tüm egzersizler `multiple_choice`
tipinde (harf şekli → isim, isim → harf şekli). Eşleştirme, harf yazma ve
sesli eşleştirme egzersiz tipleri (`matching`, `letter_write`,
`audio_match`) motor tarafında M5'te devreye girecek; o noktada Ders 1-8
bu tiplerle zenginleştirilebilir.

## Seviye 2 — Temel Kelimeler ve Basit Gramer

Amaç: Kelime kartı tekrarı (spaced repetition), eşleştirme oyunları,
çoktan seçmeli cümle çevirisi (CLAUDE.md "Kelime & gramer modülü").

**Durum: İçerik yazılmadı — backlog.** `content/words/words-level-1.ts`
bilinçli olarak boş bırakıldı: Osmanlıca kelime yazımlarının doğruluğu
otomatik/tahmini üretilemeyecek kadar kritik (bkz. CLAUDE.md "Önemli
Kısıtlar"). Bu seviyenin dersleri ancak konu uzmanı biri kelime listesini
sağladıktan sonra yazılabilir. Veri modeli (`Word`, `WordReviewState`) ve
SRS zamanlama altyapısı (`hooks/useSpacedRepetition.ts`, M10) buna hazır
şekilde tasarlandı.

Planlanan yapı (harf sayısı arttıkça netleşecek):
- Ders 1-N: Günlük hayat isimleri (ev, su, ateş, gün, ay, ...)
- Ders N+: Basit fiiller, sıfatlar
- Dönem sonu: Karma kelime tekrarı + basit cümle çevirisi (multiple_choice)

## Seviye 3 — Cümle Kurma ve Gramer

Amaç: Temel Osmanlı Türkçesi cümle yapıları, çekim ekleri. **Backlog** —
Seviye 2'nin kelime dağarcığı olmadan anlamlı cümle içeriği üretilemez.

## Seviye 4 — Gerçek Metin Okuma (Premium)

CLAUDE.md'nin "Gerçek metin okuma pratiği" modülü — tapu senedi, gazete
gibi otantik metinler. **Faz 4 kapsamı**, RevenueCat abonelik kontrolü
(Faz 3) tamamlanmadan kilidi açılmayacak. İçerik, gerçek tarihî belgelerden
alınacağından en yüksek doğrulama gerektiren seviye.

## İlerleme mantığı

- Bir seviyedeki dersler `orderIndex` sırasıyla açılır (şimdilik hepsi
  açık; kilitleme mantığı — bir önceki ders tamamlanmadan sonrakine
  geçilememesi — M6/M7'de `UserProgress.lastCompletedLessonId` üzerinden
  eklenecek).
- Yıldız/XP hesaplaması (`hooks/useLessonSession.ts`) ve can sistemi
  seviyeden bağımsız, her ders için aynı şekilde çalışır.
