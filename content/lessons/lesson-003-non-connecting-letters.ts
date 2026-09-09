import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const dal = getLetterById('dal')!;
const zel = getLetterById('zel')!;
const re = getLetterById('re')!;
const ze = getLetterById('ze')!;
const vav = getLetterById('vav')!;

/**
 * Ders 3: Bitişmeyen Harfler
 *
 * Arap yazı sisteminde bir sonraki harfe bağlanmayan 6 harften 5'i: dal,
 * zel, re, ze, vav (6.'sı olan elif Ders 1'de işlendi). İlk egzersiz bu
 * grubun ortak özelliğini (bağlanmama) kavramsal olarak sorar.
 */
export const lesson003NonConnectingLetters: LessonContent = {
  id: 'lesson-003',
  level: 1,
  orderIndex: 3,
  titleTr: 'Bitişmeyen Harfler',
  titleEn: 'Non-Connecting Letters',
  exercises: [
    {
      id: 'lesson-003-ex-concept',
      orderIndex: 1,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'د ذ ر ز و',
        promptTr: 'Bu harflerin ortak özelliği nedir?',
        promptEn: 'What do these letters have in common?',
        options: ['Hepsi sesli harftir', 'Hiçbiri bir sonraki harfe bağlanmaz', 'Hepsi noktalıdır'],
        correctIndex: 1,
      },
    },
    letterShapeToNameExercise('lesson-003-ex-1', 2, dal, ['Zel', 'Re'], 0),
    letterShapeToNameExercise('lesson-003-ex-2', 3, zel, ['Re', 'Ze'], 1),
    letterShapeToNameExercise('lesson-003-ex-3', 4, re, ['Ze', 'Vav'], 2),
    letterShapeToNameExercise('lesson-003-ex-4', 5, ze, ['Vav', 'Dal'], 0),
    letterShapeToNameExercise('lesson-003-ex-5', 6, vav, ['Dal', 'Zel'], 1),
    letterNameToShapeExercise('lesson-003-ex-6', 7, dal, [zel, re], 1),
    letterNameToShapeExercise('lesson-003-ex-7', 8, zel, [re, ze], 2),
    letterNameToShapeExercise('lesson-003-ex-8', 9, re, [ze, vav], 0),
    letterNameToShapeExercise('lesson-003-ex-9', 10, ze, [vav, dal], 1),
    letterNameToShapeExercise('lesson-003-ex-10', 11, vav, [dal, zel], 2),
  ],
};
