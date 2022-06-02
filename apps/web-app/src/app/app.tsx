import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'src/context/theme/theme-provider';
import Routes from 'src/routes';
import { client } from 'src/graphql';
import { ToastifyContainer } from '@game-store-monorepo/ui-web';
import { NavigationProvider } from 'src/context/navigation/navigation-provider';
import MainLayout from 'src/components/MainLayout/MainLayout';

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <NavigationProvider>
            <MainLayout>
              <Routes />
            </MainLayout>
          </NavigationProvider>
        </BrowserRouter>
        <ToastifyContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
