import useUrlParams from './useUrlParams';

type Params = {
  as?: 'string' | 'array';
  pathId?: string;
};

const KNOWN_PATHS = ['51', '52', '53', '54', '55'];

/**
 *
 * @param config: {as "as string or array ?", pathId: id of path to get, if null will get all of them}
 * @returns string or array
 */
export default function useVisitedDerives(params?: Params) {
  /** Set default values */
  const { as, pathId } = params || { as: 'string', pathId: null };
  const { get } = useUrlParams();

  /** if no pathID is given, just return all of the ones in 'known paths' */
  const visited = pathId
    ? get(pathId)
    : KNOWN_PATHS.reduce((acc: string[], knownPathId) => {
        const visitedDerives = get(knownPathId);
        if (visitedDerives) {
          return [...acc, ...visitedDerives.split(',')];
        }
        return acc;
      }, []);
  if (as === 'array' && typeof visited === 'string') {
    return visited.split(',');
  }

  if (as === 'string' && Array.isArray(visited)) {
    return visited.join(',');
  }

  return visited;
}
