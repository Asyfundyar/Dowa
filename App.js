import React from 'react';

import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './app/screens/Landing';
import HomeScreen from './app/screens/Home';
 
const RootStack = createStackNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#white',
    accent: '#black',
  },
};

const App = () => {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Dowa" component={LandingScreen} />
            <RootStack.Screen name="Home" component={HomeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
};

export default App;