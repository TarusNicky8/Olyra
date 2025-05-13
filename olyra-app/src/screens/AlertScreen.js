import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AlertScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert Sent!</Text>
      <Text style={styles.subtitle}>Help will arrive shortly</Text>
      <Button title="Cancel Alert" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});
