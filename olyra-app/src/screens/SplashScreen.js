// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@context/AuthContext'; // ✅ Alias used
import { colors, spacing, fontSizes } from '@theme/colors'; // ✅ Theming used

export default function SplashScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(user ? 'Dashboard' : 'Login');
    }, 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [user]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : colors.background }]}>
      <Text style={[styles.logo, { color: isDarkMode ? '#fff' : colors.text }]}>Olyra</Text>
      <ActivityIndicator size="large" color={isDarkMode ? '#fff' : colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.l,
  },
  logo: {
    fontSize: fontSizes.extraLarge,
    fontWeight: 'bold',
    marginBottom: spacing.l,
  },
});
