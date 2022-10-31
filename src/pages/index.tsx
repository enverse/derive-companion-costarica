import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Home: NextPage = () => {
  const { t, lang: currentLocale } = useTranslation();

  const body = t('home:body');
  const footer = t('home:footer');

  const langLinks = ['en', 'fr', 'es'];

  return (
    <>
      <main>
        <nav>
          <div>Logos</div>
          <div>
            {langLinks.map((langLink, idx) => (
              // TODO fix this css selectio
              <>
                <Link
                  key={langLink}
                  href="/"
                  locale={langLink}
                  className={`home__langague-links ${
                    currentLocale === langLink ? 'home__language-links--disabled' : ''
                  }`}
                >
                  {langLink.toLocaleUpperCase()}
                </Link>
                {idx < langLinks.length - 1 && ' — '}
              </>
            ))}
          </div>
        </nav>
        <section>{body}</section>

        <footer>{footer}</footer>
      </main>
      <style jsx>
        {`
          nav {
            display: flex;
            // flex-direction: row;
            justify-content: space-between;
          }
          main {
            font-family: var(--BwNistaGeometricMed);
            color: #323f57;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 45px;
          }

          nav {
            font-size: 15px;
          }

          section {
            font-size: 23px;
          }

          footer {
            font-size: 13px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
