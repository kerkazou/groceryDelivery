import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../styles';


const Header = () => {
    return (
        <View style={styles.hreder}>
            <Image source={require('../assets/images/grocery.png')} />
        </View>
    );
}

export default Header;