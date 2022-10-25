import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('common:title')}</title>
        <meta name="description" content={t('common:description')} />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
