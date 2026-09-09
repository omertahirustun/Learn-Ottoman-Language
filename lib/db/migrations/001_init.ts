import type { SQLiteDatabase } from 'expo-sqlite';

import { CREATE_TABLES_SQL } from '../schema';

export const MIGRATION_VERSION = 1;

export async function runInitialMigration(db: SQLiteDatabase): Promise<void> {
  await db.execAsync(CREATE_TABLES_SQL);
}
