import type { Letter } from '@/content/letters/letters';

import type { LessonExerciseContent } from './types';

/**
 * "Bu harfin adı nedir?" tipi egzersiz — harf şekli gösterilir, isim seçilir.
 * `correctIndex`, doğru seçeneğin `distractorNames` dizisi içindeki hangi
 * konuma ekleneceğini belirtir (deterministik içerik — rastgelelik yok).
 */
export function letterShapeToNameExercise(
  id: string,
  orderIndex: number,
  letter: Letter,
  distractorNames: string[],
  correctIndex: number
): LessonExerciseContent {
  const options = [...distractorNames];
  options.splice(correctIndex, 0, letter.nameTr);

  return {
    id,
    orderIndex,
    content: {
      type: 'multiple_choice',
      promptOttoman: letter.isolated,
      promptTr: 'Bu harfin adı nedir?',
      promptEn: 'What is the name of this letter?',
      options,
      correctIndex,
    },
  };
}

/** "X harfinin şekli hangisidir?" tipi egzersiz — isim gösterilir, şekil seçilir. */
export function letterNameToShapeExercise(
  id: string,
  orderIndex: number,
  letter: Letter,
  distractorLetters: Letter[],
  correctIndex: number
): LessonExerciseContent {
  const options = distractorLetters.map((l) => l.isolated);
  options.splice(correctIndex, 0, letter.isolated);

  return {
    id,
    orderIndex,
    content: {
      type: 'multiple_choice',
      promptOttoman: letter.nameTr,
      promptTr: `"${letter.nameTr}" harfinin şekli hangisidir?`,
      promptEn: `Which shape is the letter "${letter.nameTr}"?`,
      options,
      correctIndex,
    },
  };
}
