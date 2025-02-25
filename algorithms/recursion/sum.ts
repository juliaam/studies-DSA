const sum = (list: number[]) => {
  if (list.length === 0) return null
  if (list.length === 1) return list[0];

  return list.at(-1) + sum(list.slice(0, -1))
};