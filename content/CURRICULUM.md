# LearnOttoman Müfredat Yol Haritası

Bu doküman CLAUDE.md'deki Faz 1 hedefini ("müfredat iskeleti, ilk 3-5 dersin
içeriği") somutlaştırır: uygulamanın seviye/ders yapısını ve hangi dersin
şu an gerçek içerikle dolu, hangisinin backlog'da olduğunu tanımlar.
`types/models.ts`'teki `Lesson.level` alanı buradaki Seviye numarasına,
`Lesson.orderIndex` ise bir seviye içindeki ders sırasına karşılık gelir.

## Seviye 1 — Alfabe (Elifbâ)

Amaç: Osmanlı alfabesindeki harfleri şekil ve isimle tanıma. 33 harflik
geleneksel elifbanın tamamı 9 derste, tam içerikle yazıldı.

| # | Ders | Harfler | Odak |
|---|------|---------|------|
| 1 | Alfabeye Giriş | elif, be, pe | Temel tanıma |
| 2 | Bitişen Harfler I | te, se, cim, çim | Bitişen harf kavramı |
| 3 | Bitişmeyen Harfler | dal, zel, re, ze, vav | Bağlanmama kuralı |
| 4 | Islık Sesleri | sin, şin, sad, dad | Nokta sayısı ayrımı |
| 5 | Karma Tekrar | Ders 1-4'ten seçmeler | Benzer şekilli harf ayrımı (be/pe/te/se, sin/şin, dal/zel) |
| 6 | Kalın Sesler | ha, hı, tı, zı, ayn, gayn | Arapça kökenli, Türkçede çoğunlukla "düz" karşılığıyla aynı okunan harfler |
| 7 | Son Harfler I | fe, kaf, kef, gef, kef-i nunî | Kef ailesi ayrımı |
| 8 | Son Harfler II | lam, mim, nun, he, ye, je | Alfabenin tamamlanması + je'nin bitişmeyen-harf kuralına bağlılığı |
| 9 | Tam Alfabe Değerlendirmesi | Ders 6-7'den seçmeler | ha/hı, tı/zı, ayn/gayn, fe/kaf, kef/gef/kef-i nunî ayrımı |

Tüm dersler `content/lessons/`'da yazıldı, tüm harfler `content/letters/letters.ts`'de tanımlı.

**Egzersiz kapsamı:** Ders 1-9'daki tüm egzersizler `multiple_choice`
tipinde (harf şekli → isim, isim → harf şekli), `content/lessons/helpers.ts`
yardımcılarıyla üretildi. Eşleştirme, harf yazma ve sesli eşleştirme
egzersiz tipleri (`matching`, `letter_write`, `audio_match`) motor
tarafında M5'te devreye girecek; o noktada Ders 1-9 bu tiplerle
zenginleştirilebilir.

**Not (telaffuz):** Ders 6 başlığındaki "Kalın Sesler" bir yazım/köken
ayrımıdır — Osmanlı Türkçesi telaffuzunda bu harflerin çoğu "düz"
karşılıklarıyla aynı okunur (ör. tı≈te, zı≈ze/dal). Egzersizler yalnızca
şekil/isim eşleştirir, bir telaffuz farkı iddia etmez.

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
