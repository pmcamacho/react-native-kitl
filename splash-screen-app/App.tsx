import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Intro } from './app/screens/Intro';
import { Login } from './app/screens/Login';
import { Main } from './app/screens/Main';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Intro'>
        <Stack.Screen name='Intro' component={Intro} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Login' component={Login} options={{ headerLeft: () => null }}></Stack.Screen>
        <Stack.Screen name='Main' component={Main} options={{ headerLeft: () => null }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
