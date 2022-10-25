import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const body = t('home:body');
  const footer = t('home:footer');

  return (
    <>
      <main>{body}</main>

      <footer>{footer}</footer>
      <style jsx>
        {`
          main {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Home;
