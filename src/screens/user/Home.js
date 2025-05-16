import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { mockProviders, mockCategories } from '../../data/mockData';
import ServiceCard from '../../components/service/ServiceCard';
import CategoryButton from '../../components/common/CategoryButton';
import SearchBar from '../../components/common/SearchBar';

export default function Home({ navigation }) {
  const [providers, setProviders] = useState(mockProviders || []);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = providers.filter(provider => {
    if (!provider) return false;

    const categoryName = provider.category || '';
    const businessName = provider.businessName || '';
    const searchQueryLower = searchQuery.toLowerCase();
    const selectedCategoryLower = selectedCategory ? selectedCategory.toLowerCase() : '';

    const matchesCategory = !selectedCategory || 
      categoryName.toLowerCase().includes(selectedCategoryLower);

    const matchesSearch = !searchQuery || 
      businessName.toLowerCase().includes(searchQueryLower) || 
      categoryName.toLowerCase().includes(searchQueryLower);

    return matchesCategory && matchesSearch;
  });

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const handleServicePress = (provider) => {
    navigation.navigate('ServiceDetail', { provider });
  };

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Rechercher un service..."
      />
      
      <View style={styles.categoriesContainer}>
        <FlatList
          data={mockCategories || []}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <CategoryButton
              title={item.name || ''}
              icon={item.icon || 'briefcase'}
              active={selectedCategory === item.name}
              onPress={() => handleSelectCategory(item.name)}
            />
          )}
          contentContainerStyle={styles.categoriesList}
        />
      </View>
      
      <FlatList
        data={filteredProviders}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <ServiceCard 
            provider={item} 
            onPress={() => handleServicePress(item)}
          />
        )}
        contentContainerStyle={styles.servicesList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriesContainer: {
    height: 100,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  servicesList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
