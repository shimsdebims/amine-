import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, List, TextInput, Chip, Divider } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BookingScreen = ({ route, navigation }) => {
  const { service, selectedService } = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('orange');

  const paymentMethods = [
    { id: 'orange', name: 'Orange Money', icon: 'cash' },
    { id: 'moov', name: 'Moov Money', icon: 'cash' },
    { id: 'cash', name: 'Espèces', icon: 'cash-multiple' },
  ];

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleBooking = () => {
    // TODO: Implement booking logic
    navigation.navigate('Confirmation', {
      booking: {
        service,
        selectedService,
        date,
        time,
        address,
        notes,
        paymentMethod: selectedPayment
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Service Summary */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Résumé du service</Title>
          <List.Item
            title={service.name}
            description={selectedService.name}
            left={props => <List.Icon {...props} icon="briefcase-outline" />}
          />
          <Paragraph style={styles.price}>{selectedService.price} FCFA</Paragraph>
          <Paragraph style={styles.duration}>Durée: {selectedService.duration}</Paragraph>
        </Card.Content>
      </Card>

      {/* Date and Time Selection */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Date et heure</Title>
          
          <Button 
            mode="outlined" 
            onPress={() => setShowDatePicker(true)}
            style={styles.dateButton}
          >
            {date.toLocaleDateString()}
          </Button>
          
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}

          <Button 
            mode="outlined" 
            onPress={() => setShowTimePicker(true)}
            style={styles.dateButton}
          >
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Button>

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              onChange={onTimeChange}
            />
          )}
        </Card.Content>
      </Card>

      {/* Address */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Adresse</Title>
          <TextInput
            mode="outlined"
            label="Adresse complète"
            value={address}
            onChangeText={setAddress}
            multiline
            style={styles.input}
          />
        </Card.Content>
      </Card>

      {/* Additional Notes */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Notes supplémentaires</Title>
          <TextInput
            mode="outlined"
            label="Instructions spéciales"
            value={notes}
            onChangeText={setNotes}
            multiline
            style={styles.input}
          />
        </Card.Content>
      </Card>

      {/* Payment Method */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Mode de paiement</Title>
          {paymentMethods.map((method) => (
            <List.Item
              key={method.id}
              title={method.name}
              left={props => <List.Icon {...props} icon={method.icon} />}
              onPress={() => setSelectedPayment(method.id)}
              right={() => (
                <MaterialCommunityIcons
                  name={selectedPayment === method.id ? 'radiobox-marked' : 'radiobox-blank'}
                  size={24}
                  color="#FF7F50"
                />
              )}
            />
          ))}
        </Card.Content>
      </Card>

      {/* Price Breakdown */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Détails du prix</Title>
          <View style={styles.priceRow}>
            <Paragraph>Prix du service</Paragraph>
            <Paragraph>{selectedService.price} FCFA</Paragraph>
          </View>
          <View style={styles.priceRow}>
            <Paragraph>Frais de déplacement</Paragraph>
            <Paragraph>500 FCFA</Paragraph>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.priceRow}>
            <Paragraph style={styles.total}>Total</Paragraph>
            <Paragraph style={styles.total}>{selectedService.price + 500} FCFA</Paragraph>
          </View>
        </Card.Content>
      </Card>

      {/* Booking Button */}
      <View style={styles.bottomButtons}>
        <Button 
          mode="contained" 
          onPress={handleBooking}
          style={styles.bookButton}
        >
          Confirmer la réservation
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 8,
    elevation: 4,
  },
  dateButton: {
    marginVertical: 8,
  },
  input: {
    marginTop: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  divider: {
    marginVertical: 8,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomButtons: {
    padding: 16,
  },
  bookButton: {
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7F50',
    marginTop: 8,
  },
  duration: {
    color: '#666',
  },
});

export default BookingScreen;

