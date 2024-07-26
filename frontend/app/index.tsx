import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation";
import theme from "./utils/theme";
import { SWRConfig } from "swr";
import { AppState } from "react-native"
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SWRConfig
          value={{
            provider: () => new Map(),
            isVisible: () => {
              return true
            },
            initFocus(callback) {
              let appState = AppState.currentState

              const onAppStateChange = (nextAppState: any) => {
                /* If it's resuming from background or inactive mode to active one */
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback()
                }
                appState = nextAppState
              }

              // Subscribe to the app state change events
              const subscription = AppState.addEventListener(
                "change",
                onAppStateChange
              )

              return () => {
                subscription.remove()
              }
            },
          }}
        >
          <NavigationContainer independent={true}>
            <Navigation />
          </NavigationContainer>
        </SWRConfig>
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
