
export const mapArrayById = <T extends {id: number}>(items: T[]) => {
  const map: Record<number, T> = {};
  for (const item of items) {
    map[item.id] = item;
  }
  return map;
}
