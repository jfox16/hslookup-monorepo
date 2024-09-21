
export const arrayToLookupMap = <T extends Record<any, any>, K extends keyof T>(
  arr: T[],
  keyField: K
) => {
  const lookupMap: Record<T[K], T> = Object.create(null);

  for (const item of arr) {
    lookupMap[item[keyField]] = item;
  }

  return lookupMap;
}
