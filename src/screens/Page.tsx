import React from 'react';
import { View, Text } from 'react-native';

import styles from '../assets/style/styles';
import Header from '../components/Hreader';

const Page = ({ navigation }) => {
  return (
    <View style={styles.auth}>
      <View><Header /></View>
      <View>
        <Text style={styles.authHomeText}>Welcom To</Text>
        <Text style={styles.authHomeText}>Grocey Delivery</Text>
      </View>
      <View style={{ gap: 10 }}>
        <Text style={styles.authHomeBtn} onPress={() => navigation.navigate('Login')}>Login</Text>
        <Text style={styles.authHomeBtn} onPress={() => navigation.navigate('Register')}>Register</Text>
      </View>
    </View>
  );
}

export default Page;