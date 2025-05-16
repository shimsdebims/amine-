import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store/reducers/store';

function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <PaperProvider theme={{
            colors: {
              primary: colors.primary,
              accent: colors.secondary,
            },
          }}>
            <AppNavigator />
          </PaperProvider>
        </AuthProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}

AppRegistry.registerComponent('servicemarketplace-bf', () => App);

export default App;
