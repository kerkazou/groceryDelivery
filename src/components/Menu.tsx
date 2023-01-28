import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import color from '../assets/style/colors';

const Menu = () => {
    const menu = [
        { name: 'home', page: 'Products' },
        { name: 'shopping-cart', page: 'Store' },
        { name: 'gear', page: 'Profile' },
        { name: 'power-off', page: 'Page' },
    ]

    return (
        <View style={styles.menu}>
            {menu.map((menu) => (
                <Icon name={menu.name} size={30} color={color.color1}></Icon>
            ))}
        </View>
    );
}

export default Menu;