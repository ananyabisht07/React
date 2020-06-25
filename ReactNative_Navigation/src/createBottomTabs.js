import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// MaterialTopTabs
import createHomeStack from './createHomeStack'
import DetailsScreen from './screens/drawers/DetailsScreen'
import ExploreScreen from './screens/drawers/ExploreScreen'
import ProfileScreen from './screens/drawers/ProfileScreen'


const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default function createBottomTabs() {
        return (
            <MaterialBottomTabs.Navigator 
                initialRouteName="Home" 
                activeColor="#fff"
            >
            <MaterialBottomTabs.Screen 
                name="Home" 
                component={createHomeStack} 
                options={{
                    tabBarLabel:'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: () => (
                        <Ionicons name="ios-home" size={30} />
                    )
                }} 
            />
            
            <MaterialBottomTabs.Screen 
                name="Notifications" 
                component={DetailsScreen} 
                options={{
                    tabBarLabel:'Updates',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: () => (
                        <Ionicons name="md-notifications" size={29} />
                    )
                }} 
            />

            <MaterialBottomTabs.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarLabel:'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: () => (
                        <Ionicons name="ios-person" size={29} />
                    )
                }} 
            />

            <MaterialBottomTabs.Screen 
                name="Explore" 
                component={ExploreScreen} 
                options={{
                    tabBarLabel:'Explore',
                    tabBarColor: '#d02860',
                    tabBarIcon: () => (
                        <Ionicons name="ios-aperture" size={29} />
                    )
                }} 
            />
          </MaterialBottomTabs.Navigator>
        )
      }
