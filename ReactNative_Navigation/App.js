import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {AuthContext} from './components/context'

import  DrawerContent  from './src/DrawerContent'
import createBottomTabs from './src/createBottomTabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import BookmarkScreen from './src/BookmarkScreen'
import SettingScreen from './src/SettingScreen'
import SupportScreen from './src/SupportScreen'
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper'

const Drawer = createDrawerNavigator();    
// const [isDarkTheme, setDarkTheme] = React.useState(false)

// const CustomDefaultTheme = {
//   ...NavigationDefaultTheme,
//   ...PaperDefaultTheme,
//   color: {
//     ...NavigationDefaultTheme.colors,
//     ...PaperDefaultTheme.colors
//   }
// }

// const CustomDarkTheme = {
//   ...NavigationDarkTheme,
//   ...PaperDarkTheme,
//   color: {
//     ...NavigationarktTheme.colors,
//     ...PaperDarkTheme.colors
//   }
// }

// const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

// const authContext = React.useMemo( () => ({
//   toggleTheme: () => {
//     setDarkTheme(isDarkTheme => !isDarkTheme);
//   }
// }), [] );


// export default class App extends Component {
  

//   render() {
//     return (
//       <PaperProvider theme={theme}>
//         <NavigationContainer theme={theme} >
//           <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} /> } >
//             <Drawer.Screen name="Home" component={createBottomTabs} />
//             <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
//             <Drawer.Screen name="Settings" component={SettingScreen} />
//             <Drawer.Screen name="Support" component={SupportScreen} />
//           </Drawer.Navigator>
//         </NavigationContainer>
//       </PaperProvider>
//     );
//   }
  
// }

export default function App () {
  const [isDarkTheme, setDarkTheme] = React.useState(false)

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo( () => ({
    toggleTheme: () => {
      setDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), [] );
  
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme} >
        <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} /> } >
          <Drawer.Screen name="Home" component={createBottomTabs} />
          <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
          <Drawer.Screen name="Settings" component={SettingScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}


