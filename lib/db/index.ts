import { getDatabase } from './client';
import { runMigrations } from './migrate';
import { seedIfEmpty } from './seed';

/** Uygulama açılışında bir kez çağrılır: şemayı kurar, boşsa içerik tohumlar. */
export async function initializeDatabase(): Promise<void> {
  const db = await getDatabase();
  await runMigrations(db);
  await seedIfEmpty(db);
}

export { getDatabase };
