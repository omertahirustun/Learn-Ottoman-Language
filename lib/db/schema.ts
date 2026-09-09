/** Şema oluşturma SQL'i — tüm ifadeler idempotent (IF NOT EXISTS). */
export const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,
  level INTEGER NOT NULL,
  order_index INTEGER NOT NULL,
  title_tr TEXT NOT NULL,
  title_en TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_lessons_level_order ON lessons(level, order_index);

CREATE TABLE IF NOT EXISTS exercises (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  type TEXT NOT NULL CHECK (type IN ('multiple_choice','matching','letter_write','audio_match')),
  order_index INTEGER NOT NULL,
  content_json TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson ON exercises(lesson_id, order_index);

CREATE TABLE IF NOT EXISTS words (
  id TEXT PRIMARY KEY,
  ottoman TEXT NOT NULL,
  turkish_meaning TEXT NOT NULL,
  english_meaning TEXT NOT NULL,
  audio_url TEXT,
  level INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_words_level ON words(level);

CREATE TABLE IF NOT EXISTS user_progress (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  last_completed_lesson_id TEXT REFERENCES lessons(id),
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  total_score INTEGER NOT NULL DEFAULT 0,
  weekly_score INTEGER NOT NULL DEFAULT 0,
  hearts INTEGER NOT NULL DEFAULT 5,
  last_lesson_date TEXT
);

CREATE TABLE IF NOT EXISTS lesson_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  accuracy_score REAL NOT NULL,
  completed_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_attempts_lesson ON lesson_attempts(lesson_id, completed_at);

CREATE TABLE IF NOT EXISTS word_review_state (
  word_id TEXT PRIMARY KEY REFERENCES words(id),
  ease_factor REAL NOT NULL DEFAULT 2.5,
  interval_days INTEGER NOT NULL DEFAULT 0,
  repetitions INTEGER NOT NULL DEFAULT 0,
  due_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_review_due ON word_review_state(due_at);
`;
