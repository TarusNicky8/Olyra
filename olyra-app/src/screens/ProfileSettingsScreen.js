import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>
      <Text style={styles.status}>Manage your profile settings here.</Text>
      <Button title="Edit Profile" onPress={() => alert("Edit Profile")} />
      <Button title="Manage Emergency Contacts" onPress={() => alert("Manage Contacts")} />
      <Button title="Privacy Settings" onPress={() => alert("Privacy Settings")} />
      <Button title="Logout" onPress={() => alert("Logging out...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
});
