import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default () => {
  const { query } = useRouter();

  const urlParams = new URLSearchParams(query as Record<string, string>);

  const get = useCallback((key: string) => urlParams.get(key), []);
  const set = useCallback((key: string, value: string) => urlParams.set(key, value), []);
  const deleteItem = useCallback((key: string, value: string) => urlParams.set(key, value), []);

  return { get, set, deleteItem };
};
