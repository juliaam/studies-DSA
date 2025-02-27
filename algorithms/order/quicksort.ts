export const quicksort = (list: number[]) => {
  if (list.length < 2) return list

  const pivot = list[Math.floor(list.length / 2)] // taking the middle index 
  let minorList: number[] = []
  let majorList: number[] = []
  
  list.forEach((number) => {
    if (number < pivot) {
      minorList.push(number)
      return
    } 
    if (number > pivot) {
      majorList.push(number)
      return
    }
  })
  return [...quicksort(minorList), pivot, ...quicksort(majorList)]
}

console.log(quicksort([1, 76, 86, 2, 34, 5, 6, 12, 2, 3, 6, 4]))