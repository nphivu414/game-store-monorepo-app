/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { PortalProvider } from '@gorhom/portal';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from '../routers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appearance } from 'react-native';
import { client } from '../graphql';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@game-store-monorepo/ui-native';

export const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <ThemeProvider>
            <PortalProvider>
              <BottomTabNavigator />
            </PortalProvider>
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
