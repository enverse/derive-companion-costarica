import { ReactNode } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AllianceLogo from '../public/img/Logo_AF_CR.png';
import DeriveLogo from '../public/img/LogoAccentFondBlanc.svg';

type Props = {
  logo?: ReactNode;
};

export default function Navbar({ logo }: Props) {
  const { lang: currentLocale } = useTranslation();
  const { pathname } = useRouter();

  const langLinks = ['fr', 'es'];

  return (
    <>
      <nav>
        <div className="navbar__logo-container">
          <Link style={{ display: 'flex', alignItems: 'top' }} href="/" locale={currentLocale}>
            {logo ?? (
              <>
                <Image height={20} alt="alliance-logo" src={AllianceLogo} />
                <Image style={{ marginLeft: 15 }} height={15} alt="derive-logo" src={DeriveLogo} />
              </>
            )}
          </Link>
        </div>
        <div className="home__language-links-block">
          {langLinks.map((langLink, idx) => (
            // TODO fix this css selectio
            <div key={langLink}>
              <Link
                href={pathname}
                locale={langLink}
                className={`home__langague-links ${currentLocale === langLink ? 'home__language-links--disabled' : ''}`}
              >
                {langLink.toLocaleUpperCase()}
              </Link>
              {idx < langLinks.length - 1 && ' — '}
            </div>
          ))}
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            // flex-direction: row;
            justify-content: space-between;
            font-size: 15px;
            padding-bottom: 45px;
            width: 100%;
          }
          .home__language-links-block {
            font-family: var(--BwNistaGeometricMed);

            display: flex;
          }

          a {
            text-decoration: underline;
          }

          .navbar__logo-container a {
            display: flex;
            align-items: top;
          }

          .navbar__logo-container img {
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
}
