import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Text, View } from 'react-native';
import AppContainer from './src/AppNavigation';
import { NativeBaseProvider } from "native-base";
import {
  useFonts, OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }else{
    return (   
      <NativeBaseProvider>
        <AppContainer />
      </NativeBaseProvider> 
      
    );
  }
}