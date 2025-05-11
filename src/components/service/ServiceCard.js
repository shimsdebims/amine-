import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../constants/styles';
import StarRating from './StarRating';

export default function ServiceCard({ provider, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: provider.photo }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{provider.name}</Text>
        <Text style={styles.service}>{provider.service}</Text>
        <View style={styles.ratingContainer}>
          <StarRating rating={provider.rating} />
          <Text style={styles.ratingText}>({provider.reviews})</Text>
        </View>
        <Text style={styles.location}>{provider.location}</Text>
        <Text style={styles.price}>{provider.price} FCFA/heure</Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={onPress}>
        <Text style={styles.bookButtonText}>Voir</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}