import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Exercise, ExerciseList, TimerSetup, Countdown } from './screens'

const Stack = createStackNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route, navigation }) => ({
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
          })}
        >
          <Stack.Screen 
            name="Упражнения" 
            component={ExerciseList} 
          />
          <Stack.Screen 
            name="Упражнение" 
            component={Exercise}
            options={({route}) => ({
              title: route.params.title
            })}
          />
          <Stack.Screen 
            name="Установка таймера" 
            component={TimerSetup} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }