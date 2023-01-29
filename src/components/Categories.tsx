import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const Categories = () => {

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 60, margin: 8, flexDirection: 'row', gap: 8, }}>
                <Text style={{ height: 40, color: colors.black, backgroundColor: colors.white, padding: 10, borderRadius: 8 }}>All</Text>
                <Text style={{ height: 40, color: colors.black, backgroundColor: colors.white, padding: 10, borderRadius: 8 }}>categorie 1</Text>
                <Text style={{ height: 40, color: colors.black, backgroundColor: colors.white, padding: 10, borderRadius: 8 }}>categorie 2</Text>
                <Text style={{ height: 40, color: colors.black, backgroundColor: colors.white, padding: 10, borderRadius: 8 }}>categorie 3</Text>
                <Text style={{ height: 40, color: colors.black, backgroundColor: colors.white, padding: 10, borderRadius: 8 }}>categorie 4</Text>
            </View>
        </ScrollView>
    );
}

export default Categories;