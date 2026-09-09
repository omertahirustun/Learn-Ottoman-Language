import { getDatabase } from '../db/client';

export async function recordAttempt(lessonId: string, accuracyScore: number): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO lesson_attempts (lesson_id, accuracy_score, completed_at) VALUES (?, ?, ?)',
    [lessonId, accuracyScore, new Date().toISOString()]
  );
}
