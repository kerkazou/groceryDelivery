import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page from '../screens/Page';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgetPassword from '../screens/ForgetPassword';

const AuthStack = createNativeStackNavigator();

const AuthRouter = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Page" options={{ headerShown: false }} component={Page} />
            <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <AuthStack.Screen name="Register" options={{ headerShown: false }} component={Register} />
            <AuthStack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword} />
        </AuthStack.Navigator>
    );
}

export default AuthRouter;