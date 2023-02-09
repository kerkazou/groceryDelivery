import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const Input = (props) => {
    const icons = [
        { name: 'username', icon: 'user' },
        { name: 'email', icon: 'email' },
        { name: 'password', icon: 'password' },
    ]

    return (
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 15, borderBottomColor: colors.black, borderBottomWidth: 8, }}>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={colors.black}
                secureTextEntry={(props.type === 'password') ? true : false}
                style={{ width: '100%', height: 50, fontSize: 18, }}
            />
            <Icon name="user" size={20} color={colors.black} ></Icon>
        </View>
    );
}

export default Input;