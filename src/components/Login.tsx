import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../../styles';

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.greeting}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Text style={styles.textForget}>Forget Password ?</Text>
      <Text style={styles.loginBtn}>Login</Text>
    </View>
  );
}

export default Login;