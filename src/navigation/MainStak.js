import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/user/Home';
import ServiceDetail from '../screens/user/ServiceDetail';
import Booking from '../screens/user/Booking';
import Payment from '../screens/user/Payment';
import Confirmation from '../screens/user/Confirmation';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Services' }} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} options={{ title: 'Détails' }} />
      <Stack.Screen name="Booking" component={Booking} options={{ title: 'Réserver' }} />
      <Stack.Screen name="Payment" component={Payment} options={{ title: 'Paiement' }} />
      <Stack.Screen name="Confirmation" component={Confirmation} options={{ title: 'Confirmation' }} />
    </Stack.Navigator>
  );
}