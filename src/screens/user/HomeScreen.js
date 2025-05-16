import React, { useState } from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Searchbar, Card, Title, Paragraph, Button, Chip, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Categories with icons like Alipay
const categories = [
  { id: '1', name: 'Nettoyage', icon: 'broom' },
  { id: '2', name: 'Plomberie', icon: 'water-pump' },
  { id: '3', name: 'Électricité', icon: 'lightning-bolt' },
  { id: '4', name: 'Jardinage', icon: 'flower' },
  { id: '5', name: 'Peinture', icon: 'format-paint' },
  { id: '6', name: 'Menuiserie', icon: 'hammer' },
  { id: '7', name: 'Climatisation', icon: 'air-conditioner' },
  { id: '8', name: 'Déménagement', icon: 'truck' },
];

// Mock services data
const mockServices = [
  {
    id: '1',
    name: 'Amina Ouédraogo Services de Nettoyage',
    category: 'Nettoyage',
    description: 'Professionnelle du nettoyage avec 5 ans d\'expérience.',
    price: '2500 FCFA/heure',
    rating: 4.8,
    ordersCompleted: 156,
    imageUrl: null,
    available: true
  },
  {
    id: '2',
    name: 'Issa Diarra Plomberie',
    category: 'Plomberie',
    description: 'Plombier qualifié avec 8 ans d\'expérience.',
    price: '5000 FCFA/intervention',
    rating: 4.5,
    ordersCompleted: 83,
    imageUrl: null,
    available: true
  },
  {
    id: '3',
    name: 'Électricité Konaté',
    category: 'Électricité',
    description: 'Services d\'installation et réparation électrique.',
    price: '3500 FCFA/heure',
    rating: 4.7,
    ordersCompleted: 127,
    imageUrl: null,
    available: true
  }
];

const CategoryButton = ({ item, selected, onPress }) => (
  <Chip
    style={[styles.categoryChip, selected && styles.selectedCategoryChip]}
    textStyle={[styles.categoryText, selected && styles.selectedCategoryText]}
    onPress={() => onPress(item)}
    icon={({ size, color }) => (
      <MaterialCommunityIcons name={item.icon} size={size} color={color} />
    )}
  >
    {item.name}
  </Chip>
);

const ServiceCard = ({ item, onPress }) => (
  <Card style={styles.card} onPress={onPress}>
    <Card.Content>
      <View style={styles.cardHeader}>
        <Avatar.Icon size={40} icon={categories.find(c => c.name === item.category)?.icon || 'briefcase'} />
        <View style={styles.cardHeaderText}>
          <Title>{item.name}</Title>
          <Paragraph style={styles.category}>{item.category}</Paragraph>
        </View>
      </View>
      <Paragraph>{item.description}</Paragraph>
      <View style={styles.cardFooter}>
        <View>
          <Paragraph style={styles.price}>{item.price}</Paragraph>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={16} color="#FFC107" />
            <Paragraph style={styles.rating}>{item.rating} ({item.ordersCompleted} services)</Paragraph>
          </View>
        </View>
        <Button mode="contained" onPress={() => {}}>
          Réserver
        </Button>
      </View>
    </Card.Content>
  </Card>
);

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher un service..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            item={category}
            selected={selectedCategory?.id === category.id}
            onPress={(category) => setSelectedCategory(
              selectedCategory?.id === category.id ? null : category
            )}
          />
        ))}
      </ScrollView>

      <FlatList
        data={filteredServices}
        renderItem={({ item }) => (
          <ServiceCard 
            item={item} 
            onPress={() => navigation.navigate('ServiceDetail', { service: item })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
    elevation: 4,
  },
  categoriesContainer: {
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  categoryChip: {
    margin: 4,
    backgroundColor: '#fff',
  },
  selectedCategoryChip: {
    backgroundColor: '#FF7F50',
  },
  categoryText: {
    color: '#666',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  cardHeaderText: {
    marginLeft: 12,
    flex: 1,
  },
  category: {
    color: '#666',
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FF7F50',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
});

