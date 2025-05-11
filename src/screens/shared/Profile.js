import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

export default function Profile({ navigation }) {
  const { user, logout } = useAuth();
  const [editing, setEditing] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Image
          source={{ uri: user?.photo || 'https://via.placeholder.com/150' }}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>
          {user?.name}
        </Text>
        <Text style={{ color: colors.secondaryText }}>{user?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations personnelles</Text>
        <ProfileField label="Nom" value={user?.name} editing={editing} />
        <ProfileField label="Email" value={user?.email} editing={editing} />
        <ProfileField label="Téléphone" value={user?.phone} editing={editing} />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        {editing ? (
          <View style={{ flexDirection: 'row' }}>
            <Button
              title="Annuler"
              variant="outline"
              style={{ flex: 1, marginRight: 10 }}
              onPress={() => setEditing(false)}
            />
            <Button
              title="Enregistrer"
              style={{ flex: 1 }}
              onPress={() => setEditing(false)}
            />
          </View>
        ) : (
          <Button
            title="Modifier le profil"
            variant="outline"
            onPress={() => setEditing(true)}
          />
        )}
      </View>

      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() => {
          logout();
          navigation.navigate('Login');
        }}
      >
        <Text style={{ color: colors.error, textAlign: 'center' }}>
          Déconnexion
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const ProfileField = ({ label, value, editing }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={{ color: colors.secondaryText, fontSize: 14 }}>{label}</Text>
    {editing ? (
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
          paddingVertical: 8,
          fontSize: 16,
        }}
        value={value}
      />
    ) : (
      <Text style={{ fontSize: 16, marginTop: 4 }}>{value}</Text>
    )}
  </View>
);