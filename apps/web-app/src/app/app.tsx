import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, ToastifyContainer } from '@root/ui-web';
import { client } from '../graphql';
import { NavigationProvider } from '../context/navigation/navigation-provider';
import MainLayout from '../components/MainLayout/MainLayout';
import Routes from '../routes';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';

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
