import { ReactNode, FC } from 'react';
import { Path } from '../../types/common';
import UniversalLinks from './components/UniversalLink';

type Props = {
  children?: ReactNode;
  color: string;
  path?: Path;
  reset?: boolean;
  onClick?: () => void;
  // loading: boolean;
};

const UniversalLinksWrapper: FC<Props> = ({ color, children, path, reset, onClick }) => (
  <>
    <span>
      {reset ? (
        <button type="button" onClick={onClick}>
          {children} ➞
        </button>
      ) : (
        <UniversalLinks path={path}>{children}</UniversalLinks>
      )}
    </span>
    <style jsx>
      {`
        span {
          color: ${color};
          border-bottom: 2px solid ${color};
          width: fit-content;
        }
        button {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
      `}
    </style>
  </>
);

export default UniversalLinksWrapper;
