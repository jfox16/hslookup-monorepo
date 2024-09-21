
export const joinArrayWithAnd = (items: string[]): string => {
  items = items.filter(item => {
    return item !== undefined && item !== null && item !== '';
  })

  const length = items.length;

  if (length === 0) return '';
  if (length === 1) return items[0];
  if (length === 2) return items.join(' and ');

  const lastItem = items.pop();
  return `${items.join(', ')}, and ${lastItem}`;
}
