import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const elif = getLetterById('elif')!;
const be = getLetterById('be')!;
const pe = getLetterById('pe')!;

/**
 * Ders 1: Alfabeye Giriş
 *
 * Sadece "elif", "be", "pe" harflerinin tanınmasına odaklanır. Egzersizler
 * şimdilik yalnızca çoktan seçmeli tiptedir; eşleştirme, harf yazma ve
 * sesli eşleştirme egzersizleri M5'te eklenecek.
 */
export const lesson001AlphabetIntro: LessonContent = {
  id: 'lesson-001',
  level: 1,
  orderIndex: 1,
  titleTr: 'Alfabeye Giriş',
  titleEn: 'Introduction to the Alphabet',
  exercises: [
    letterShapeToNameExercise('lesson-001-ex-1', 1, elif, ['Be', 'Pe'], 0),
    letterShapeToNameExercise('lesson-001-ex-2', 2, be, ['Pe', 'Elif'], 1),
    letterShapeToNameExercise('lesson-001-ex-3', 3, pe, ['Be', 'Elif'], 2),
    letterNameToShapeExercise('lesson-001-ex-4', 4, elif, [be, pe], 1),
    letterNameToShapeExercise('lesson-001-ex-5', 5, be, [elif, pe], 2),
    letterNameToShapeExercise('lesson-001-ex-6', 6, pe, [be, elif], 0),
  ],
};
