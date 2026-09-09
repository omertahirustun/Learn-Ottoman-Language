import type { SQLiteDatabase } from 'expo-sqlite';

import { lessons } from '@/content/lessons';

/** İlk çalıştırmada `lessons` tablosu boşsa, `content/` altındaki içerikle DB'yi doldurur. */
export async function seedIfEmpty(db: SQLiteDatabase): Promise<void> {
  const row = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) as count FROM lessons');
  if ((row?.count ?? 0) > 0) {
    return;
  }

  await db.withTransactionAsync(async () => {
    for (const lesson of lessons) {
      await db.runAsync(
        'INSERT INTO lessons (id, level, order_index, title_tr, title_en) VALUES (?, ?, ?, ?, ?)',
        [lesson.id, lesson.level, lesson.orderIndex, lesson.titleTr, lesson.titleEn]
      );

      for (const exercise of lesson.exercises) {
        await db.runAsync(
          'INSERT INTO exercises (id, lesson_id, type, order_index, content_json) VALUES (?, ?, ?, ?, ?)',
          [
            exercise.id,
            lesson.id,
            exercise.content.type,
            exercise.orderIndex,
            JSON.stringify(exercise.content),
          ]
        );
      }
    }

    await db.runAsync('INSERT OR IGNORE INTO user_progress (id, hearts) VALUES (1, 5)');
  });
}
