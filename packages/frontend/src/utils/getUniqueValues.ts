
export const getUniqueValues = (items: any[]) => {
  const valueSet = new Set();

  items.forEach((item) => {
    valueSet.add(item);
  })

  return valueSet;
}
