import UniversalLinks from './components/UniversalLink';

type Props = {
  children?: React.ReactNode;
  color: string;
  path?: Path;
  loading: boolean;
};

const UniversalLinksWrapper: React.FC<Props> = ({ color, children, path }) => {
  return (
    <>
      <span>
        <UniversalLinks path={path}>{children}</UniversalLinks>
      </span>
      <style jsx>{`
        span {
          color: ${color};
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default UniversalLinksWrapper;
