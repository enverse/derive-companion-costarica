import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Navbar from '../components/Navbar';
import UniversalLinks from '../components/UniversalLinks';
// import useUrlParams from '../hooks/useUrlParams';
import useVisitedDerives from '../hooks/useVisitedDerives';
import { Path } from '../types/common';

const DERIVE_ADMIN_API_URL = process.env.NEXT_PUBLIC_DERIVE_ADMIN_API_URL;

type Props = {
  path?: Path;
};

export default function ResetPaths({ path }: Props) {
  const { t } = useTranslation();
  const visitedDerives = useVisitedDerives({ as: 'array' });
  const { push } = useRouter();

  const pathDerives = path?.locations.map(({ derive }) => derive.code);

  const handleReset = useCallback(() => {
    if (Array.isArray(visitedDerives)) {
      const newParams = visitedDerives.filter((deriveCode) => !pathDerives?.includes(deriveCode));
      push({ pathname: '/', query: { visited: newParams.join(',') } });
    }
  }, [visitedDerives, pathDerives, push]);

  const body = t('reset:body');

  return (
    <>
      <div>
        <Navbar />
        {body}
        <UniversalLinks onClick={handleReset} color={path?.color || 'blue'} path={path} reset />
      </div>
      <style jsx>
        {`
          div {
            font-family: var(--BwNistaGeometricMed);
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 45px;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'eat' } },
      { params: { slug: 'wonder' } },
      { params: { slug: 'breathe' } },
      { params: { slug: 'remember' } },
      { params: { slug: 'dance' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps<{ path: Path }> = async (context) => {
  const response = await fetch(
    // eslint-disable-next-line comma-dangle
    `${DERIVE_ADMIN_API_URL}/paths/${context.params?.slug}`,
  );
  const path = await response.json();
  return {
    // Passed to the page component as props
    props: { path },
  };
};
