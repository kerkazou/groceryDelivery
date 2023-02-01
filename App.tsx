import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import color from './src/assets/style/colors';

import Products from './src/screens/Products';
import Store from './src/screens/Store';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Products') {
              iconName = focused ? 'store' : 'store';
            }
            else if (route.name === 'Store') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'user-cog' : 'user-cog';
            }

            return (
              <Icon name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: color.color1,
          tabBarInactiveTintColor: color.black,
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 60 },
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Products" component={Products} />
        <Tab.Screen options={{ headerShown: false }} name="Store" component={Store} />
        <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;