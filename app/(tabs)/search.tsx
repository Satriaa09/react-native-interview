import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../style';

const SearchComponent: React.FC = () => {
  return (
    <View style={styles.containerSearch}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.iconContainerSearch}>
          <Image source={require('../../img/search.png')} style={styles.iconSearch} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchComponent;
