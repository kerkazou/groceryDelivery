import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const Categories = () => {
    const categories = [
        {id: 1, name: 'All'},
        {id: 1, name: 'categorie 1'},
        {id: 2, name: 'categorie 2'},
        {id: 3, name: 'categorie 3'},
    ]

    return (
        <View style={{marginHorizontal: 10, flexDirection: 'row', gap: 8,}}>
            {categories.map((categorie) => (
                <Text style={{color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8}}>{categorie.name}</Text>
            ))}
        </View>
    );
}

export default Categories;