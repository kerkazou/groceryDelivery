import React from 'react';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const SocialMedia = () => {
    return (
        <View style={styles.loginApi}>
            <View style={styles.loginApiBtn}><Icon name="facebook" size={20} color={colors.color1} ></Icon></View>
            <View style={styles.loginApiBtn}><Icon name="google" size={20} color={colors.color1} ></Icon></View>
        </View>
    );
}

export default SocialMedia;