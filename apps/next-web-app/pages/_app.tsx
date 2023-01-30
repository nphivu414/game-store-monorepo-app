import { ThemeProvider } from '@root/ui-web';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '../components';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Welcome to next-web-app!</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default CustomApp;
