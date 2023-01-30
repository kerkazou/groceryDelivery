import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';

import color from '../../styles';
import styles from '../assets/style/styles';

import Menu from '../components/Menu';

const Product = ({ route, navigation }) => {
  const [produit, setProduit] = useState(route.params.produit)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, }}>
        <Image style={{ width: '100%', height: 350 }} source={produit.image} />
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
          <Text style={{ color: color.black, fontSize: 30, }}>{produit.title}</Text>
          <Text style={{ color: color.black, fontSize: 20, }}>{produit.price} DH</Text>
        </View>
        <Text style={{ color: color.black, paddingHorizontal: 20, }}>{produit.discruption}</Text>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
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
        <Text style={styles.loginBtn} onPress={() => navigation.navigate('Store')}>Add to store</Text>
        <Text style={{ color: 'red' }}>Notice: The price is for one kilogram</Text>
      </View>
      <Menu />
    </View>
  );
}

export default Product;