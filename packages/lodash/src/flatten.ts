import { isArray, DeepArray } from './utils';
/**
 * Flattens `array`
 * @param array The array to flatten.
 * @param deep Is deep flatten?
 * @returns Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 *
 * flatten([1, [2, [3, [4]], 5]], true)
 * // => [1, 2, 3, 4, 5]
 */
export function flatten<T>(array?: (DeepArray<T> | null), deep?: boolean): T[] {
  let result: T[] = [];

  if (!array) {
    return result;
  }
  const len = array.length;
  for (let i=0; i<len; i++) {
    const p = array[i];
    if (isArray(p) && deep) {
      result = result.concat(flatten(p, true));
    } else if (isArray(p)) {
      result = result.concat(p as Array<T>);
    } else {
      result = result.concat([p as T]);
    }
  }
  return result;
}
