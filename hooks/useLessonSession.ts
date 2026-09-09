import { useCallback, useEffect, useState } from 'react';

import { getExercisesForLesson } from '@/lib/repositories/exerciseRepository';
import { getLessonById } from '@/lib/repositories/lessonRepository';
import { recordAttempt } from '@/lib/repositories/lessonAttemptRepository';
import type { Exercise, Lesson } from '@/types/models';

export type LessonSessionStatus = 'loading' | 'in-progress' | 'completed' | 'error';

export interface LessonSessionResult {
  status: LessonSessionStatus;
  lesson: Lesson | null;
  exercises: Exercise[];
  currentIndex: number;
  currentExercise: Exercise | null;
  correctCount: number;
  accuracyPercent: number;
  starRating: 0 | 1 | 2 | 3;
  errorMessage: string | null;
  /** Seçilen cevabı işler, sıradaki egzersize geçer veya dersi tamamlar. Doğru olup olmadığını döndürür. */
  submitAnswer: (selectedIndex: number) => boolean;
}

function calculateStars(accuracyPercent: number): 0 | 1 | 2 | 3 {
  if (accuracyPercent >= 90) return 3;
  if (accuracyPercent >= 70) return 2;
  if (accuracyPercent >= 50) return 1;
  return 0;
}

/** Bir ders oturumunu (egzersiz sırası, doğruluk, yıldız, kalıcı kayıt) yönetir. */
export function useLessonSession(lessonId: string): LessonSessionResult {
  const [status, setStatus] = useState<LessonSessionStatus>('loading');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    (async () => {
      try {
        const [loadedLesson, loadedExercises] = await Promise.all([
          getLessonById(lessonId),
          getExercisesForLesson(lessonId),
        ]);
        if (!isActive) return;

        if (!loadedLesson || loadedExercises.length === 0) {
          setErrorMessage('Ders bulunamadı.');
          setStatus('error');
          return;
        }

        setLesson(loadedLesson);
        setExercises(loadedExercises);
        setCurrentIndex(0);
        setCorrectCount(0);
        setStatus('in-progress');
      } catch (err) {
        if (!isActive) return;
        setErrorMessage(err instanceof Error ? err.message : 'Bilinmeyen hata.');
        setStatus('error');
      }
    })();

    return () => {
      isActive = false;
    };
  }, [lessonId]);

  const accuracyPercent =
    exercises.length > 0 ? Math.round((correctCount / exercises.length) * 100) : 0;

  const submitAnswer = useCallback(
    (selectedIndex: number): boolean => {
      const exercise = exercises[currentIndex];
      if (!exercise || exercise.content.type !== 'multiple_choice') {
        return false;
      }

      const isCorrect = selectedIndex === exercise.content.correctIndex;
      const nextCorrectCount = correctCount + (isCorrect ? 1 : 0);
      setCorrectCount(nextCorrectCount);

      const isLastExercise = currentIndex === exercises.length - 1;
      if (isLastExercise) {
        const finalAccuracy = Math.round((nextCorrectCount / exercises.length) * 100);
        recordAttempt(lessonId, finalAccuracy).catch(() => {
          // En iyi çaba kaydı — kayıt başarısız olsa bile kullanıcı tamamlanma ekranını görür.
        });
        setStatus('completed');
      } else {
        setCurrentIndex((prev) => prev + 1);
      }

      return isCorrect;
    },
    [exercises, currentIndex, correctCount, lessonId]
  );

  return {
    status,
    lesson,
    exercises,
    currentIndex,
    currentExercise: exercises[currentIndex] ?? null,
    correctCount,
    accuracyPercent,
    starRating: calculateStars(accuracyPercent),
    errorMessage,
    submitAnswer,
  };
}
