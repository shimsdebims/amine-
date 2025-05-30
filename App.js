import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/user/HomeScreen';
import ServiceDetail from './src/screens/user/ServiceDetail';
import BookingScreen from './src/screens/user/BookingScreen';
import ConfirmationScreen from './src/screens/user/ConfirmationScreen';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF7F50',
    accent: '#2196F3',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FF7F50',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Main" 
              component={HomeScreen}
              options={{ 
                title: 'Services disponibles',
                headerLeft: null 
              }} 
            />
            <Stack.Screen 
              name="ServiceDetail" 
              component={ServiceDetail}
              options={{ title: 'Détails du service' }} 
            />
            <Stack.Screen 
              name="Booking" 
              component={BookingScreen}
              options={{ title: 'Réservation' }} 
            />
            <Stack.Screen 
              name="Confirmation" 
              component={ConfirmationScreen}
              options={{ 
                title: 'Confirmation',
                headerLeft: null
              }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
