import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Text, Avatar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import StarRating from './StarRating';

/**
 * Reusable card component for displaying service provider information
 * 
 * @param {Object} provider - The provider data object
 * @param {Function} onPress - Function to call when the card is pressed
 * @param {Function} onBookPress - Function to call when the Book button is pressed
 */
const ServiceCard = ({ provider, onPress, onBookPress }) => {
  if (!provider) return null;

  // Handle case where provider image might be missing
  const hasValidImage = provider.photo && provider.photo.startsWith('http');
  
  // Format price correctly
  const formattedPrice = provider.price ? 
    `${provider.price.toLocaleString()} FCFA` : 
    'Prix sur demande';
  
  // Extract first service name or use the general service category
  const serviceName = provider.services && provider.services.length > 0 ? 
    provider.services[0].name : 
    provider.service || 'Service';
  
  const handleBookPress = (e) => {
    e.stopPropagation();
    onBookPress && onBookPress(provider);
  };

  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          {hasValidImage ? (
            <Image 
              source={{ uri: provider.photo }} 
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Avatar.Icon 
              size={80} 
              icon="account" 
              color={colors.white}
              style={styles.avatarFallback}
            />
          )}
        </View>
        
        <View style={styles.infoContainer}>
          <Title style={styles.name}>{provider.name || provider.businessName}</Title>
          <Paragraph style={styles.serviceName}>{serviceName}</Paragraph>
          
          <View style={styles.ratingContainer}>
            <StarRating 
              rating={provider.rating || 0} 
              size={16} 
              color={colors.primary}
            />
            <Text style={styles.reviewCount}>
              ({provider.reviewCount || provider.reviews || 0})
            </Text>
          </View>
          
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color={colors.textLight} />
            <Text style={styles.location} numberOfLines={1}>
              {provider.location || 'Emplacement non spécifié'}
            </Text>
          </View>
          
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={handleBookPress}
          style={styles.bookButton}
          labelStyle={styles.buttonLabel}
        >
          Réserver
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.white,
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarFallback: {
    backgroundColor: colors.primary,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  serviceName: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 4,
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
  },
  buttonContainer: {
    padding: 8,
    paddingTop: 0,
    alignItems: 'flex-end',
  },
  bookButton: {
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default ServiceCard;
