import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const body = t('desktop:body');
  return (
    <>
      <main>{body}</main>

      <style jsx>
        {`
          main {
            color: purple;
          }
        `}
      </style>
    </>
  );
};

export default Home;
