import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home'
import { AppLoading } from 'expo'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded]= useState(false);
  if (fontsLoaded){
    return (
      <Home />
    );
  }else {
    return (
      <AppLoading 
        startAsync={ getFonts}
        onFinish={ () => setFontsLoaded(true)}
    />
    )
  }
  
}

