import React, { Component } from 'react';
import { Button, View } from 'react-native';

import Feed from './src/feed'
import Detail from './src/details'

import Screen1 from './src/screens/drawers/screen1';
import Screen2 from './src/screens/drawers/screen2';
import Screen3 from './src/screens/drawers/screen3';

// import Tab1 from './src/screens/tabs/Tab1';
// import Tab2 from './src/screens/tabs/Tab2';
// import Tab3 from './src/screens/tabs/Tab3';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={navigation.openDrawer}
//         title="Open navigation drawer"
//       />
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={navigation.openDrawer}
//         title="Open navigation drawer"
//       />
//       <Button
//         onPress={() => navigation.goBack()}
//         title="Go back home"
//       />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();

// function createHomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Feed" component={Feed} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   )
// }
    

export default class App extends Component {
  render() {

    
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Feed} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favourites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
}