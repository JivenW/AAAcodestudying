import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { initializeDatabase } from '@/database/client';
import { useAppStore } from '@/store/useAppStore';

export default function RootLayout() {
  const setDatabaseReady = useAppStore((state) => state.setDatabaseReady);

  useEffect(() => {
    initializeDatabase()
      .then(() => setDatabaseReady(true))
      .catch(() => setDatabaseReady(false));
  }, [setDatabaseReady]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
  );
}
