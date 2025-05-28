import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from '../screens/user/HomeScreen';
import ServiceDetail from '../screens/user/ServiceDetail';
import BookingScreen from '../screens/user/BookingScreen';
import PaymentScreen from '../screens/user/Payment';
import ConfirmationScreen from '../screens/user/ConfirmationScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
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
        name="Home" 
        component={HomeScreen}
        options={{ 
          title: 'Services disponibles'
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
        name="Payment" 
        component={PaymentScreen}
        options={{ title: 'Paiement' }} 
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
  );
};

export default MainStack;
