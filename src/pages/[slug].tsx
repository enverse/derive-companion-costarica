import { GetStaticPaths, GetStaticProps, GetStaticPathsResult } from 'next';
import Trans from 'next-translate/Trans';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Navbar from '../components/Navbar';
import UniversalLinks from '../components/UniversalLinks';
import useUrlParams from '../hooks/useUrlParams';
// import useUrlParams from '../hooks/useUrlParams';
import { Path } from '../types/common';

const DERIVE_ADMIN_API_URL = process.env.NEXT_PUBLIC_DERIVE_ADMIN_API_URL;

type Props = {
  path?: Path;
};

export default function ResetPaths({ path }: Props) {
  const { deleteItem, set, getAllAsString } = useUrlParams();
  const { push } = useRouter();

  const handleReset = useCallback(() => {
    // if (Array.isArray(visitedDerives)) {
    // const newParams = visitedDerives.filter((deriveCode) => !pathDerives?.includes(deriveCode));
    /** Need t also reset path in app */
    if (path) {
      deleteItem(path.id);
      set('resetPath', path?.id);
    }
    push({ pathname: '/', query: getAllAsString() });
    // }
  }, [deleteItem, push, set, path, getAllAsString]);

  return (
    <>
      <div>
        <Navbar />
        <Trans
          i18nKey="reset:body"
          components={[
            <UniversalLinks key={0} onClick={handleReset} color={path?.color || 'blue'} path={path} reset />,
          ]}
        />
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const staticPathsResult: GetStaticPathsResult = {
    paths: [],
    fallback: false,
  };
  const slugs = ['51', '52', '53', '54', '55'];

  slugs.forEach((slug) => {
    ctx.locales?.forEach((locale) => {
      staticPathsResult.paths.push({ params: { slug }, locale });
    });
  });

  return staticPathsResult;
};

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
