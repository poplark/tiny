/**
 * Flattens `array` a single level deep.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
type DeepArray<T> = ArrayLike<T | DeepArray<T>>;

const isArray = Array.isArray;

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
