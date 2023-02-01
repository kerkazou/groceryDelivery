import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Products from '../screens/Products';
import Product from '../screens/Product';

import AppRouter from './App.Router';

const ProductStack = createNativeStackNavigator();

const ProductRouter = () => {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="Products" options={{ headerShown: false }} component={Products} />
            <ProductStack.Screen name="Product" options={{ headerShown: false }} component={Product} />
        </ProductStack.Navigator>
    );
}

export default ProductRouter;