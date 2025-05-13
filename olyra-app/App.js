// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

import { AuthContextProvider } from '@context/AuthContext';

import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import DashboardScreen from '@screens/DashboardScreen';
import ScanEnvironmentScreen from '@screens/ScanEnvironmentScreen';
import SendAlertScreen from '@screens/SendAlertScreen';
import ProfileSettingsScreen from '@screens/ProfileSettingsScreen';

// Create the Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  const colorScheme = useColorScheme(); // Detects if the user is in dark mode or light mode

  // Define the themes for light and dark mode
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <AuthContextProvider>
      {/* Set up the NavigationContainer with theme based on user system preference */}
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Splash" // Default screen when app starts
          screenOptions={{
            headerShown: true, // Show the header by default
            headerStyle: {
              backgroundColor: theme.colors.card, // Header background based on theme
            },
            headerTintColor: theme.colors.text, // Text color of the header
          }}
        >
          {/* Define the screen components and their titles */}
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // Hide the header for the splash screen
          />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
          <Stack.Screen name="ScanEnvironment" component={ScanEnvironmentScreen} options={{ title: 'Scan Environment' }} />
          <Stack.Screen name="SendAlert" component={SendAlertScreen} options={{ title: 'Send Alert' }} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} options={{ title: 'Profile Settings' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
