import { StyleSheet, Text, View } from 'react-native';

// Yer tutucu ekran — M7'de streak/XP/can bilgileriyle değiştirilecek.
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profil ve ilerleme bilgileri yakında burada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { fontSize: 16, color: '#555', textAlign: 'center' },
});
