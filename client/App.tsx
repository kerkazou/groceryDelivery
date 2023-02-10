import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRouter from './src/router/Auth.Router';
import AppRouter from './src/router/App.Router';

import store from './src/redux/store';
import { Provider } from 'react-redux';

const Tab = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen options={{ headerShown: false }} name="Auth" component={AuthRouter} />
          <Tab.Screen options={{ headerShown: false }} name="App" component={AppRouter} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;