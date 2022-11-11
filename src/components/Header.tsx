import { NextComponentType } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Header: NextComponentType = () => {
  const { t } = useTranslation();
  const title = t('common:title');
  const description = t('common:description');

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Header;
