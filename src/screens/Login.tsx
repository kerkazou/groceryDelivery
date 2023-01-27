import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';
import Header from '../components/Hreader';
import SocialMedia from '../components/SocialMedia';

const Login = ({ navigation }) => {
  return (
    <View style={styles.auth}>
      <View><Header /></View>
      <View style={styles.authcontainer}>
        <Text style={styles.authtexthead}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor={colors.gray} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={colors.gray} secureTextEntry={true} />
        <Text style={styles.authtextbody}>Forget Password ?</Text>
        <Text style={styles.loginBtn} onPress={() => navigation.navigate('Products')}>Login</Text>
        <Text style={styles.authtextbody}>
          I don't have account?
          <Text onPress={() => navigation.navigate('Register')} style={styles.footerbtn}> Register</Text>
        </Text>
        <Text style={styles.authtextbody}>Or</Text>
        <SocialMedia />
      </View>
    </View>
  );
}

export default Login;