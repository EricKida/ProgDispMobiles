import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Details from './src/components/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Início',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#FFF',
            headerShown: false,
          }}
        />
              <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Início',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#FFF',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
