import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../constants/styles';
import { useAuth } from '../../context/AuthContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    // Simulate login - in a real app, this would be an API call
    if (email === 'admin@example.com' && password === 'admin123') {
      login({ email, name: 'Admin' }, true);
    } else if (email === 'user@example.com' && password === 'user123') {
      login({ email, name: 'Utilisateur' }, false);
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Connexion</Text>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <TextInput
        style={styles.authInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.authInput}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.authButton} onPress={handleLogin}>
        <Text style={styles.authButtonText}>Se connecter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.authLink}>Pas de compte? S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}