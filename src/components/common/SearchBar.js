import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors } from '../../constants/colors';

/**
 * SearchBar component for filtering content
 * @param {string} value - Current search value
 * @param {function} onChangeText - Function to handle text changes
 * @param {string} placeholder - Placeholder text to show when empty
 */
const SearchBar = ({ 
  value = '', 
  onChangeText = () => {}, 
  placeholder = 'Rechercher...' 
}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.searchBar}
        inputStyle={styles.input}
        iconColor={colors.text.secondary}
        placeholderTextColor={colors.text.disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
  },
  searchBar: {
    elevation: 2,
    backgroundColor: colors.surface,
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
    color: colors.text.primary,
  },
});

export default SearchBar;
