import React, { Component } from 'react';
import { Button, View } from 'react-native';

//import createHomeStack from './src/createHomeStack'
import createBottomTabs from './src/createBottomTabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



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
//const MaterialTopTabs = createMaterialTopTabNavigator();



// <Drawer.Screen name="Contacts" component={Screen1} />
// <Drawer.Screen name="Favourites" component={Screen2} />
// <Drawer.Screen name="Settings" component={Screen3} />
    

export default class App extends Component {
  render() {

    
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={createBottomTabs} />

        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
}