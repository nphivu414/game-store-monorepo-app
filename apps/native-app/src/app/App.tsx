/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Toast from 'react-native-toast-message';
import { PortalProvider } from '@gorhom/portal';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from '../routers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appearance } from 'react-native';
import { client } from '../graphql';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@root/ui-native';

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
      <Toast />
    </ApolloProvider>
  );
};

export default App;
