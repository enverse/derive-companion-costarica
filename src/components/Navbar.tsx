import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Navbar() {
  const { lang: currentLocale } = useTranslation();

  const langLinks = ['fr', 'es'];

  return (
    <>
      <nav>
        <div>Logos</div>
        <div className="home__language-links-block">
          {langLinks.map((langLink, idx) => (
            // TODO fix this css selectio
            <div key={langLink}>
              <Link
                href="/"
                locale={langLink}
                className={`home__langague-links ${currentLocale === langLink ? 'home__language-links--disabled' : ''}`}
              >
                {langLink.toLocaleUpperCase()}
              </Link>
              {idx < langLinks.length - 1 && ' — '}
            </div>
          ))}
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            // flex-direction: row;
            justify-content: space-between;
            font-size: 15px;
            padding-bottom: 45px;
          }
          .home__language-links-block {
            font-family: var(--BwNistaGeometricMed);

            display: flex;
          }

          a {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}
