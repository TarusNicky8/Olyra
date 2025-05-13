import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '@components/AppButton'; // ✅ Using alias
import { colors, spacing, fontSizes } from '@theme/colors'; // ✅ Better alias usage

export default function LoginScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'nicodemuskiptoo88@gmail.com' && password === 'password123') {
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid credentials. Try again.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : colors.background }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : colors.text }]}>Welcome to Olyra</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        style={[
          styles.input,
          {
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : '#ccc',
          },
        ]}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        secureTextEntry
        style={[
          styles.input,
          {
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : '#ccc',
          },
        ]}
        value={password}
        onChangeText={setPassword}
      />

      <AppButton title="Login" onPress={handleLogin} />
      <AppButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.l,
  },
  title: {
    fontSize: fontSizes.large,
    marginBottom: spacing.l,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: spacing.m,
    marginBottom: spacing.m,
  },
});
