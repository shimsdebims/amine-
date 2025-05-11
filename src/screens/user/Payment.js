import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles';

export default function Payment({ route, navigation }) {
  const { provider, bookingDetails } = route.params;
  const [paymentMethod, setPaymentMethod] = useState('orange_money');
  
  const handlePayment = () => {
    navigation.navigate('Confirmation', { 
      provider,
      bookingDetails,
      paymentMethod
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Récapitulatif</Text>
        <Text>{provider.name} - {provider.service}</Text>
        <Text>Date: {bookingDetails.date}</Text>
        <Text>Heure: {bookingDetails.time}</Text>
        <Text>Prix: {provider.price} FCFA</Text>
      </View>
      
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Méthode de paiement</Text>
        
        <TouchableOpacity 
          style={[
            styles.paymentMethod, 
            paymentMethod === 'orange_money' && styles.selectedPayment
          ]}
          onPress={() => setPaymentMethod('orange_money')}>
          <Text>Orange Money</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.paymentMethod, 
            paymentMethod === 'cash' && styles.selectedPayment
          ]}
          onPress={() => setPaymentMethod('cash')}>
          <Text>Paiement en espèces</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.bookNowButton}
        onPress={handlePayment}>
        <Text style={styles.bookNowText}>Confirmer le paiement</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}