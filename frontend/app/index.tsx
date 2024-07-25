import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation";
import theme from "./utils/theme";

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
