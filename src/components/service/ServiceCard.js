import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Text, Avatar } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
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

  const getCategoryIcon = (category) => {
    if (typeof category !== 'string') return 'briefcase';
    
    switch (category.toLowerCase()) {
      case 'nettoyage':
        return 'broom';
      case 'plomberie':
        return 'water-pump';
      case 'électricité':
        return 'lightning-bolt';
      case 'peinture':
        return 'format-paint';
      case 'jardinage':
        return 'leaf';
      case 'aide à domicile':
        return 'home-heart';
      default:
        return 'briefcase';
    }
  };

  // Handle case where provider image might be missing
  const hasValidImage = typeof provider.image === 'string' && provider.image.startsWith('http');
  
  // Format price correctly
  const formattedPrice = (() => {
    try {
      if (provider.services && 
          Array.isArray(provider.services) && 
          provider.services.length > 0 && 
          typeof provider.services[0].price === 'number') {
        return `À partir de ${provider.services[0].price.toLocaleString()} FCFA`;
      }
      return 'Prix sur demande';
    } catch (error) {
      return 'Prix sur demande';
    }
  })();

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
              source={{ uri: provider.image }} 
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Avatar.Icon 
              size={80} 
              icon="domain" 
              color={colors.text.inverse}
              style={styles.avatarFallback}
            />
          )}
        </View>
        
        <View style={styles.infoContainer}>
          <Title style={styles.name}>{provider.businessName}</Title>
          
          <View style={styles.ratingContainer}>
            <StarRating 
              rating={provider.rating || 0} 
              size={16} 
              color={colors.rating.star}
              emptyColor={colors.rating.empty}
            />
            <Text style={styles.reviewCount}>
              ({provider.reviewCount || 0} avis)
            </Text>
          </View>

          <View style={styles.categoryContainer}>
            <MaterialCommunityIcons 
              name={getCategoryIcon(provider.category)} 
              size={16} 
              color={colors.text.secondary}
            />
            <Text style={styles.category}>{provider.category}</Text>
          </View>
          
          <View style={styles.locationContainer}>
            <MaterialIcons 
              name="location-on" 
              size={16} 
              color={colors.text.secondary} 
            />
            <Text style={styles.location} numberOfLines={1}>
              {provider.address || 'Emplacement non spécifié'}
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
    backgroundColor: colors.background,
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
    color: colors.text.primary,
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    color: colors.text.secondary,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.text.secondary,
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    color: colors.text.secondary,
    marginLeft: 4,
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  buttonContainer: {
    padding: 8,
    paddingTop: 0,
    alignItems: 'flex-end',
  },
  bookButton: {
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.inverse,
  }
});

export default ServiceCard;
