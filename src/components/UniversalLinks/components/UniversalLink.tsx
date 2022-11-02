import Link from 'next/link';

type Props = {
  path?: Path;
  /**
   * Comes from react-international
   */
  children?: React.ReactNode;
};

const UNIVERSAL_LINKS_URL = 'https://app.derive.today';

const UniversalLinks: React.FC<Props> = ({ path, children }) => {
  if (!path) {
    return (
      <span>
        {children}
        <style jsx>{`
          span {
            color: white;
          }
        `}</style>
      </span>
    );
  }

  const { randomNextLocation, id: pathId } = path;

  if (!randomNextLocation) {
    return <Link href="/reset-path">{children}➞</Link>;
  }

  return (
    <a
      href={`${UNIVERSAL_LINKS_URL}/?code=${
        randomNextLocation.derive.code
      }&pcode=${pathId}&backLink=${encodeURIComponent(window.location.href)}`}
    >
      {children}➞
    </a>
  );
};

export default UniversalLinks;
