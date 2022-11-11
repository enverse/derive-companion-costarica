import Image from 'next/image';
import DeriveArrow from '../../public/img/derive_arrow.svg';

export default function Loader() {
  return <Image alt="derive-loader" src={DeriveArrow} />;
}
