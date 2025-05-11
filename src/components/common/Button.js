import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../constants/colors';

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  loading = false,
  disabled = false,
  variant = 'primary', // 'primary', 'secondary', 'outline'
}) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          opacity: disabled ? 0.6 : 1,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: colors.primary,
          opacity: disabled ? 0.6 : 1,
        };
      default:
        return {
          backgroundColor: colors.primary,
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          opacity: disabled ? 0.6 : 1,
        };
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return {
          color: colors.primary,
          fontWeight: 'bold',
          fontSize: 16,
        };
      default:
        return {
          color: colors.white,
          fontWeight: 'bold',
          fontSize: 16,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? colors.primary : colors.white} />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}