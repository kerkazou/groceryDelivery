import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import color from '../assets/style/colors';
import { useNavigation } from '@react-navigation/native';

const menu = [
    { id: 1, name: 'home', page: 'Products' },
    { id: 2, name: 'shopping-cart', page: 'Store' },
    { id: 3, name: 'gear', page: 'Profile' },
    { id: 4, name: 'power-off', page: 'Page' },
]

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menu}>
            {menu.map((menu, i) => (
                <Icon name={menu.name} size={30} color={color.color1} onPress={() => { navigation.navigate(menu.page) }} key={i}></Icon>
            ))}
        </View >
    );
}

export default Menu;