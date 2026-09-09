import { StyleSheet, Text, View } from 'react-native';

// Yer tutucu ekran — M9'da harf grid/detay ekranlarıyla değiştirilecek.
export default function AlphabetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alfabe modülü yakında burada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { fontSize: 16, color: '#555', textAlign: 'center' },
});
