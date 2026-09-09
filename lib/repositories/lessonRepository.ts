import type { Lesson } from '@/types/models';

import { getDatabase } from '../db/client';

interface LessonRow {
  id: string;
  level: number;
  order_index: number;
  title_tr: string;
  title_en: string;
}

function mapRow(row: LessonRow): Lesson {
  return {
    id: row.id,
    level: row.level,
    orderIndex: row.order_index,
    titleTr: row.title_tr,
    titleEn: row.title_en,
  };
}

export async function getLessonById(id: string): Promise<Lesson | null> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<LessonRow>('SELECT * FROM lessons WHERE id = ?', [id]);
  return row ? mapRow(row) : null;
}

export async function getLessonsByLevel(level: number): Promise<Lesson[]> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<LessonRow>(
    'SELECT * FROM lessons WHERE level = ? ORDER BY order_index',
    [level]
  );
  return rows.map(mapRow);
}
