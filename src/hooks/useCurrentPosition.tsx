import { useCallback, useEffect, useState } from 'react';

type Position = {
  lat: number | null;
  lng: number | null;
};

export default function useCurrentPosition() {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  const handleSuccess = useCallback<PositionCallback>((newPosition) => {
    setPosition({ lat: newPosition.coords.latitude, lng: newPosition.coords.longitude });
  }, []);

  const errorCallback = useCallback((permissionError: GeolocationPositionError) => setError(permissionError), []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, errorCallback, { enableHighAccuracy: true });
  }, [handleSuccess, errorCallback]);

  return { position, error };
}
