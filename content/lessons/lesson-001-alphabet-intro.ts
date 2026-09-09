import type { LessonContent } from './types';

/**
 * Ders 1: Alfabeye Giriş
 *
 * Sadece "elif", "be", "pe" harflerinin tanınmasına odaklanır. Egzersizler
 * şimdilik yalnızca çoktan seçmeli tiptedir (bu oturumun M4 hedefi);
 * eşleştirme, harf yazma ve sesli eşleştirme egzersizleri M5'te eklenecek.
 */
export const lesson001AlphabetIntro: LessonContent = {
  id: 'lesson-001',
  level: 1,
  orderIndex: 1,
  titleTr: 'Alfabeye Giriş',
  titleEn: 'Introduction to the Alphabet',
  exercises: [
    {
      id: 'lesson-001-ex-1',
      orderIndex: 1,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'ا',
        promptTr: 'Bu harfin adı nedir?',
        promptEn: 'What is the name of this letter?',
        options: ['Elif', 'Be', 'Pe'],
        correctIndex: 0,
      },
    },
    {
      id: 'lesson-001-ex-2',
      orderIndex: 2,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'ب',
        promptTr: 'Bu harfin adı nedir?',
        promptEn: 'What is the name of this letter?',
        options: ['Pe', 'Be', 'Elif'],
        correctIndex: 1,
      },
    },
    {
      id: 'lesson-001-ex-3',
      orderIndex: 3,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'پ',
        promptTr: 'Bu harfin adı nedir?',
        promptEn: 'What is the name of this letter?',
        options: ['Be', 'Elif', 'Pe'],
        correctIndex: 2,
      },
    },
    {
      id: 'lesson-001-ex-4',
      orderIndex: 4,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'Elif',
        promptTr: '"Elif" harfinin şekli hangisidir?',
        promptEn: 'Which shape is the letter "Elif"?',
        options: ['ب', 'ا', 'پ'],
        correctIndex: 1,
      },
    },
    {
      id: 'lesson-001-ex-5',
      orderIndex: 5,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'Be',
        promptTr: '"Be" harfinin şekli hangisidir?',
        promptEn: 'Which shape is the letter "Be"?',
        options: ['ا', 'پ', 'ب'],
        correctIndex: 2,
      },
    },
    {
      id: 'lesson-001-ex-6',
      orderIndex: 6,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'Pe',
        promptTr: '"Pe" harfinin şekli hangisidir?',
        promptEn: 'Which shape is the letter "Pe"?',
        options: ['پ', 'ب', 'ا'],
        correctIndex: 0,
      },
    },
  ],
};
