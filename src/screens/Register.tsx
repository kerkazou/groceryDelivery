import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';
import Header from '../components/Hreader';
import SocialMedia from '../components/SocialMedia';

const Register = ({ navigation }) => {
  return (
    <View style={styles.auth}>
      <View><Header /></View>
      <View style={styles.authcontainer}>
        <Text style={styles.authtexthead}>Register</Text>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor={colors.gray} />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor={colors.gray} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={colors.gray} secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor={colors.gray} secureTextEntry={true} />
        <Text style={styles.authtextbody}>Forget Password ?</Text>
        <Text style={styles.loginBtn} onPress={() => navigation.navigate('Product')}>Login</Text>
        <Text style={styles.authtextbody}>
          I have account?
          <Text onPress={() => navigation.navigate('Login')} style={styles.footerbtn}> Login</Text>
        </Text>
        <Text style={styles.authtextbody}>Or</Text>
        <SocialMedia />
      </View>
    </View>
  );
}

export default Register;