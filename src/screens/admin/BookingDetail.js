import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, List, Button, Chip } from 'react-native-paper';

const BookingDetail = ({ route, navigation }) => {
  const { booking } = route.params || {};

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return '#4CAF50';
      case 'pending':
        return '#FFC107';
      case 'cancelled':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Booking Details</Title>
          
          <Chip 
            style={[styles.statusChip, { backgroundColor: getStatusColor(booking?.status) }]}
            textStyle={{ color: '#fff' }}
          >
            {booking?.status || 'Unknown Status'}
          </Chip>

          <List.Item
            title="Service"
            description={booking?.service?.name || 'N/A'}
            left={props => <List.Icon {...props} icon="briefcase" />}
          />
          
          <List.Item
            title="Provider"
            description={booking?.provider?.businessName || 'N/A'}
            left={props => <List.Icon {...props} icon="account" />}
          />

          <List.Item
            title="Customer"
            description={booking?.user?.name || 'N/A'}
            left={props => <List.Icon {...props} icon="account" />}
          />

          <List.Item
            title="Date"
            description={booking?.date || 'N/A'}
            left={props => <List.Icon {...props} icon="calendar" />}
          />

          <List.Item
            title="Time"
            description={booking?.time || 'N/A'}
            left={props => <List.Icon {...props} icon="clock" />}
          />

          <List.Item
            title="Total Amount"
            description={booking?.totalAmount ? `${booking.totalAmount} FCFA` : 'N/A'}
            left={props => <List.Icon {...props} icon="cash" />}
          />
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Back
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
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  statusChip: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default BookingDetail;

