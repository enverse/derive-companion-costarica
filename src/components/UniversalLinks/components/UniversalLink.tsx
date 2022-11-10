import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, FC } from 'react';
import useUrlParams from '../../../hooks/useUrlParams';
import { Path } from '../../../types/common';

type Props = {
  path?: Path;
  /**
   * Comes from react-international
   */
  children?: ReactNode;
};

const UNIVERSAL_LINKS_URL = 'https://app.derive.today';

const UniversalLinks: FC<Props> = ({ path, children }) => {
  const { query } = useRouter();
  const { get } = useUrlParams();
  if (!path) {
    return (
      <span>
        {children}
        <style jsx>
          {`
            span {
              color: white;
            }
          `}
        </style>
      </span>
    );
  }

  const { randomNextLocation, id: pathId } = path;

  if (!randomNextLocation) {
    return <Link href={{ pathname: `/${path.id}`, query }}>{children}➞</Link>;
  }

  const resetPath = get('resetPath');
  const resetPathStringParam = resetPath ? `&resetPath=${resetPath}` : '';

  return (
    <a
      href={`${UNIVERSAL_LINKS_URL}/?code=${
        randomNextLocation.derive.code
      }&pcode=${pathId}&backLink=${encodeURIComponent(`${window.location.href}`)}${resetPathStringParam}`}
    >
      {children}➞
    </a>
  );
};

export default UniversalLinks;
