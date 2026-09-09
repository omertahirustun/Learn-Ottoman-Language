import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const sin = getLetterById('sin')!;
const sinNoktali = getLetterById('sin-noktali')!; // Şin
const sad = getLetterById('sad')!;
const dad = getLetterById('dad')!;

/**
 * Ders 4: Islık Sesleri
 *
 * sin, şin, sad, dad — hepsi bir sonraki harfe bağlanan, "s/ş/peltek s/d"
 * seslerini karşılayan harfler.
 */
export const lesson004WhistlingSounds: LessonContent = {
  id: 'lesson-004',
  level: 1,
  orderIndex: 4,
  titleTr: 'Islık Sesleri',
  titleEn: 'Whistling Sounds',
  exercises: [
    letterShapeToNameExercise('lesson-004-ex-1', 1, sin, ['Şin', 'Sad'], 0),
    letterShapeToNameExercise('lesson-004-ex-2', 2, sinNoktali, ['Sad', 'Dad'], 1),
    letterShapeToNameExercise('lesson-004-ex-3', 3, sad, ['Dad', 'Sin'], 2),
    letterShapeToNameExercise('lesson-004-ex-4', 4, dad, ['Sin', 'Şin'], 1),
    letterNameToShapeExercise('lesson-004-ex-5', 5, sin, [sinNoktali, sad], 2),
    letterNameToShapeExercise('lesson-004-ex-6', 6, sinNoktali, [sad, dad], 0),
    letterNameToShapeExercise('lesson-004-ex-7', 7, sad, [dad, sin], 1),
    letterNameToShapeExercise('lesson-004-ex-8', 8, dad, [sin, sinNoktali], 2),
  ],
};
