import { StyleSheet, Text, View } from 'react-native';

// Yer tutucu ekran — M10'da flashcard/SRS/eşleştirme akışıyla değiştirilecek.
export default function VocabularyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kelime modülü yakında burada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { fontSize: 16, color: '#555', textAlign: 'center' },
});
