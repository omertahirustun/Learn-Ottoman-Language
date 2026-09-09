import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { MultipleChoiceContent } from '@/types/exercise';

interface Props {
  content: MultipleChoiceContent;
  onAnswer: (selectedIndex: number) => void;
  feedback: 'correct' | 'incorrect' | null;
}

export function ExerciseMultipleChoice({ content, onAnswer, feedback }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.ottoman}>{content.promptOttoman}</Text>
      <Text style={styles.question}>{content.promptTr}</Text>
      <View style={styles.options}>
        {content.options.map((option, index) => (
          <Pressable
            key={option}
            style={styles.option}
            onPress={() => onAnswer(index)}
            disabled={feedback !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}
      </View>
      {feedback && (
        <Text style={feedback === 'correct' ? styles.correct : styles.incorrect}>
          {feedback === 'correct' ? 'Doğru!' : 'Yanlış'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 20, width: '100%' },
  // Osmanlıca metin sağdan sola yazılır; sadece bu düğüm RTL, çevresindeki
  // UI etkilenmez (bkz. plan "RTL yaklaşımı" — genel I18nManager değil).
  ottoman: { fontSize: 64, writingDirection: 'rtl', textAlign: 'center' },
  question: { fontSize: 18, textAlign: 'center' },
  options: { width: '100%', gap: 12 },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  optionText: { fontSize: 16 },
  correct: { color: '#1a7f37', fontWeight: '700' },
  incorrect: { color: '#cf222e', fontWeight: '700' },
});
