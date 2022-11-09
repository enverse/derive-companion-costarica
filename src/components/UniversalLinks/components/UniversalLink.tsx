import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, FC } from 'react';
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
    return <Link href={path.id}>{children}➞</Link>;
  }

  return (
    <a
      href={`${UNIVERSAL_LINKS_URL}/?code=${
        randomNextLocation.derive.code
      }&pcode=${pathId}&backLink=${encodeURIComponent(`${window.location.href}/?visited=${query.visited}`)}`}
    >
      {children}➞
    </a>
  );
};

export default UniversalLinks;
