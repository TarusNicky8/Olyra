import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import AppButton from '@components/AppButton'; // ✅ Using alias
import { colors, spacing, fontSizes } from '@theme/colors'; // ✅ Theme usage

export default function ScanEnvironmentScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : colors.background }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : colors.text }]}>Scan Environment</Text>
      <Text style={[styles.status, { color: isDarkMode ? colors.accent : colors.secondary }]}>
        Scanning for potential threats...
      </Text>
      <AppButton title="Start Scan" onPress={() => alert("Scan Started")} />
      <AppButton title="Cancel" onPress={() => alert("Scan Cancelled")} />
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
  status: {
    fontSize: fontSizes.medium,
    marginBottom: spacing.m,
    textAlign: 'center',
  },
});
