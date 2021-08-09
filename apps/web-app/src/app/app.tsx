import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'src/context/theme/theme-provider';
import MainLayout from 'src/components//MainLayout';
import Routes from 'src/routes';
import { client } from 'src/graphql';
import ToastifyContainer from 'src/components/Toast';
import MockupPhone from 'src/components/MockupPhone';
import { NavigationProvider } from 'src/context/navigation/navigation-provider';

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <div className="flex justify-center pt-4">
          <BrowserRouter>
            <MockupPhone>
              <NavigationProvider>
                <MainLayout>
                  <Routes />
                </MainLayout>
              </NavigationProvider>
            </MockupPhone>
          </BrowserRouter>
        </div>
        <ToastifyContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
