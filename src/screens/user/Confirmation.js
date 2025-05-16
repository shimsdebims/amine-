import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Confirmation = ({ navigation, route }) => {
  const { bookingDetails } = route.params || {};

  return (
    <View style={styles.container}>
      <MaterialIcons name="check-circle" size={80} color="#4CAF50" style={styles.icon} />
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.message}>Your service has been successfully booked.</Text>
      
      {bookingDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Booking Details:</Text>
          <Text style={styles.detailText}>Service: {bookingDetails.serviceName}</Text>
          <Text style={styles.detailText}>Date: {bookingDetails.date}</Text>
          <Text style={styles.detailText}>Time: {bookingDetails.time}</Text>
          <Text style={styles.detailText}>Provider: {bookingDetails.providerName}</Text>
        </View>
      )}

      <Text style={styles.notificationText}>You will receive a confirmation email shortly.</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          Return to Home
        </Button>
        
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('Booking')}
          style={[styles.button, styles.secondaryButton]}
        >
          View Bookings
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  notificationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    marginTop: 10,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

export default Confirmation;

