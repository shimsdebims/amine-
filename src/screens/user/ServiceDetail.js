import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Text, Button, Card } from 'react-native-paper';

const ServiceDetail = ({ route, navigation }) => {
  const { provider } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{provider.name}</Title>
          <Text style={styles.category}>{provider.category}</Text>
          <Text style={styles.rating}>Note: {provider.rating}/5</Text>
          
          <View style={styles.section}>
            <Title style={styles.sectionTitle}>Services</Title>
            {provider.services.map((service, index) => (
              <Text key={index} style={styles.service}>• {service}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Title style={styles.sectionTitle}>Expérience</Title>
            <Text>{provider.experience}</Text>
          </View>

          <View style={styles.section}>
            <Title style={styles.sectionTitle}>Tarifs</Title>
            <Text>{provider.price}</Text>
          </View>

          {provider.certifications && (
            <View style={styles.section}>
              <Title style={styles.sectionTitle}>Certifications</Title>
              {provider.certifications.map((cert, index) => (
                <Text key={index} style={styles.certification}>• {cert}</Text>
              ))}
            </View>
          )}
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Booking', { provider })}
          style={styles.button}
        >
          Réserver
        </Button>
        
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.button}
        >
          Contacter
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  rating: {
    fontSize: 16,
    color: '#2196F3',
    marginTop: 8,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button, Chip, Divider, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ServiceDetail = ({ route, navigation }) => {
  const { service } = route.params;
  const [selectedService, setSelectedService] = useState(null);

  // Mock available services
  const availableServices = [
    {
      id: '1',
      name: 'Service Standard',
      description: 'Service de base pour les besoins essentiels',
      price: 2500,
      duration: '1 heure'
    },
    {
      id: '2',
      name: 'Service Premium',
      description: 'Service complet avec équipements professionnels',
      price: 4500,
      duration: '2 heures'
    }
  ];

  // Mock reviews
  const reviews = [
    {
      id: '1',
      user: 'Sophie K.',
      rating: 5,
      comment: 'Excellent service, très professionnel',
      date: '15 Mai 2024'
    },
    {
      id: '2',
      user: 'Marc D.',
      rating: 4,
      comment: 'Bon service, ponctuel',
      date: '12 Mai 2024'
    }
  ];

  const renderRatingStars = (rating) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <MaterialCommunityIcons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={16}
            color="#FFC107"
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Provider Header */}
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Avatar.Icon size={60} icon="account" style={styles.avatar} />
            <View style={styles.headerInfo}>
              <Title>{service.name}</Title>
              <View style={styles.ratingContainer}>
                {renderRatingStars(service.rating)}
                <Paragraph style={styles.ratingText}>
                  {service.rating} ({service.ordersCompleted} services)
                </Paragraph>
              </View>
            </View>
          </View>
          <Paragraph style={styles.description}>{service.description}</Paragraph>
          
          <View style={styles.stats}>
            <Chip icon="clock-check">Disponible</Chip>
            <Chip icon="map-marker">5 km</Chip>
            <Chip icon="thumb-up">{Math.round(service.rating * 20)}% satisfaits</Chip>
          </View>
        </Card.Content>
      </Card>

      {/* Available Services */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Services proposés</Title>
          {availableServices.map((item) => (
            <View key={item.id}>
              <List.Item
                title={item.name}
                description={item.description}
                right={() => (
                  <View style={styles.servicePrice}>
                    <Paragraph style={styles.price}>{item.price} FCFA</Paragraph>
                    <Paragraph style={styles.duration}>{item.duration}</Paragraph>
                  </View>
                )}
                onPress={() => setSelectedService(item)}
                style={[
                  styles.serviceItem,
                  selectedService?.id === item.id && styles.selectedService
                ]}
              />
              <Divider />
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Reviews */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Avis clients</Title>
          {reviews.map((review) => (
            <View key={review.id} style={styles.review}>
              <View style={styles.reviewHeader}>
                <Paragraph style={styles.reviewUser}>{review.user}</Paragraph>
                <Paragraph style={styles.reviewDate}>{review.date}</Paragraph>
              </View>
              {renderRatingStars(review.rating)}
              <Paragraph style={styles.reviewComment}>{review.comment}</Paragraph>
              <Divider />
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Booking Button */}
      <View style={styles.bottomButtons}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Booking', { 
            service,
            selectedService 
          })}
          disabled={!selectedService}
          style={styles.bookButton}
        >
          Réserver maintenant
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.chatButton}
        >
          Contacter
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    backgroundColor: '#FF7F50',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    color: '#666',
  },
  description: {
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  serviceItem: {
    paddingVertical: 8,
  },
  selectedService: {
    backgroundColor: '#FFF3E0',
  },
  servicePrice: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  duration: {
    fontSize: 12,
    color: '#666',
  },
  review: {
    marginVertical: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  reviewUser: {
    fontWeight: 'bold',
  },
  reviewDate: {
    color: '#666',
    fontSize: 12,
  },
  reviewComment: {
    marginVertical: 8,
  },
  bottomButtons: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookButton: {
    flex: 2,
    marginRight: 8,
  },
  chatButton: {
    flex: 1,
  },
});
export default ServiceDetail;

