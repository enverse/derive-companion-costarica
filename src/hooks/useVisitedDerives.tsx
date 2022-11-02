import useUrlParams from './useUrlParams';

export default function useVisitedDerives() {
  const { get } = useUrlParams();
  return get('visited');
}
