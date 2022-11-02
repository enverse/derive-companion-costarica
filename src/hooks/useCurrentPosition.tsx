import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

type Position = {
  lat: number | null;
  lng: number | null;
};

export default function () {
  const [postion, setPosition] = useState<Position>({ lat: null, lng: null });

  const { push } = useRouter();

  const handleSuccess = useCallback<PositionCallback>((position) => {
    setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, () => push('/no-geoloc'), { enableHighAccuracy: true });
  }, []);

  return postion;
}
