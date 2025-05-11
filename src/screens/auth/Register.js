import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);
    // Simulate registration
    setTimeout(() => {
      login({ name, email, phone }, false);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Créer un compte</Text>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <TextInput
        style={styles.authInput}
        placeholder="Nom complet"
        value={name}
        onChangeText={setName}
      />
      
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
        placeholder="Téléphone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.authInput}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TextInput
        style={styles.authInput}
        placeholder="Confirmer mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      <Button
        title="S'inscrire"
        onPress={handleRegister}
        loading={loading}
        disabled={loading}
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.authLink}>Déjà un compte? Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}