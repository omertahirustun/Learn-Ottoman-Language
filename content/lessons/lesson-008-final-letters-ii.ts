import { getLetterById } from '@/content/letters/letters';

import { letterNameToShapeExercise, letterShapeToNameExercise } from './helpers';
import type { LessonContent } from './types';

const lam = getLetterById('lam')!;
const mim = getLetterById('mim')!;
const nun = getLetterById('nun')!;
const he = getLetterById('he')!;
const ye = getLetterById('ye')!;
const je = getLetterById('je')!;

/**
 * Ders 8: Son Harfler II — Alfabenin Tamamlanması
 *
 * lam, mim, nun, he, ye, je ile 33 harflik Osmanlı elifbası tamamlanır.
 * İlk egzersiz, "je"nin Ders 3'teki bitişmeyen harfler ailesiyle aynı
 * bağlanma kuralını paylaştığını (ze ز ile aynı gövde) pekiştirir.
 */
export const lesson008FinalLettersII: LessonContent = {
  id: 'lesson-008',
  level: 1,
  orderIndex: 8,
  titleTr: 'Son Harfler II — Alfabenin Tamamlanması',
  titleEn: 'Final Letters II — Completing the Alphabet',
  exercises: [
    {
      id: 'lesson-008-ex-concept',
      orderIndex: 1,
      content: {
        type: 'multiple_choice',
        promptOttoman: 'ژ',
        promptTr: '"Je" harfi hangi grupla aynı bağlanma kuralına sahiptir?',
        promptEn: 'Which group does "Je" share its connection rule with?',
        options: ['be, pe, te, se grubu', 'dal, zel, re, ze, vav grubu', 'sin, şin, sad, dad grubu'],
        correctIndex: 1,
      },
    },
    letterShapeToNameExercise('lesson-008-ex-1', 2, lam, ['Mim', 'Nun'], 0),
    letterShapeToNameExercise('lesson-008-ex-2', 3, mim, ['Nun', 'He'], 1),
    letterShapeToNameExercise('lesson-008-ex-3', 4, nun, ['He', 'Ye'], 2),
    letterShapeToNameExercise('lesson-008-ex-4', 5, he, ['Ye', 'Je'], 0),
    letterShapeToNameExercise('lesson-008-ex-5', 6, ye, ['Je', 'Lam'], 1),
    letterShapeToNameExercise('lesson-008-ex-6', 7, je, ['Lam', 'Mim'], 2),
    letterNameToShapeExercise('lesson-008-ex-7', 8, lam, [mim, nun], 1),
    letterNameToShapeExercise('lesson-008-ex-8', 9, mim, [nun, he], 2),
    letterNameToShapeExercise('lesson-008-ex-9', 10, nun, [he, ye], 0),
    letterNameToShapeExercise('lesson-008-ex-10', 11, he, [ye, je], 1),
    letterNameToShapeExercise('lesson-008-ex-11', 12, ye, [je, lam], 2),
    letterNameToShapeExercise('lesson-008-ex-12', 13, je, [lam, mim], 0),
  ],
};
