export type DeepArray<T> = ArrayLike<T | DeepArray<T>>;

export const isArray = Array.isArray;
