import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../assets/style/styles';

const Header = () => {
    return (
        <View style={styles.hreder}>
            <Image source={require('../assets/images/grocery.png')} />
        </View>
    );
}

export default Header;