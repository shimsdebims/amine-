import React from 'react';
import { View, Picker, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';

export default function FilterBar({
  selectedFilter,
  onFilterChange,
  onFilterPress,
  filterOptions = [
    { label: 'Trier par', value: '' },
    { label: 'Note la plus haute', value: 'rating_high' },
    { label: 'Prix (bas-haut)', value: 'price_low' },
    { label: 'Prix (haut-bas)', value: 'price_high' },
    { label: 'Proximité', value: 'distance' },
  ],
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Picker
          selectedValue={selectedFilter}
          onValueChange={onFilterChange}
          style={{ height: 40 }}
          mode="dropdown"
        >
          {filterOptions.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        onPress={onFilterPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          backgroundColor: colors.lightGray,
          borderRadius: 8,
        }}
      >
        <Text style={{ marginRight: 5 }}>Filtres</Text>
        <Icon name="filter-list" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}