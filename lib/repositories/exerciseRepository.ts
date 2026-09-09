import type { Exercise } from '@/types/models';

import { getDatabase } from '../db/client';

interface ExerciseRow {
  id: string;
  lesson_id: string;
  type: string;
  order_index: number;
  content_json: string;
}

function mapRow(row: ExerciseRow): Exercise {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    type: row.type as Exercise['type'],
    orderIndex: row.order_index,
    content: JSON.parse(row.content_json) as Exercise['content'],
  };
}

export async function getExercisesForLesson(lessonId: string): Promise<Exercise[]> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<ExerciseRow>(
    'SELECT * FROM exercises WHERE lesson_id = ? ORDER BY order_index',
    [lessonId]
  );
  return rows.map(mapRow);
}
