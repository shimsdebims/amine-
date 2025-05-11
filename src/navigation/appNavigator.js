import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import AdminStack from './AdminStack';
import SplashScreen from '../screens/auth/SplashScreen';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { user, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading user data
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <RootStack.Screen name="Auth" component={AuthStack} />
        ) : isAdmin ? (
          <RootStack.Screen name="Admin" component={AdminStack} />
        ) : (
          <RootStack.Screen name="Main" component={MainStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}