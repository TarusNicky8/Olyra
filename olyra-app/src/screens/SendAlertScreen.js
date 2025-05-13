import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SendAlertScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Alert</Text>
      <Text style={styles.status}>Help will arrive shortly</Text>
      <Button title="Send Alert" onPress={() => alert("Alert Sent!")} />
      <Button title="Cancel Alert" onPress={() => alert("Alert Cancelled")} />
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
