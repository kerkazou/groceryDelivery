import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Page from '../screens/Page';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createNativeStackNavigator();

const AuthRouter = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="Page" options={{ headerShown: false }} component={Page} />
                <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <AuthStack.Screen name="Register" options={{ headerShown: false }} component={Register} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthRouter;