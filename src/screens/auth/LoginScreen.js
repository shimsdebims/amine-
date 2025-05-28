import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Text } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement proper authentication
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>Service Marketplace BF</Title>
        <Text style={styles.subtitle}>Trouvez des services de qualité</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
        />

        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
        >
          Se connecter
        </Button>

        <Button 
          mode="text" 
          onPress={() => {}}
          style={styles.textButton}
        >
          Créer un compte
        </Button>
      </View>
    </View>
  );
};

        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
        />

        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
        >
          Se connecter
        </Button>

        <Button 
          mode="text" 
          onPress={() => {}}
          style={styles.textButton}
        >
          Créer un compte
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF7F50',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
  },
  textButton: {
    marginTop: 8,
  },
});

