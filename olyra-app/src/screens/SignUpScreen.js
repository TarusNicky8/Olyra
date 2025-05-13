import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '@components/AppButton'; // ✅ Use alias
import { colors, spacing, fontSizes } from '@theme/colors'; // ✅ Use consistent theme

export default function SignUpScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    alert('Sign Up successful!');
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : colors.background }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : colors.text }]}>Create New Account</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        style={[
          styles.input,
          {
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : colors.lightGray,
          },
        ]}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        style={[
          styles.input,
          {
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : colors.lightGray,
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
            borderColor: isDarkMode ? '#555' : colors.lightGray,
          },
        ]}
        value={password}
        onChangeText={setPassword}
      />

      <AppButton title="Sign Up" onPress={handleSignUp} />
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
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: spacing.m,
    marginBottom: spacing.m,
  },
});
