import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../../styles';

const Register = () => {
  return (
    <View style={styles.register}>
      <Text style={styles.greeting}>Regester</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      <Text style={styles.loginBtn}>Register</Text>
    </View>
  );
}

export default Register;