import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
