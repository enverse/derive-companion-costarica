import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import UniversalLinks from '../components/UniversalLinks';
import useCurrentPosition from '../hooks/useCurrentPosition';
import useVisitedDerives from '../hooks/useVisitedDerives';

import type { Experience, Path } from '../types/common';
import Navbar from '../components/Navbar';

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
  const { t } = useTranslation();
  const { position, error } = useCurrentPosition();

  const visitedDerives = useVisitedDerives();

  const { push } = useRouter();

  if (error && !position) {
    push('/no-geoloc');
  }

  const lng = position?.lng;
  const lat = position?.lat;
  const queryString = `?lat=${position?.lat}&lng=${position?.lng}&toExclude=${visitedDerives}`;

  useEffect(() => {
    const getAndSetPaths = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          // eslint-disable-next-line comma-dangle
          `${DERIVE_ADMIN_API_URL}/experiences/${EXPERIENCE_CODE}/${queryString}`,
        );
        const jsonResponse = (await response.json()) as Experience;
        const paths = getPaths(jsonResponse.paths);
        setData(paths);
        setLoading(false);
      } catch (e) {
        setLoading(false);

        // eslint-disable-next-line no-console
        console.error(e);
        if (process.env.NODE_ENV === 'development') {
          throw new TypeError('Ops, Something went wrong on our end');
        }
        await push('/500');
      }
    };

    if (lat && lng) {
      getAndSetPaths();
    }
  }, [lat, lng, push, queryString]);

  const intro = t('home:intro');
  const footer = t('home:footer');
  const footerLinkText = t('home:footer-link-text');

  return (
    <>
      <main>
        <Navbar />
        <section style={{ color: !loading ? '#323f57' : 'transparent' }}>
          {intro}
          <br />
          <br />
          <Trans
            i18nKey="home:body"
            components={[
              <UniversalLinks key="eat" path={data?.eat} color={data?.eat?.color || '#91c8b3'} />,
              <UniversalLinks
                key="wonder"
                // loading={loading}
                path={data?.wonder}
                color={data?.wonder?.color || '#c82a36'}
              />,
              <UniversalLinks
                key="breathe"
                // loading={loading}
                path={data?.breathe}
                color={data?.breathe?.color || '#e2cc58'}
              />,
              <UniversalLinks
                key="remember"
                // loading={loading}
                path={data?.remember}
                color={data?.remember?.color || '#a78b77'}
              />,
              <UniversalLinks
                key="dance"
                // loading={loading}
                path={data?.dance}
                color={data?.dance?.color || '#78b7d3'}
              />,
            ]}
          />
        </section>

        <footer>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {footer}{' '}
          <a href="https://derive.today/" target="_blank" rel="noreferrer">
            {footerLinkText}
          </a>
        </footer>
      </main>
      <style jsx>
        {`
          main {
            font-family: var(--BwNistaGeometricMed);
            color: #323f57;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 45px;
          }

          section {
            line-height: 1.7;
          }

          footer {
            font-size: 13px;
            text-align: center;
          }

          footer a {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default Home;
