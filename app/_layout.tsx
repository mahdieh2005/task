import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Stack بدون تب */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* فقط صفحه index رو نگه می‌داریم */}
        <Stack.Screen name="index" />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
