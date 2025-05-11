import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/admin/Dashboard';
import AddProvider from '../screens/admin/AddProvider';
import EditProvider from '../screens/admin/EditProvider';
import ProviderDetail from '../screens/admin/ProviderDetail';
import BookingDetail from '../screens/admin/BookingDetail';
import UserDetail from '../screens/admin/UserDetail';

const Stack = createStackNavigator();

export default function AdminStack() {
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
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Tableau de bord' }}
      />
      <Stack.Screen
        name="AddProvider"
        component={AddProvider}
        options={{ title: 'Ajouter un prestataire' }}
      />
      <Stack.Screen
        name="EditProvider"
        component={EditProvider}
        options={{ title: 'Modifier prestataire' }}
      />
      <Stack.Screen
        name="ProviderDetail"
        component={ProviderDetail}
        options={{ title: 'Détails prestataire' }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{ title: 'Détails réservation' }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{ title: 'Détails utilisateur' }}
      />
    </Stack.Navigator>
  );
}