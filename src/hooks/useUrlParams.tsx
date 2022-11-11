import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export default () => {
  const { query } = useRouter();

  const urlParams = useMemo(() => new URLSearchParams(query as Record<string, string>), [query]);

  const get = useCallback((key: string) => urlParams.get(key), [urlParams]);
  const set = useCallback((key: string, value: string) => urlParams.set(key, value), [urlParams]);
  const deleteItem = useCallback((key: string) => urlParams.delete(key), [urlParams]);
  const getAllAsString = useCallback(() => urlParams.toString(), [urlParams]);

  return { get, set, deleteItem, getAllAsString };
};
