import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../../constants/styles';
import { mockProviders, mockServices } from '../../data/mockData';
import ServiceCard from '../../components/service/ServiceCard';
import CategoryButton from '../../components/common/CategoryButton';
import SearchBar from '../../components/common/SearchBar';

export default function Home({ navigation }) {
  const [providers, setProviders] = useState(mockProviders);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = providers.filter(provider => {
    const matchesCategory = !selectedCategory || provider.service.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = !searchQuery || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      provider.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Rechercher un service..."
      />
      
      <View style={{ height: 100 }}>
        <FlatList
          data={mockServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryButton
              title={item.name}
              icon={item.icon}
              active={selectedCategory === item.name}
              onPress={() => setSelectedCategory(selectedCategory === item.name ? null : item.name)}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      
      <FlatList
        data={filteredProviders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard 
            provider={item} 
            onPress={() => navigation.navigate('ServiceDetail', { provider: item })}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      />
    </View>
  );
}