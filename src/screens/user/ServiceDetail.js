import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';

const ServiceDetail = ({ route, navigation }) => {
  const { service } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {service?.image && (
          <Image 
            source={{ uri: service.image }} 
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>{service?.name || 'Service Details'}</Text>
        <Text style={styles.provider}>Provider: {service?.provider?.businessName || 'Service Provider'}</Text>
        <Text style={styles.description}>{service?.description || 'Service description will appear here'}</Text>
        <Text style={styles.price}>Price: {service?.price ? `${service.price} FCFA` : 'Contact for price'}</Text>
        <Text style={styles.duration}>Duration: {service?.duration ? `${service.duration} minutes` : 'To be determined'}</Text>
        
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Booking', { service })}
          style={styles.button}
        >
          Book Now
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  provider: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  duration: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
});

export default ServiceDetail;

