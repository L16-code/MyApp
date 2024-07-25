import React from 'react';
import { ThemeProvider } from "@shopify/restyle";
import theme from "./utils/theme";
import Navigation from "./navigation";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer independent={true}>
          <Navigation />
        </NavigationContainer>
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
