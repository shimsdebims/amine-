import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

const CategoryButton = ({ title, icon, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active && styles.activeButton
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={active ? colors.category.textActive : colors.category.textInactive}
      />
      <Text style={[
        styles.text,
        active && styles.activeText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: colors.category.inactive,
    minWidth: 100,
    elevation: 2,
  },
  activeButton: {
    backgroundColor: colors.category.active,
  },
  text: {
    marginTop: 4,
    fontSize: 12,
    color: colors.category.textInactive,
    textAlign: 'center',
  },
  activeText: {
    color: colors.category.textActive,
    fontWeight: '500',
  },
});

export default CategoryButton;

