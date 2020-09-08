import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import HomeNavigator from '../home/HomeNavigator';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="HomeScreens" component={HomeNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
