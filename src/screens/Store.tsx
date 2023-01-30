import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Menu from '../components/Menu';

import color from '../assets/style/colors';
import styles from '../assets/style/styles';

const Store = ({ navigation }) => {
  const [mystore, setMystore] = useState([
    { id: 1, title: 'Produit 1', image: 'grocery.png', price: 100, quantite: 2 },
    { id: 2, title: 'Produit 2', image: 'grocery.png', price: 200, quantite: 1 },
    { id: 3, title: 'Produit 3', image: 'grocery.png', price: 300, quantite: 5 },
    { id: 4, title: 'Produit 4', image: 'grocery.png', price: 400, quantite: 1 },
  ])

  const [totale, setTotale] = useState(0)
  useEffect(() => {
    var e = 0;
    mystore.forEach(produit => {
      e += (produit.price * produit.quantite)
      setTotale(e)
    });
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'column', gap: 20, padding: 15, }}>
        <View>
          <Text style={{ color: color.color1, fontWeight: 'bold', fontSize: 25, }}>Store</Text>
        </View>
        <ScrollView>
          <View style={{ gap: 10, }}>
            {mystore.map((produit, i) => (
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', gap: 25, backgroundColor: color.white, padding: 10, borderRadius: 10, position: 'relative' }}>
                <Image style={{ width: '20%', height: 100 }} source={require('../assets/images/grocery.png')} />
                <View>
                  <Text style={{ color: color.black, fontSize: 20, fontWeight: 'bold' }}>{produit.title}</Text>
                  <Text style={{ color: color.black, fontSize: 15, }}>Quantite: {produit.quantite}</Text>
                  <Text style={{ color: color.black, fontSize: 15, }}>Price Total: {produit.price * produit.quantite} DH</Text>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0, padding: 8 }}>
                  <Icon name='close' size={20} color={color.black} onPress={() => { mystore.splice(i, 1) }}></Icon>
                </View>
              </View>
            ))}
            <View style={{ flex: 1, height: 2, backgroundColor: color.black, margin: 10 }}></View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ color: color.black, fontSize: 18, fontWeight: 'bold' }}>Totale payement: </Text>
              <Text style={{ color: color.black, fontSize: 18, fontWeight: 'bold' }}>{totale} DH</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.authHomeBtn}>Pay Now</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Menu />
    </View >
  );
}

export default Store;