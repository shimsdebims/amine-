import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../constants/colors';

export default function SplashScreen({ navigation }) {
  const { user } = useAuth();

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      if (user) {
        navigation.replace(user.isAdmin ? 'Admin' : 'Main');
      } else {
        navigation.replace('Auth');
      }
    }, 2000);
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ServiceMarket BF</Text>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
});