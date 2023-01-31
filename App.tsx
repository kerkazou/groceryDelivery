import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page from './src/screens/Page';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Products from './src/screens/Products';
import Product from './src/screens/Product';
import Profile from './src/screens/Profile';
import Store from './src/screens/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page" options={{ headerShown: false }} component={Page} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="Products" options={{ headerShown: false }} component={Products} />
        <Stack.Screen name="Product" options={{ headerShown: false }} component={Product} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name="Store" options={{ headerShown: false }} component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;