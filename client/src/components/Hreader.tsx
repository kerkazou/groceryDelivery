import React from 'react';
import { View, Image } from 'react-native';

import styles from '../assets/style/styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/grocery.png')} />
        </View>
    );
}

export default Header;