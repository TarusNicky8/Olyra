import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '@components/AppButton'; // ✅ Use alias
import { colors } from '@theme/colors';         // ✅ Use alias

export default function DashboardScreen() {
  const navigation = useNavigation();

  const mockUser = {
    name: "John Doe",
    status: "You Are Safe",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {mockUser.name}!</Text>
      <Text style={styles.status}>{mockUser.status}</Text>

      <AppButton title="Send Alert" onPress={() => navigation.navigate('SendAlert')} />
      <AppButton title="Scan Environment" onPress={() => navigation.navigate('ScanEnvironment')} />
      <AppButton title="Profile Settings" onPress={() => navigation.navigate('ProfileSettings')} />
      <AppButton title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.text,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.secondary,
  },
});
