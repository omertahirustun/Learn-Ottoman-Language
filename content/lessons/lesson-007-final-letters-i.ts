import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const fe = getLetterById('fe')!;
const kaf = getLetterById('kaf')!;
const kef = getLetterById('kef')!;
const gef = getLetterById('gef')!;
const kefINuni = getLetterById('kef-i-nuni')!;

/**
 * Ders 7: Son Harfler I
 *
 * fe, kaf, kef, gef, kef-i nunî — kef ailesi (kef, gef, kef-i nunî) aynı
 * temel gövdeyi paylaşır, yalnızca ek işaretle ayrılır.
 */
export const lesson007FinalLettersI: LessonContent = {
  id: 'lesson-007',
  level: 1,
  orderIndex: 7,
  titleTr: 'Son Harfler I',
  titleEn: 'Final Letters I',
  exercises: [
    letterShapeToNameExercise('lesson-007-ex-1', 1, fe, ['Kaf', 'Kef'], 0),
    letterShapeToNameExercise('lesson-007-ex-2', 2, kaf, ['Kef', 'Gef'], 1),
    letterShapeToNameExercise('lesson-007-ex-3', 3, kef, ['Gef', 'Kef-i Nunî'], 2),
    letterShapeToNameExercise('lesson-007-ex-4', 4, gef, ['Kef-i Nunî', 'Fe'], 0),
    letterShapeToNameExercise('lesson-007-ex-5', 5, kefINuni, ['Fe', 'Kaf'], 1),
    letterNameToShapeExercise('lesson-007-ex-6', 6, fe, [kaf, kef], 2),
    letterNameToShapeExercise('lesson-007-ex-7', 7, kaf, [kef, gef], 0),
    letterNameToShapeExercise('lesson-007-ex-8', 8, kef, [gef, kefINuni], 1),
    letterNameToShapeExercise('lesson-007-ex-9', 9, gef, [kefINuni, fe], 2),
    letterNameToShapeExercise('lesson-007-ex-10', 10, kefINuni, [fe, kaf], 0),
  ],
};
