import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {  Text, View } from 'react-native'
import * as Font from 'expo-font';
import Home from './screens/home'
//import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

// const getFonts = () => {
//   return Font.loadAsync({
//     'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
//   })
// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   const [fontsLoaded, setFontsLoaded]= useState(false);
//   if (fontsLoaded){
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//      </NavigationContainer>
//     );
//   }else {
//     return (
//       <AppLoading 
//         startAsync={ getFonts}
//         onFinish={ () => setFontsLoaded(true)}
//     />
//     )
//   }
  
//}

