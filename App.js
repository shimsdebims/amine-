import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/appNavigator';
import { colors } from './src/constants/colors';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </AuthProvider>
  );
}