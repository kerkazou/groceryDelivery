import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/style/colors';

import styles from '../assets/style/styles';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import s from '../../styles';

const Products = ({ navigation }) => {

  const produits = [
    { id: 1, title: 'Product_1', image: '', price: 200, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Product_2', image: '', price: 300, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 3, title: 'Product_3', image: '', price: 100, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 4, title: 'Product_4', image: '', price: 20, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 5, title: 'Product_5', image: '', price: 3000, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 6, title: 'Product_6', image: '', price: 100, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 7, title: 'Product_7', image: '', price: 30, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  ]

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Categories />
      <ScrollView>
        <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, padding: 20, }}>
          {produits.map((produit) => (
            <View style={{ width: 160, height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 12 }}>
              <Text>{produit.image}</Text>
              <Text onPress={() => navigation.navigate('Product', { produit })}>{produit.title}</Text>
              <Text>{produit.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Menu />
    </View >
  );
}

export default Products;