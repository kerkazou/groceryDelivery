import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';

import color from '../../styles';
import styles from '../assets/style/styles';

import Menu from '../components/Menu';

const Product = ({ navigation }) => {
  const [produit, setProduit] = useState({ price: 100, quantite: 1 })

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, padding: 20, }}>
        <Image source={require('../assets/images/grocery.png')} />
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: color.black, fontSize: 20, }}>Title</Text>
          <Text style={{ color: color.black, fontSize: 20, }}>{produit.price} DH</Text>
        </View>
        <Text style={{ color: color.black, }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda eos suscipit, earum ducimus quam itaque accusamus soluta voluptatibus, harum maiores esse ratione architecto! Saepe quae unde minus? Vero, eaque.
        </Text>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <View style={{ flexDirection: 'row', gap: 10, }}>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: color.color1, borderRadius: 5, }}>
              <Text style={{ color: color.black, fontSize: 20, }} onPress={() => { setProduit({ ...produit, quantite: produit.quantite - 1 }) }}>-</Text>
            </View>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: color.color1, borderRadius: 5, }}>
              <Text style={{ color: color.black, fontSize: 20, }}>{produit.quantite}</Text>
            </View>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: color.color1, borderRadius: 5, }}>
              <Text style={{ color: color.black, fontSize: 20, }} onPress={() => { setProduit({ ...produit, quantite: produit.quantite + 1 }) }}>+</Text>
            </View>
          </View>
          <Text style={{ color: color.black, fontSize: 20, }}>Total: {produit.price * produit.quantite}</Text>
        </View>
        <Text style={styles.loginBtn} onPress={() => navigation.navigate('Store')}>Add</Text>
      </View>
      <Menu />
    </View>
  );
}

export default Product;