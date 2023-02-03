'use client';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@root/ui-web';
import { MainLayout } from '../components';
import { NavigationProvider } from '../context/navigation/navigation-provider';
import { client } from '../graphql';

const AppProvider = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationProvider>
          <MainLayout>{children}</MainLayout>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
