import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, List } from 'react-native-paper';

const ProviderDetail = ({ route, navigation }) => {
  const { provider } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{provider?.businessName || 'Provider Name'}</Title>
          <List.Item
            title="Email"
            description={provider?.email || 'N/A'}
            left={props => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            title="Phone"
            description={provider?.phone || 'N/A'}
            left={props => <List.Icon {...props} icon="phone" />}
          />
          <List.Item
            title="Category"
            description={provider?.category || 'N/A'}
            left={props => <List.Icon {...props} icon="tag" />}
          />
          <List.Item
            title="Address"
            description={provider?.address || 'N/A'}
            left={props => <List.Icon {...props} icon="map-marker" />}
          />
          <Paragraph style={styles.description}>
            {provider?.description || 'No description available'}
          </Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('EditProvider', { provider })}
          style={styles.button}
        >
          Edit Provider
        </Button>
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
  description: {
    marginTop: 15,
    fontSize: 16,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default ProviderDetail;

