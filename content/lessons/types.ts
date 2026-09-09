import type { ExerciseContent } from '@/types/exercise';

export interface LessonExerciseContent {
  id: string;
  orderIndex: number;
  content: ExerciseContent;
}

/** Yazarların doldurduğu içerik şekli — DB satırlarına `seed.ts` tarafından çevrilir. */
export interface LessonContent {
  id: string;
  level: number;
  orderIndex: number;
  titleTr: string;
  titleEn: string;
  exercises: LessonExerciseContent[];
}
