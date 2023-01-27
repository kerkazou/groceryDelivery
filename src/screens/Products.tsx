import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/style/colors';

import styles from '../assets/style/styles';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Categories from '../components/Categories';

const Products = () => {

  const produits = [
    { id: 1, title: 'Product_1', image: '', price: 200, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Product_2', image: '', price: 300, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Product_2', image: '', price: 300, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Product_2', image: '', price: 300, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Product_2', image: '', price: 300, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
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
              <Text>{produit.title}</Text>
              <Text>{produit.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
}

export default Products;