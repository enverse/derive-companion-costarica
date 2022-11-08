import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import Navbar from '../components/Navbar';

import GooglePlay from '../../public/img/play_store.svg';
import AppStore from '../../public/img/apple_store.svg';
import DeriveLogoBlue from '../../public/img/derive-logo-blue.webp';

export default function ResetPaths() {
  const { t } = useTranslation();

  const intro = t('download-derive:intro');
  return (
    <>
      <main>
        <div>
          <Navbar logo={<Image height={16} alt="logo-blue" src={DeriveLogoBlue} />} />
          <div className="download-derive__body">
            <div>{intro}</div>
            <div className="download-derive__text">
              <Trans i18nKey="download-derive:body" components={[<b key={0} />]} />
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.heretic.derive" target="_blank" rel="noreferrer">
              <Image style={{ marginTop: 35 }} width={201} alt="google-play" src={GooglePlay} />
            </a>
            <a href="https://apps.apple.com/app/derive/id1464873017" target="_blank" rel="noreferrer">
              <Image style={{ marginTop: 35 }} width={201} alt="app-store" src={AppStore} />
            </a>
          </div>
        </div>
        <footer>
          <a href="https://derive.today" target="_blank" rel="noreferrer">
            www.derive.today
          </a>
        </footer>
      </main>
      <style jsx>
        {`
          main {
            font-family: var(--BwNistaGeometricMed);
            color: #323f57;
            display: flex;
            line-height: 1.3;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 45px;
          }

          .download-derive__body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .download-derive__text {
            margin-top: 25px;
          }

          .download-derive-store-logos {
            margin-top: 35px;
          }

          b {
            color: #68bedb;
          }

          footer {
            margin-top: 25px;
            text-decoration: underline;
            font-size: 13px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
