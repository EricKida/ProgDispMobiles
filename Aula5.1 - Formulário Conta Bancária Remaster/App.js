import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './src/pages/Formulario';
import Sobre from './src/pages/respFormulario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Abertura de Conta"
          component={Form}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
