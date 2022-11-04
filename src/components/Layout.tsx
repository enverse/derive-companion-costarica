import { ReactNode } from 'react';
import localFont from '@next/font/local';

type Props = {
  children: ReactNode;
};

// const bwNistaGeometricBlack = localFont({
//   src: '../public/fonts/BwNistaGeometric-Black.otf',
//   variable: '--BwNistaGeometricReg',
// });
// const bwNistaGeometricLight = localFont({
//   src: '../public/fonts/BwNistaGeometric-Light.otf',
//   variable: '--BwNistaGeometricLight',
// });

const bwNistaGeometric = localFont({
  src: '../../public/fonts/BwNistaGeometric-Regular.otf',
  variable: '--BwNistaGeometric',
});

const bwNistaGeometricMed = localFont({
  src: '../../public/fonts/BwNistaGeometric-Medium.otf',
  variable: '--BwNistaGeometricMed',
});

export default function Layout({ children }: Props) {
  // TODO CHANGE DIV TO MORE NORAML THING
  return (
    <>
      <div className={`${bwNistaGeometric.variable} ${bwNistaGeometricMed.variable}`}>{children}</div>
      <style jsx>
        {`
          div {
            font-family: var(--BwNistaGeometricMed);
            font-size: 19px;
            height: 100%;
          }
        `}
      </style>
    </>
  );
}
