import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Page from '../screens/Page';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Products') {
                            iconName = focused ? 'home' : 'home';
                        }
                        else if (route.name === 'Store') {
                            iconName = focused ? 'shopping-cart' : 'shopping-cart';
                        }
                        else if (route.name === 'Profile') {
                            iconName = focused ? 'gear' : 'gear';
                        }

                        return (
                            <View>
                                <Icon name={iconName} size={size} color={color} />
                            </View>
                        );
                    },
                    tabBarActiveTintColor: color.color1,
                    tabBarInactiveTintColor: color.black,
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 60, },
                })}
            >
                <Tab.Screen options={{ headerShown: false }} name="Products" component={Products} />
                <Tab.Screen options={{ headerShown: false }} name="Store" component={Store} />
                <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;