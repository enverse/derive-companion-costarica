import useTranslation from 'next-translate/useTranslation';

import Navbar from '../components/Navbar';

const partners = [
  'Árboles Mágicos',
  'Café Rojo',
  'Centro para la Sostenibilidad Urbana',
  'Centro Cultural Key Largo',
  'Chepecletas',
  'Óscar Benavides',
  'Andrés Fernández',
  'Federico Lang',
  'Carla Quesada',
  'Cristina Quirós',
];

export default function Partners() {
  const { t } = useTranslation();

  const body = t('partners:body');
  return (
    <>
      <main>
        <div>
          <Navbar />
          {body}
          <ul>
            {partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
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
        `}
      </style>
    </>
  );
}
