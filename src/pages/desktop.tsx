import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import DeriveLogo from '../public/img/LogoAccentFondViolet.png';

const Desktop: NextPage = () => {
  const { t } = useTranslation();

  const body = t('desktop:body');
  return (
    <>
      <main>
        <div className="desktop__logo">
          <Image src={DeriveLogo} alt="derive-logo" />
        </div>
        <div>{body}</div>
      </main>

      <style jsx>
        {`
          main {
            background-color: #32006a;
            height: 100%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            line-height: 1.5;
            font-size: 30px;
          }

          div {
            height: 50%;
          }

          .desktop__logo {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Desktop;
