import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../styles';

import Products from '../screens/Products';
import Store from '../screens/Store';
import Profile from '../screens/Profile';

const AppTab = createBottomTabNavigator();

const AppRouter = () => {
    return (
        <AppTab.Navigator
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

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: color.color1,
                tabBarInactiveTintColor: color.black,
                tabBarShowLabel: true,
                tabBarLabelStyle: { paddingBottom: 10, },
                tabBarStyle: { padding: 10, height: 60, },
            })}
        >
            <AppTab.Screen options={{ headerShown: false }} name="Products" component={Products} />
            <AppTab.Screen options={{ headerShown: false }} name="Store" component={Store} />
            <AppTab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        </AppTab.Navigator>
    );
}

export default AppRouter;