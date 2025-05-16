import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

// Mock data for services
const mockServices = [
  {
    id: '1',
    name: 'Amina Ouédraogo Services de Nettoyage',
    category: 'Nettoyage',
    description: 'Professionnelle du nettoyage avec 5 ans d\'expérience.',
    price: '2500 FCFA/heure',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Issa Diarra Plomberie',
    category: 'Plomberie',
    description: 'Plombier qualifié avec 8 ans d\'expérience.',
    price: '5000 FCFA/intervention',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Électricité Konaté',
    category: 'Électricité',
    description: 'Services d\'installation et réparation électrique.',
    price: '3500 FCFA/heure',
    rating: 4.7
  }
];

const ServiceCard = ({ item }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph style={styles.category}>{item.category}</Paragraph>
      <Paragraph>{item.description}</Paragraph>
      <Paragraph style={styles.price}>{item.price}</Paragraph>
      <Paragraph style={styles.rating}>★ {item.rating}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained">Réserver</Button>
    </Card.Actions>
  </Card>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockServices}
        renderItem={({ item }) => <ServiceCard item={item} />}
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
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  category: {
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  rating: {
    color: '#FFC107',
    marginTop: 4,
  },
});

