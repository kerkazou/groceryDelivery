import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page from './src/screens/Page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page" options={{ headerShown: false }} component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;