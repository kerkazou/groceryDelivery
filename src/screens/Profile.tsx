import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import color from '../../styles';

import Menu from '../components/Menu';

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'column', gap: 25, padding: 20, }}>
        <Text style={{ color: color.color1, fontSize: 25, fontWeight: 'bold', }}>My Account</Text>
        <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Image style={{ width: 150, height: 150, borderRadius: 100, borderColor: color.color1, borderWidth: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} source={require('../assets/images/avatar.png')} />
          <Text style={{ color: color.black, fontSize: 20, fontWeight: 'bold', textAlign: 'center', }}>Username</Text>
        </View>
        <View style={{ flexDirection: 'column', gap: 15 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: color.color1, borderBottomWidth: 3, padding: 5 }}>
            <Text style={{ color: color.black, fontSize: 18, fontWeight: 'bold', }}>Contact Details</Text>
            <Text style={{ backgroundColor: color.black, color: color.color1, borderRadius: 10, fontWeight: 'bold', paddingHorizontal: 25, paddingVertical: 8 }}>Edite</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>Username: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>Username</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>Email: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>Email</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>Phone: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>Phone</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', gap: 15 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: color.color1, borderBottomWidth: 3, padding: 5 }}>
            <Text style={{ color: color.black, fontSize: 18, fontWeight: 'bold', }}>Password Change</Text>
            <Text style={{ backgroundColor: color.black, color: color.color1, borderRadius: 10, fontWeight: 'bold', paddingHorizontal: 25, paddingVertical: 8 }}>Edite</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>Password: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>Password</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>New: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>New</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: color.black, fontSize: 15, }}>Confirm: </Text>
            <Text style={{ width: '70%', color: color.black, fontWeight: 'bold', fontSize: 15, }}>Confirm</Text>
          </View>
        </View>
      </View>
      <Menu />
    </View >
  );
}

export default Profile;