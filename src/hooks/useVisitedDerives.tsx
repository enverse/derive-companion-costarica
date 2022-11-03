import useUrlParams from './useUrlParams';

export default function useVisitedDerives({ as }: { as?: 'string' | 'array' } = { as: 'string' }) {
  const { get } = useUrlParams();
  const visited = get('visited') || '';
  if (as === 'array') {
    return visited?.split(',');
  }

  return visited;
}
