import { openDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite';

const DATABASE_NAME = 'learnottoman.db';

let dbPromise: Promise<SQLiteDatabase> | null = null;

/** Uygulama boyunca tekil bir SQLite bağlantısı döndürür. */
export function getDatabase(): Promise<SQLiteDatabase> {
  if (!dbPromise) {
    dbPromise = openDatabaseAsync(DATABASE_NAME);
  }
  return dbPromise;
}
