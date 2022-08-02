import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';

export function useLoadResources() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
    SplashScreen.preventAutoHideAsync();
  }, [fontsLoaded]);

  return isReady;
}
