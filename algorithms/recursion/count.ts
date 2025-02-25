export const count = (list: any[]) => {
  if (list.length === 0) return null
  if (list.length === 1) return 1;

  return 1 + count(list.slice(0, -1))
  
}
console.log(count([]))