import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard({ navigation }) {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.logout}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}