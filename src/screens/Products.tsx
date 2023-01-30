import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/style/colors';

import styles from '../assets/style/styles';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import s from '../../styles';

const Products = ({ navigation }) => {

  const produits = [
    { id: 1, title: 'Apple', categorie: 'Fruits', image: require('../assets/images/apple.jpg'), price: 20, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, title: 'Avoca', categorie: 'Fruits', image: require('../assets/images/avoca.jpg'), price: 30, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 3, title: 'Banana', categorie: 'Fruits', image: require('../assets/images/banana.jpg'), price: 10, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 4, title: 'Grapes', categorie: 'Fruits', image: require('../assets/images/grapes.jpg'), price: 20, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 5, title: 'Strawberries', categorie: 'Fruits', image: require('../assets/images/strawberries.jpg'), price: 8, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 6, title: 'Watermelon', categorie: 'Fruits', image: require('../assets/images/watermelon.jpg'), price: 10, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },

    { id: 7, title: 'Potatoe', categorie: 'Vegetables', image: require('../assets/images/potatoe.jpg'), price: 10, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 8, title: 'Tomatoe', categorie: 'Vegetables', image: require('../assets/images/tomatoe.jpg'), price: 12, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 9, title: 'Pepper', categorie: 'Vegetables', image: require('../assets/images/pepper.jpg'), price: 8, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 10, title: 'Eggplant', categorie: 'Vegetables', image: require('../assets/images/eggplant.jpg'), price: 11, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 11, title: 'Onion', categorie: 'Vegetables', image: require('../assets/images/onion.jpg'), price: 13, quantite: 1, discruption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  ]

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Categories />
      <ScrollView>
        <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, padding: 20, }}>
          {produits.map((produit) => (
            <View style={{ width: 160, minHeight: 200, alignItems: 'center', backgroundColor: colors.white, borderRadius: 12, shadowColor: colors.black, elevation: 1, }}>
              <Image style={{ width: '100%', height: 130, borderTopLeftRadius: 12, borderTopRightRadius: 12, }} source={produit.image} />
              <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 10, shadowColor: colors.black, elevation: 3, padding: 10 }}>
                <Text style={{ color: colors.black, fontSize: 10 }}>{produit.categorie}</Text>
                <Text style={{ color: colors.black, fontSize: 20 }} onPress={() => navigation.navigate('Product', { produit })}>{produit.title}</Text>
                <View style={{ width: 140, flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Text style={{ color: colors.black, fontSize: 15, fontWeight: 'bold' }}>{produit.price} DH</Text>
                  <Icon name="shopping-cart" size={20} color={colors.black} ></Icon>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Menu />
    </View >
  );
}

export default Products;