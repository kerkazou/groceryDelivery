import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useSelector } from 'react-redux';

import colors from '../assets/style/colors';
import ProductRouter from './Product.Router';
import Store from '../screens/Store';
import Profile from '../screens/Profile';

const AppTab = createBottomTabNavigator();

const AppRouter = () => {
    const Auth = useSelector((state) => state.Auth)
    console.log(Auth)

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
                tabBarActiveTintColor: colors.color1,
                tabBarInactiveTintColor: colors.black,
                tabBarShowLabel: true,
                tabBarLabelStyle: { paddingBottom: 10, },
                tabBarStyle: { padding: 10, height: 60, },
            })}
        >
            <AppTab.Screen options={{ headerShown: false }} name="Products" component={ProductRouter} />
            <AppTab.Screen options={{ headerShown: false }} name="Store" component={Store} />
            <AppTab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        </AppTab.Navigator>
    );
}

export default AppRouter;