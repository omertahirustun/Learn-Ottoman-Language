import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const ha = getLetterById('ha')!;
const hi = getLetterById('hi')!;
const ti = getLetterById('ti')!;
const zi = getLetterById('zi')!;
const ayn = getLetterById('ayn')!;
const gayn = getLetterById('gayn')!;
const fe = getLetterById('fe')!;
const kaf = getLetterById('kaf')!;
const kef = getLetterById('kef')!;
const gef = getLetterById('gef')!;
const kefINuni = getLetterById('kef-i-nuni')!;

/**
 * Ders 9: Tam Alfabe Değerlendirmesi
 *
 * Seviye 1'i kapatan pekiştirme dersi. Ders 5'teki gibi, aynı gövdeyi
 * paylaşıp yalnızca ek işaretle ayrılan çiftlere odaklanır: ha/hı,
 * tı/zı, ayn/gayn, fe/kaf ve kef ailesi (kef/gef/kef-i nunî).
 */
export const lesson009FullAlphabetReview: LessonContent = {
  id: 'lesson-009',
  level: 1,
  orderIndex: 9,
  titleTr: 'Tam Alfabe Değerlendirmesi',
  titleEn: 'Full Alphabet Review',
  exercises: [
    letterShapeToNameExercise('lesson-009-ex-1', 1, ha, ['Hı', 'Tı'], 0),
    letterShapeToNameExercise('lesson-009-ex-2', 2, hi, ['Ha', 'Zı'], 1),
    letterShapeToNameExercise('lesson-009-ex-3', 3, ti, ['Zı', 'Ayn'], 0),
    letterShapeToNameExercise('lesson-009-ex-4', 4, zi, ['Tı', 'Gayn'], 1),
    letterShapeToNameExercise('lesson-009-ex-5', 5, ayn, ['Gayn', 'Fe'], 0),
    letterShapeToNameExercise('lesson-009-ex-6', 6, gayn, ['Ayn', 'Kaf'], 1),
    letterShapeToNameExercise('lesson-009-ex-7', 7, fe, ['Kaf', 'Kef'], 0),
    letterShapeToNameExercise('lesson-009-ex-8', 8, kaf, ['Fe', 'Kef'], 1),
    letterShapeToNameExercise('lesson-009-ex-9', 9, kef, ['Gef', 'Kef-i Nunî'], 0),
    letterShapeToNameExercise('lesson-009-ex-10', 10, gef, ['Kef', 'Kef-i Nunî'], 1),
    letterShapeToNameExercise('lesson-009-ex-11', 11, kefINuni, ['Kef', 'Gef'], 2),
    letterNameToShapeExercise('lesson-009-ex-12', 12, zi, [ti, ayn], 1),
  ],
};
