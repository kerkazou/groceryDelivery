import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';

const SocialMedia = () => {
    return (
        <View style={styles.loginApi}>
            <View style={styles.loginApiBtn}><Icon name="facebook" size={20} color='#fff' ></Icon></View>
            <View style={styles.loginApiBtn}><Icon name="google" size={20} color='#fff' ></Icon></View>
        </View>
    );
}

export default SocialMedia;