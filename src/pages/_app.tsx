import { NextPage } from 'next';
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Layout from '../components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Header />
      {/*  eslint-disable-next-line react/jsx-props-no-spreading  */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
