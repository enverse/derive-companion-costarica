import { ReactNode, FC } from 'react';
import { Path } from '../../types/common';
import UniversalLinks from './components/UniversalLink';

type Props = {
  children?: ReactNode;
  color: string;
  path?: Path;
  // loading: boolean;
};

const UniversalLinksWrapper: FC<Props> = ({ color, children, path }) => (
  <>
    <span>
      <UniversalLinks path={path}>{children}</UniversalLinks>
    </span>
    <style jsx>
      {`
        span {
          color: ${color};
          text-decoration: underline;
        }
      `}
    </style>
  </>
);

export default UniversalLinksWrapper;
