import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../../styles';
import Header from '../components/Header';

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.register}>
                <Text style={styles.greeting}>Register</Text>
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
                <Text style={styles.loginBtn}>Register</Text>
                <Text style={styles.textForget}>
                    I have account?
                    <Text onPress={() => navigation.navigate('Login')} style={styles.footerbtn}> Login</Text>
                </Text>
            </View>
        </View>
    );
}

export default Register;