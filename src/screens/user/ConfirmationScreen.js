import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, List, Avatar, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ConfirmationScreen = ({ route, navigation }) => {
  const { booking } = route.params;

  const formatDateTime = (date, time) => {
    const bookingDate = new Date(date);
    const bookingTime = new Date(time);
    return `${bookingDate.toLocaleDateString()} à ${bookingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Success Message */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="check-circle" size={80} color="#4CAF50" />
        <Title style={styles.title}>Réservation confirmée !</Title>
        <Paragraph style={styles.subtitle}>Votre réservation a été effectuée avec succès</Paragraph>
      </View>

      {/* Booking Details */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Détails de la réservation</Title>
          
          <List.Item
            title={booking.service.name}
            description={booking.selectedService.name}
            left={props => <List.Icon {...props} icon="briefcase-outline" />}
          />
          
          <Divider style={styles.divider} />
          
          <List.Item
            title="Date et heure"
            description={formatDateTime(booking.date, booking.time)}
            left={props => <List.Icon {...props} icon="calendar-clock" />}
          />
          
          <Divider style={styles.divider} />
          
          <List.Item
            title="Adresse"
            description={booking.address}
            left={props => <List.Icon {...props} icon="map-marker" />}
          />
          
          {booking.notes && (
            <>
              <Divider style={styles.divider} />
              <List.Item
                title="Instructions spéciales"
                description={booking.notes}
                left={props => <List.Icon {...props} icon="note-text" />}
              />
            </>
          )}
        </Card.Content>
      </Card>

      {/* Payment Details */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Paiement</Title>
          <List.Item
            title="Mode de paiement"
            description={booking.paymentMethod === 'orange' ? 'Orange Money' : 
                       booking.paymentMethod === 'moov' ? 'Moov Money' : 'Espèces'}
            left={props => <List.Icon {...props} icon="cash" />}
          />
          <View style={styles.priceDetails}>
            <Paragraph style={styles.price}>
              Total payé: {booking.selectedService.price + 500} FCFA
            </Paragraph>
          </View>
        </Card.Content>
      </Card>

      {/* Next Steps */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Prochaines étapes</Title>
          <List.Item
            title="1. Confirmation par SMS"
            description="Vous recevrez un SMS de confirmation avec les détails"
            left={props => <Avatar.Icon {...props} size={32} icon="message-text" style={styles.stepIcon} />}
          />
          <List.Item
            title="2. Contact prestataire"
            description="Le prestataire vous contactera avant le service"
            left={props => <Avatar.Icon {...props} size={32} icon="phone" style={styles.stepIcon} />}
          />
          <List.Item
            title="3. Service"
            description="Le prestataire arrivera à l'heure convenue"
            left={props => <Avatar.Icon {...props} size={32} icon="account-clock" style={styles.stepIcon} />}
          />
        </Card.Content>
      </Card>

      {/* Action Buttons */}
      <View style={styles.bottomButtons}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Main')}
          style={styles.button}
        >
          Retour à l'accueil
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.button}
        >
          Voir mes réservations
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
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  card: {
    margin: 8,
    elevation: 4,
  },
  divider: {
    marginVertical: 8,
  },
  priceDetails: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  stepIcon: {
    backgroundColor: '#FF7F50',
  },
  bottomButtons: {
    padding: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default ConfirmationScreen;

