import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import color from '../assets/style/colors';

const Menu = () => {
    const menu = [
        { name: 'home' },
        { name: 'shopping-cart' },
        { name: 'gear' },
        { name: 'power-off' },
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