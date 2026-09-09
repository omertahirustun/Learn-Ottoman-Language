import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const ha = getLetterById('ha')!;
const hi = getLetterById('hi')!;
const ti = getLetterById('ti')!;
const zi = getLetterById('zi')!;
const ayn = getLetterById('ayn')!;
const gayn = getLetterById('gayn')!;

/**
 * Ders 6: Kalın Sesler
 *
 * ha, hı, tı, zı, ayn, gayn — Arapça kökenli sözcüklerde ayrı yazılan bu
 * harfler, Osmanlı Türkçesi telaffuzunda çoğu zaman "düz" karşılıklarıyla
 * (ör. tı≈te, zı≈ze/dal) aynı okunur; ayrım yazımda korunur, telaffuzda
 * değil. Bu ders yalnızca şekil/isim tanımaya odaklanır, telaffuz farkı
 * iddia etmez.
 */
export const lesson006EmphaticLetters: LessonContent = {
  id: 'lesson-006',
  level: 1,
  orderIndex: 6,
  titleTr: 'Kalın Sesler',
  titleEn: 'Emphatic Letters',
  exercises: [
    letterShapeToNameExercise('lesson-006-ex-1', 1, ha, ['Hı', 'Tı'], 0),
    letterShapeToNameExercise('lesson-006-ex-2', 2, hi, ['Tı', 'Zı'], 1),
    letterShapeToNameExercise('lesson-006-ex-3', 3, ti, ['Zı', 'Ayn'], 2),
    letterShapeToNameExercise('lesson-006-ex-4', 4, zi, ['Ayn', 'Gayn'], 0),
    letterShapeToNameExercise('lesson-006-ex-5', 5, ayn, ['Gayn', 'Ha'], 1),
    letterShapeToNameExercise('lesson-006-ex-6', 6, gayn, ['Ha', 'Hı'], 2),
    letterNameToShapeExercise('lesson-006-ex-7', 7, ha, [hi, ti], 1),
    letterNameToShapeExercise('lesson-006-ex-8', 8, hi, [ti, zi], 2),
    letterNameToShapeExercise('lesson-006-ex-9', 9, ti, [zi, ayn], 0),
    letterNameToShapeExercise('lesson-006-ex-10', 10, zi, [ayn, gayn], 1),
    letterNameToShapeExercise('lesson-006-ex-11', 11, ayn, [gayn, ha], 2),
    letterNameToShapeExercise('lesson-006-ex-12', 12, gayn, [ha, hi], 0),
  ],
};
