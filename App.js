import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TabNavigation from './navigation/TabNavigation';


const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "white",
      primary: "#2E2E2E",
    },
  roundness: 10,
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#2B6747" barStyle="auto" />
      <PaperProvider theme={theme}>
      <TabNavigation />
      </PaperProvider>
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
