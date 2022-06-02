import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigation from './navigation/TabNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#191970" barStyle="auto" />
      <TabNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
