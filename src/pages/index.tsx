import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Home: NextPage = () => {
  const { t, lang: currentLocale } = useTranslation();

  const body = t('home:body');
  const footer = t('home:footer');
  const footerLinkText = t('home:footer-link-text');

  const langLinks = ['en', 'fr', 'es'];

  return (
    <>
      <main>
        <nav>
          <div>Logos</div>
          <div className="home__language-links-block">
            {langLinks.map((langLink, idx) => (
              // TODO fix this css selectio
              <div key={langLink}>
                <Link
                  href="/"
                  locale={langLink}
                  className={`home__langague-links ${
                    currentLocale === langLink ? 'home__language-links--disabled' : ''
                  }`}
                >
                  {langLink.toLocaleUpperCase()}
                </Link>
                {idx < langLinks.length - 1 && ' — '}
              </div>
            ))}
          </div>
        </nav>
        <section>{body}</section>

        <footer>
          {footer}{' '}
          <a href="https://derive.today/" target="_blank" rel="noreferrer">
            {footerLinkText}
          </a>
        </footer>
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
            text-align: center;
          }

          .home__language-links-block {
            display: flex;
          }

          a {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default Home;
