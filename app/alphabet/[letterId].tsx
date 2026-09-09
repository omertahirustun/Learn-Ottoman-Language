import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// Yer tutucu ekran — M9'da pozisyonel harf formları + ses ile değiştirilecek.
export default function LetterDetailScreen() {
  const { letterId } = useLocalSearchParams<{ letterId: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Harf detayı ({letterId}) yakında burada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { fontSize: 16, color: '#555', textAlign: 'center' },
});
