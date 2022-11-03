import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useCurrentPosition from '../hooks/useCurrentPosition';

export default function NoGeoloc() {
  const { error, position } = useCurrentPosition();
  const { push } = useRouter();

  useEffect(() => {
    if (!error && position) {
      push('/');
    }
  }, [error, push, position]);

  const { t } = useTranslation();
  const body = t('no-geoloc:body');
  return (
    <>
      <div>{body}</div>
      <style jsx>
        {`
          div {
            font-family: var(--BwNistaGeometricMed);
            font-size: 21px;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 45px;
          }
        `}
      </style>
    </>
  );
}
