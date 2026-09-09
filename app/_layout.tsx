import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { initializeDatabase } from '@/lib/db';

type DbStatus = 'loading' | 'ready' | 'error';

export default function RootLayout() {
  const [dbStatus, setDbStatus] = useState<DbStatus>('loading');

  useEffect(() => {
    initializeDatabase()
      .then(() => setDbStatus('ready'))
      .catch(() => setDbStatus('error'));
  }, []);

  if (dbStatus === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (dbStatus === 'error') {
    return (
      <View style={styles.center}>
        <Text>Veritabanı başlatılamadı. Uygulamayı yeniden başlatmayı deneyin.</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.flex}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});
