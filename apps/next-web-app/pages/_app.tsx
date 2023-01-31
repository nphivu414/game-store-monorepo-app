import { ThemeProvider } from '@root/ui-web';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '../components';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';
import { NavigationProvider } from '../context/navigation/navigation-provider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationProvider>
          <Head>
            <title>Welcome to next-web-app!</title>
          </Head>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default CustomApp;
