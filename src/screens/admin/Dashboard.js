import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../../constants/styles';
import { mockProviders } from '../../data/mockData';
import AdminProviderCard from '../../components/admin/AdminProviderCard';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard({ navigation }) {
  const { logout } = useAuth();
  
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tableau de bord</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={{ color: colors.primary }}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistiques</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <StatCard title="Prestataires" value={mockProviders.length} />
          <StatCard title="Réservations" value="24" />
          <StatCard title="Revenus" value="120,000 FCFA" />
        </View>
      </View>
      
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Prestataires</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddProvider')}>
            <Text style={styles.addButtonText}>+ Ajouter</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={mockProviders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AdminProviderCard 
              provider={item} 
              onEdit={() => navigation.navigate('EditProvider', { provider: item })}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

const StatCard = ({ title, value }) => (
  <View style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statTitle}>{title}</Text>
  </View>
);