import React from 'react';
import { Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../redux/features/index';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, backgroundColor: colors.color1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ width: '140%', flex: 1, backgroundColor: colors.white, transform: [{ rotate: '-15deg' }], marginTop: -50, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: colors.color1, transform: [{ rotate: '15deg' }], }}>Login</Text>
      </View>
      <View style={{ width: '80%', flex: 3, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <Input placeholder="Email" type='email' />
        <Input placeholder="Password" type='password' />
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: 18, color: colors.black, textDecorationLine: 'underline', }} onPress={() => navigation.navigate('ForgetPassword')}>Forget Password ?</Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.black, textDecorationLine: 'underline', }} onPress={() => navigation.navigate('Register')}>Register</Text>
          <Text style={{ width: 100, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: colors.color1, backgroundColor: colors.black, paddingVertical: 8, borderRadius: 8 }} onPress={() => { dispatch(LOGIN_SUCCESS()), navigation.navigate('App') }}>Login</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
          <Text style={{ width: '45%', height: 3, backgroundColor: colors.black }}></Text>
          <Text style={styles.authtextbody}>Or</Text>
          <Text style={{ width: '45%', height: 3, backgroundColor: colors.black }}></Text>
        </View>
        <SocialMedia />
      </View>
    </View>
  );
}

export default Login;