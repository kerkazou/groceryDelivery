import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/styles';
import colors from '../assets/style/colors';

const SearchBar = () => {

    return (
        <View style={styles.searchBar}>
            <Icon name='search' size={25} color='#FED049'></Icon>
            <TextInput style={styles.searchBarInput} placeholder='Search' placeholderTextColor={colors.gray} />
        </View>
    );
}

export default SearchBar;