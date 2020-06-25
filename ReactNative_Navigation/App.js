import React, { Component } from 'react';
import { Button, View } from 'react-native';

import  DrawerContent  from './src/DrawerContent'
import createBottomTabs from './src/createBottomTabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';


const Drawer = createDrawerNavigator();    

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} /> } >
          <Drawer.Screen name="Home" component={createBottomTabs} />

        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
}