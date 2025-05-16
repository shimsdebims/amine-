import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, List, Button, Chip } from 'react-native-paper';

const UserDetail = ({ route, navigation }) => {
  const { user } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{user?.name || 'User Name'}</Title>
          
          <Chip 
            style={[styles.roleChip, { backgroundColor: user?.role === 'admin' ? '#FF7F50' : '#2196F3' }]}
            textStyle={{ color: '#fff' }}
          >
            {user?.role || 'user'}
          </Chip>

          <List.Item
            title="Email"
            description={user?.email || 'N/A'}
            left={props => <List.Icon {...props} icon="email" />}
          />

          <List.Item
            title="Phone"
            description={user?.phone || 'N/A'}
            left={props => <List.Icon {...props} icon="phone" />}
          />

          <List.Item
            title="Join Date"
            description={user?.createdAt || 'N/A'}
            left={props => <List.Icon {...props} icon="calendar" />}
          />

          {user?.role === 'provider' && (
            <List.Item
              title="Business Name"
              description={user?.provider?.businessName || 'N/A'}
              left={props => <List.Icon {...props} icon="domain" />}
            />
          )}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.subtitle}>Activity Summary</Title>
          
          <List.Item
            title="Total Bookings"
            description={user?.bookingsCount || '0'}
            left={props => <List.Icon {...props} icon="bookmark" />}
          />

          {user?.role === 'provider' && (
            <List.Item
              title="Services Offered"
              description={user?.provider?.servicesCount || '0'}
              left={props => <List.Icon {...props} icon="briefcase" />}
            />
          )}
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
  subtitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  roleChip: {
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

export default UserDetail;

