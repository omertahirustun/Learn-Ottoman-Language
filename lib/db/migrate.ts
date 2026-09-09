import type { SQLiteDatabase } from 'expo-sqlite';

import { MIGRATION_VERSION, runInitialMigration } from './migrations/001_init';

/** `PRAGMA user_version` ile takip edilen, ileride numaralı migration'lara açık basit bir koşucu. */
export async function runMigrations(db: SQLiteDatabase): Promise<void> {
  const row = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const currentVersion = row?.user_version ?? 0;

  if (currentVersion < MIGRATION_VERSION) {
    await runInitialMigration(db);
    await db.execAsync(`PRAGMA user_version = ${MIGRATION_VERSION}`);
  }
}
