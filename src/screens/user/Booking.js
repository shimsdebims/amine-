import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Booking({ route, navigation }) {
  const { provider } = route.params;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  
  const handleBooking = () => {
    navigation.navigate('Payment', { 
      provider,
      bookingDetails: {
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Détails du prestataire</Text>
        <Text>{provider.name}</Text>
        <Text>{provider.service}</Text>
      </View>
      
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Date et heure</Text>
        
        <TouchableOpacity 
          style={styles.inputField} 
          onPress={() => setShowDatePicker(true)}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              selectedDate && setDate(selectedDate);
            }}
          />
        )}
        
        <TouchableOpacity 
          style={styles.inputField} 
          onPress={() => setShowTimePicker(true)}>
          <Text>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              selectedTime && setTime(selectedTime);
            }}
          />
        )}
      </View>
      
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Adresse</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre adresse"
        />
      </View>
      
      <TouchableOpacity 
        style={styles.bookNowButton}
        onPress={handleBooking}>
        <Text style={styles.bookNowText}>Continuer vers le paiement</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}