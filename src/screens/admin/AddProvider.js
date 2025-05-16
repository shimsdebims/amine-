import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Title, HelperText } from 'react-native-paper';

const AddProvider = ({ navigation }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    phone: '',
    email: '',
    address: '',
    city: 'Ouagadougou',
    category: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      // TODO: Implement actual provider creation logic here
      // This would typically involve an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      navigation.navigate('AdminDashboard', {
        message: 'Provider added successfully'
      });
    } catch (err) {
      setError('Failed to add provider. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Add New Provider</Title>

        <TextInput
          label="Business Name"
          value={formData.businessName}
          onChangeText={(text) => handleChange('businessName', text)}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Description"
          value={formData.description}
          onChangeText={(text) => handleChange('description', text)}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.input}
        />

        <TextInput
          label="Phone Number"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          mode="outlined"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          label="Address"
          value={formData.address}
          onChangeText={(text) => handleChange('address', text)}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="City"
          value={formData.city}
          onChangeText={(text) => handleChange('city', text)}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Category"
          value={formData.category}
          onChangeText={(text) => handleChange('category', text)}
          mode="outlined"
          style={styles.input}
        />

        {error ? <HelperText type="error" visible={true}>{error}</HelperText> : null}

        <Button
          mode="contained"
          onPress={handleSubmit}
          loading={loading}
          disabled={loading}
          style={styles.button}
        >
          Add Provider
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Cancel
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default AddProvider;

