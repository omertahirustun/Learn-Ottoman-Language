import type { ExerciseContent, ExerciseType } from './exercise';

export interface Lesson {
  id: string;
  level: number;
  orderIndex: number;
  titleTr: string;
  titleEn: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  type: ExerciseType;
  orderIndex: number;
  content: ExerciseContent;
}

export interface Word {
  id: string;
  ottoman: string;
  turkishMeaning: string;
  englishMeaning: string;
  audioUrl: string | null;
  level: number;
}

export interface UserProgress {
  lastCompletedLessonId: string | null;
  currentStreak: number;
  longestStreak: number;
  totalScore: number;
  weeklyScore: number;
  hearts: number;
  lastLessonDate: string | null;
}

export interface LessonAttempt {
  id: number;
  lessonId: string;
  accuracyScore: number;
  completedAt: string;
}

/** Faz 2 kelime modülünün spaced-repetition zamanlaması için (taslak modelde yoktu, kelime modülü için gerekli). */
export interface WordReviewState {
  wordId: string;
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  dueAt: string;
}
