import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const te = getLetterById('te')!;
const se = getLetterById('se')!;
const cim = getLetterById('cim')!;
const cimUcendisli = getLetterById('cim-ucendisli')!; // Çim

/**
 * Ders 2: Bitişen Harfler I
 *
 * te, se, cim, çim — dördü de bir sonraki harfe bağlanan (initial/medial
 * formu olan) harfler. Ders 1'in devamı olarak aynı çoktan seçmeli kalıbı
 * kullanır.
 */
export const lesson002ConnectingLettersI: LessonContent = {
  id: 'lesson-002',
  level: 1,
  orderIndex: 2,
  titleTr: 'Bitişen Harfler I',
  titleEn: 'Connecting Letters I',
  exercises: [
    letterShapeToNameExercise('lesson-002-ex-1', 1, te, ['Se', 'Cim'], 0),
    letterShapeToNameExercise('lesson-002-ex-2', 2, se, ['Cim', 'Çim'], 1),
    letterShapeToNameExercise('lesson-002-ex-3', 3, cim, ['Çim', 'Te'], 2),
    letterShapeToNameExercise('lesson-002-ex-4', 4, cimUcendisli, ['Te', 'Se'], 1),
    letterNameToShapeExercise('lesson-002-ex-5', 5, te, [se, cim], 2),
    letterNameToShapeExercise('lesson-002-ex-6', 6, se, [cim, cimUcendisli], 0),
    letterNameToShapeExercise('lesson-002-ex-7', 7, cim, [cimUcendisli, te], 1),
    letterNameToShapeExercise('lesson-002-ex-8', 8, cimUcendisli, [te, se], 2),
  ],
};
