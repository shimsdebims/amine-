import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../constants/colors';

export default function SplashScreen({ navigation }) {
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!navigation) return;

        if (user) {
          const routeName = user.isAdmin ? 'Admin' : 'Main';
          navigation.reset({
            index: 0,
            routes: [{ name: routeName }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
          });
        }
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback navigation
        navigation?.navigate?.('Auth');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [user, navigation]);

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