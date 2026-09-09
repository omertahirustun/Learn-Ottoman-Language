import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { getLessonsByLevel } from '@/lib/repositories/lessonRepository';
import type { Lesson } from '@/types/models';

export default function HomeScreen() {
  const [lessons, setLessons] = useState<Lesson[] | null>(null);

  useEffect(() => {
    let isActive = true;
    getLessonsByLevel(1)
      .then((result) => {
        if (isActive) setLessons(result);
      })
      .catch(() => {
        if (isActive) setLessons([]);
      });
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LearnOttoman</Text>
      <Text style={styles.subtitle}>Seviye 1 — Alfabe</Text>

      {lessons === null ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={lessons}
          keyExtractor={(lesson) => lesson.id}
          renderItem={({ item, index }) => (
            <Link href={`/lesson/${item.id}`} asChild>
              <Pressable style={styles.lessonRow}>
                <Text style={styles.lessonIndex}>{index + 1}</Text>
                <Text style={styles.lessonTitle}>{item.titleTr}</Text>
              </Pressable>
            </Link>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 8 },
  loader: { marginTop: 24 },
  list: { flex: 1 },
  listContent: { gap: 10 },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  lessonIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1f6feb',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
    overflow: 'hidden',
  },
  lessonTitle: { fontSize: 16, flex: 1 },
});
