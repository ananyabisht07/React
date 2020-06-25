import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/drawers/HomeScreen'
import DetailsScreen from './screens/drawers/DetailsScreen'

const Stack = createStackNavigator();

export default function createHomeStack({navigation}) {
    return (
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign:"center"
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
            <Ionicons name="md-menu" size={34}  
            onPress={ () => navigation.openDrawer() }
            />
          )
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    )
  }
// <Stack.Screen name="Top Tabs" children={createTopTabs} />
// <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
  
// function createTopTabs() {
//     return (
//       <MaterialTopTabs.Navigator>
//         <MaterialTopTabs.Screen name="Tab 1" component={Tab1} />
//         <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
//         <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
//       </MaterialTopTabs.Navigator>
//     )
//   }
//   function createBottomTabs() {
//     return (
//       <MaterialBottomTabs.Navigator>
//         <MaterialTopTabs.Screen name="Tab 1" component={Tab1} />
//         <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
//         <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
//       </MaterialBottomTabs.Navigator>
//     )
//   }
  