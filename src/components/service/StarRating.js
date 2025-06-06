import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

/**
 * Component for displaying star ratings
 * 
 * @param {number} rating - The rating value (e.g. 4.5)
 * @param {number} maxRating - Maximum possible rating (default: 5)
 * @param {number} size - Size of each star icon (default: 16)
 * @param {string} color - Color of filled stars (default: primary color)
 * @param {string} emptyColor - Color of empty stars (default: gray)
 */
const StarRating = ({
  rating = 0,
  maxRating = 5,
  size = 16,
  color = colors.primary || '#FFC107',
  emptyColor = '#E0E0E0'
}) => {
  // Ensure rating is within bounds
  const normalizedRating = Math.max(0, Math.min(maxRating, rating));
  
  // Create array of maxRating length
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const position = index + 1;
    
    // Determine which icon to display
    let iconName = 'star-outline';
    
    if (position <= normalizedRating) {
      iconName = 'star'; // Full star
    } else if (position - 0.5 <= normalizedRating) {
      iconName = 'star-half'; // Half star
    }
    
    return (
      <MaterialIcons
        key={`star-${index}`}
        name={iconName}
        size={size}
        color={iconName === 'star-outline' ? emptyColor : color}
        style={styles.star}
      />
    );
  });

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 2,
  }
});

export default StarRating;
