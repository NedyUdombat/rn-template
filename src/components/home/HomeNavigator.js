import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MeditationStartScreen from './MeditationStartScreen';
import MeditationReadingScreen from './MeditationReadingScreen';
import MeditationReflectionScreen from './MeditationReflectionScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
    <Stack.Screen
      name="MeditationStartScreen"
      component={MeditationStartScreen}
    />
    <Stack.Screen
      name="MeditationReadingScreen"
      component={MeditationReadingScreen}
    />
    <Stack.Screen
      name="MeditationReflectionScreen"
      component={MeditationReflectionScreen}
    />
  </Stack.Navigator>
);
