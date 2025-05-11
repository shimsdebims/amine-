import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/colors';

export default function StarRating({ rating, size = 16 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="star" size={size} color={colors.warning} />
      ))}
      {hasHalfStar && <Icon name="star-half" size={size} color={colors.warning} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} name="star-outline" size={size} color={colors.warning} />
      ))}
    </View>
  );
}