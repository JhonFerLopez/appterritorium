import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from 'react-native';
import AppContainer from './src/AppNavigation';
import {
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({ OpenSans_400Regular });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     await SplashScreen.hideAsync();
   }
   }, [appIsReady]);
   
   if (!appIsReady) {
    return null;
   }
  return (    
      <AppContainer onLayout={onLayoutRootView} />
  );
}