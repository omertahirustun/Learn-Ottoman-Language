# Osmanlıca Öğrenme Uygulaması

Duolingo tarzı, günlük ders sistemiyle Osmanlıca (Osmanlı Türkçesi) öğreten mobil uygulama.

## Teknoloji Yığını
- **Framework:** React Native + Expo (Expo Router)
- **Dil:** TypeScript
- **Yerel veritabanı:** SQLite (expo-sqlite)
- **Bildirimler:** expo-notifications (local scheduled notifications)
- **Ödeme/Abonelik:** RevenueCat (react-native-purchases) — App Store & Play Store IAP katmanı
- **Reklam:** AdMob (react-native-google-mobile-ads)
- **Çoklu dil:** expo-localization + i18next (Türkçe / İngilizce arayüz)
- **Ses:** expo-av (harf/kelime telaffuzu)
- **Animasyon:** Reanimated + Lottie/Rive (ders geçişleri, ödül animasyonları)

## Ürün Kapsamı

### Modüller
1. **Alfabe modülü** — harf tanıma/yazma, harflerin kelime içindeki pozisyona göre şekil değişimi, sesli okuma eşleştirme
2. **Kelime & gramer modülü** — spaced repetition ile kelime kartı tekrarı, eşleştirme oyunları, çoktan seçmeli cümle çevirisi
3. **Gerçek metin okuma pratiği** (premium/ileri seviye) — tapu senedi, gazete gibi otantik Osmanlıca metinler
4. **Oyunlaştırma** — streak sistemi, XP, can/kalp sistemi, haftalık lig, liderlik tablosu

### Skor Sistemi
- Ders bazlı skor (doğruluk oranına göre, yıldız sistemi)
- Toplam birikimli XP
- Haftalık lig skoru (haftalık sıfırlanan rekabet skoru)
- Global/arkadaş liderlik tablosu (ileride Firebase senkronu gerektirir)

### Streak & Bildirimler
- Günde en az 1 ders tamamlanırsa streak +1, gün atlanırsa sıfırlanır
- Kullanıcının belirlediği saatte günlük ders hatırlatma bildirimi
- Gün sonuna doğru ders yapılmadıysa "streak bozulmak üzere" uyarısı

### Ödeme / Abonelik
- RevenueCat üzerinden App Store & Play Store IAP yönetimi
- Ücretsiz katman: sınırlı can hakkı, reklam izleyerek can yenileme
- Premium katman: sınırsız can, reklamsız deneyim, gerçek metin okuma modülüne erişim
- Aylık ve yıllık abonelik seçenekleri (yıllık indirimli)

### Reklam
- Ücretsiz kullanıcılarda banner + rewarded ad (can yenileme, ekstra can)
- Premium kullanıcılarda reklam tamamen kapalı
- RevenueCat abonelik durumuna göre koşullu reklam gösterimi

## Veri Modeli (taslak)

```
Lesson
  - id, level, order
  - title (tr, en)

Exercise
  - id, lessonId, type (multiple_choice | matching | letter_write | audio_match)
  - content (ottoman, turkish_meaning, english_meaning)

Word
  - id, ottoman, turkish_meaning, english_meaning, audioUrl, level

UserProgress
  - lastCompletedLessonId
  - streak (current, longest)
  - totalScore (XP)
  - weeklyScore
  - hearts (can sayısı)
  - lastLessonDate

LessonAttempt
  - lessonId, accuracyScore, completedAt
```

> Not: Osmanlıca içerik (harf/kelime doğruluğu) elle veya doğrulanmış kaynaklardan girilir — içerik doğruluğu güven açısından kritik, otomatik/tahmini içerik üretilmemeli.

## Geliştirme Fazları

1. **Faz 1 — Planlama & İçerik Temeli:** müfredat iskeleti, ilk 3-5 dersin içeriği, veri modeli
2. **Faz 2 — Çekirdek MVP:** ders akışı motoru, can sistemi, streak, bildirimler, alfabe + temel kelime modülü
3. **Faz 3 — Ödeme/Abonelik:** RevenueCat entegrasyonu, paywall, ücretsiz/premium sınırı, reklam-abonelik dengesi
4. **Faz 4 — İçerik Genişletme:** hacim artırma, gerçek metin okuma modülü, sosyal/rekabetçi özellikler, ileri seviye yazı stilleri

## Kod Konvansiyonları
- Fonksiyonel bileşenler + hooks, class component kullanma
- Yeniden kullanılabilir bileşenleri `components/` altında, ekrana özel mantığı ilgili route dosyasında tut
- Custom hook'ları `hooks/` altında topla (örn. `useLessonProgress`, `useStreak`)
- Ortam değişkenlerini (API anahtarları vb.) merkezi bir config dosyasından yönet, kod içine gömme

## Önemli Kısıtlar
- Uygulama offline çalışabilmeli — ders içeriği ve ilerleme cihazda saklanır
- Osmanlıca metin RTL (sağdan sola) render gerektirir, bu bileşenlerde dikkat edilmeli
- "Paramanya" gibi üçüncü taraf marka/görselleri kopyalamıyoruz — bu proje bağımsız ve orijinal
