import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const be = getLetterById('be')!;
const pe = getLetterById('pe')!;
const te = getLetterById('te')!;
const se = getLetterById('se')!;
const sin = getLetterById('sin')!;
const sinNoktali = getLetterById('sin-noktali')!; // Şin
const sad = getLetterById('sad')!;
const dal = getLetterById('dal')!;
const zel = getLetterById('zel')!;
const re = getLetterById('re')!;

/**
 * Ders 5: Karma Tekrar — Benzer Şekilli Harfler
 *
 * Ders 1-4'te işlenen harflerden, aynı temel gövdeyi paylaşıp yalnızca
 * nokta sayısı/konumuyla ayrılan çiftlere odaklanır: be/pe/te/se aynı
 * "tekne" gövdesini, sin/şin aynı dişli gövdeyi, dal/zel aynı gövdeyi
 * paylaşır. Bu, harf tanımada en sık karışan noktaları hedefleyen bir
 * pekiştirme dersidir.
 */
export const lesson005MixedReview: LessonContent = {
  id: 'lesson-005',
  level: 1,
  orderIndex: 5,
  titleTr: 'Karma Tekrar: Benzer Şekilli Harfler',
  titleEn: 'Mixed Review: Similarly Shaped Letters',
  exercises: [
    letterShapeToNameExercise('lesson-005-ex-1', 1, be, ['Pe', 'Te'], 0),
    letterShapeToNameExercise('lesson-005-ex-2', 2, pe, ['Te', 'Se'], 1),
    letterShapeToNameExercise('lesson-005-ex-3', 3, te, ['Se', 'Be'], 2),
    letterShapeToNameExercise('lesson-005-ex-4', 4, se, ['Pe', 'Be'], 2),
    letterShapeToNameExercise('lesson-005-ex-5', 5, sin, ['Şin', 'Sad'], 0),
    letterShapeToNameExercise('lesson-005-ex-6', 6, sinNoktali, ['Sin', 'Sad'], 2),
    letterShapeToNameExercise('lesson-005-ex-7', 7, dal, ['Zel', 'Re'], 0),
    letterShapeToNameExercise('lesson-005-ex-8', 8, zel, ['Re', 'Dal'], 2),
    letterNameToShapeExercise('lesson-005-ex-9', 9, se, [be, te], 2),
    letterNameToShapeExercise('lesson-005-ex-10', 10, zel, [dal, re], 1),
  ],
};
