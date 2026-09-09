import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import { ExerciseMultipleChoice } from '@/components/lesson/ExerciseMultipleChoice';
import { useLessonSession } from '@/hooks/useLessonSession';

export default function LessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const session = useLessonSession(lessonId ?? '');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSelect = (selectedIndex: number) => {
    if (feedback !== null) return;
    const isCorrect = session.submitAnswer(selectedIndex);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setTimeout(() => setFeedback(null), 600);
  };

  if (session.status === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (session.status === 'error') {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{session.errorMessage ?? 'Bir hata oluştu.'}</Text>
      </View>
    );
  }

  if (session.status === 'completed') {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: session.lesson?.titleTr ?? 'Ders' }} />
        <Text style={styles.title}>Tebrikler!</Text>
        <Text style={styles.subtitle}>
          Doğruluk: %{session.accuracyPercent} — {'⭐'.repeat(session.starRating) || '—'}
        </Text>
        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  const exercise = session.currentExercise;
  if (!exercise || exercise.content.type !== 'multiple_choice') {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Bu egzersiz tipi henüz desteklenmiyor.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: session.lesson?.titleTr ?? 'Ders' }} />
      <Text style={styles.progress}>
        {session.currentIndex + 1} / {session.exercises.length}
      </Text>
      <ExerciseMultipleChoice
        key={exercise.id}
        content={exercise.content}
        onAnswer={handleSelect}
        feedback={feedback}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 24 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, padding: 24 },
  progress: { textAlign: 'center', color: '#666' },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#444' },
  errorText: { fontSize: 16, textAlign: 'center' },
  button: {
    backgroundColor: '#1f6feb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
