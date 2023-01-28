// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from './Login';
// import Register from './Register';

// const Tab = createNativeStackNavigator();

// const Test = () => {

//     return (
//         <View>
//             <NavigationContainer>
//                 <Tab.Navigator
//                     screenOptions={({ route }) => ({
//                         tabBarIcon: ({ focused, size, color }) => {
//                             let iconName;
//                             if (route.name === 'Login') {
//                                 iconName = 'home'
//                             } else if (route.name === 'Register') {
//                                 iconName = 'home'
//                             }
//                             return (
//                                 <Icon
//                                     name={iconName}
//                                 />
//                             )
//                         }
//                     })}
//                 >
//                     <Tab.Screen
//                         name='Login'
//                         component={Login}
//                     />
//                     <Tab.Screen
//                         name='Register'
//                         component={Register}
//                     />
//                 </Tab.Navigator>
//             </NavigationContainer>
//         </View>
//     );
// }

// export default Test;