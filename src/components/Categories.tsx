import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const Categories = () => {

    return (
        <ScrollView>
            <View style={{ margin: 10, flexDirection: 'row', gap: 8, }}>
                <Text style={{ color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8 }}>All</Text>
                <Text style={{ color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8 }}>categorie 1</Text>
                <Text style={{ color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8 }}>categorie 2</Text>
                <Text style={{ color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8 }}>categorie 3</Text>
                <Text style={{ color: colors.black, backgroundColor: colors.white, padding: 8, borderRadius: 8 }}>categorie 4</Text>
            </View>
        </ScrollView>
    );
}

export default Categories;