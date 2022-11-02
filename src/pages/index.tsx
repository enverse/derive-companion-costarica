import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import Link from 'next/link';
import UniversalLinks from '../components/UniversalLinks/index.tsx';
import { useEffect, useState } from 'react';
import useCurrentPosition from '../hooks/useCurrentPosition';
import useVisitedDerives from '../hooks/useVisitedDerives';

const DERIVE_ADMIN_API_URL = process.env.NEXT_PUBLIC_DERIVE_ADMIN_API_URL;
const EXPERIENCE_CODE = process.env.NEXT_PUBLIC_DERIVE_EXPERIENCE_TOKEN;

type Props = {};

type PossibleSlugs = 'eat' | 'wonder' | 'breathe' | 'remember' | 'dance';

type FormattedPaths = Partial<Record<PossibleSlugs, Path>>;

function getPaths(paths: Path[]) {
  const result: Partial<FormattedPaths> = {};
  paths.forEach((path) => {
    result[path.slug] = path;
  });
  return result;
}

const Home: NextPage<Props> = () => {
  const [data, setData] = useState<FormattedPaths>();
  const [loading, setLoading] = useState(true);
  const { t, lang: currentLocale } = useTranslation();
  const { lat, lng } = useCurrentPosition();

  const visitedDerives = useVisitedDerives();

  useEffect(() => {
    const getAndSetPaths = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${DERIVE_ADMIN_API_URL}/experiences/${EXPERIENCE_CODE}/?lat=${lat}&lng=${lng}&toExclude=${visitedDerives}`
        );
        const data = (await response.json()) as Experience;
        const paths = getPaths(data.paths);
        setData(paths);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    if (lat && lng) {
      getAndSetPaths();
    }
  }, [lat, lng]);

  const intro = t('home:intro');
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
        <section style={{ color: !loading ? '#323f57' : 'transparent' }}>
          {intro}
          <br />
          <br />
          <Trans
            i18nKey="home:body"
            components={[
              <UniversalLinks loading={loading} path={data?.eat} color={data?.eat?.color || '#91c8b3'} />,
              <UniversalLinks loading={loading} path={data?.wonder} color={data?.wonder?.color || '#c82a36'} />,
              <UniversalLinks loading={loading} path={data?.breathe} color={data?.breathe?.color || '#e2cc58'} />,
              <UniversalLinks loading={loading} path={data?.remember} color={data?.remember?.color || '#a78b77'} />,
              <UniversalLinks loading={loading} path={data?.dance} color={data?.dance?.color || '#78b7d3'} />,
            ]}
          />
        </section>

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
            font-size: 21px;
            line-height: 1.7;
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

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const data = await fetch(`${DERIVE_ADMIN_API_URL}/experiences/${EXPERIENCE_CODE}`);
//   return {
//     props: {
//       data: await data.json(),
//     },
//   };
// };

export default Home;
