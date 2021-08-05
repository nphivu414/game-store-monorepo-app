import { ThemeProvider } from '../context/theme/theme-provider';
import MainLayout from 'src/components//MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from 'src/routes';

const client = new ApolloClient({
  uri: process.env.NX_API_URL,
  cache: new InMemoryCache(),
});
console.log('🚀 ~ file: app.tsx ~ line 11 ~ process.env.API_URL', process.env.API_URL);

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <div className="flex justify-center pt-4">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-x">
                <BrowserRouter>
                  <MainLayout>
                    <Routes />
                  </MainLayout>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
