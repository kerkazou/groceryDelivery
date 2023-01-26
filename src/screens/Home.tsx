import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';
import Header from '../components/Header';

const Home = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate('Login');
    }, 4000);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.home}>
                <Text style={styles.homeText}>Welcom To <Text style={{ fontWeight: 'bold' }}>Grocey Delivery</Text></Text>
                <Text style={styles.homeBtn} onPress={() => navigation.navigate('Login')}>Login</Text>
                <Text style={styles.homeBtn} onPress={() => navigation.navigate('Register')}>Register</Text>
            </View>
        </View>
    );
}

export default Home;