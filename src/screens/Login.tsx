import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';
import Header from '../components/Header';

const Authentification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.login}>
                <Text style={styles.greeting}>Login</Text>
                <View style={styles.loginApi}>
                    <View style={styles.loginApiBtn}><Icon name="facebook" size={20} ></Icon></View>
                    <View style={styles.loginApiBtn}><Icon name="google" size={20} ></Icon></View>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Or</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <Text style={styles.textForget}>Forget Password ?</Text>
                <Text style={styles.loginBtn}>Login</Text>
                <Text style={styles.textForget}>
                    I don't have account?
                    <Text onPress={() => navigation.navigate('Register')} style={styles.footerbtn}> Register</Text>
                </Text>
            </View>
        </View>
    );
}

export default Authentification;