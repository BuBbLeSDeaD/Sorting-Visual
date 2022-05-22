export async function* SelectionSort(
  array,
  swap,
  highlight,
  marksort,
  sortingOrder
) {
  for (let i = 0; i < array.length; i++) {
    let maxIndex = 0
    for (var j = 0; j < array.length - i; j++) {
      yield await highlight([maxIndex, j])
      if (sortingOrder == 1) {
        if (array[maxIndex] < array[j]) {
          maxIndex = j
        }
      } else {
        if (array[maxIndex] > array[j]) {
          maxIndex = j
        }
      }
    }

    j = j - 1
    if (maxIndex !== j && array[maxIndex] !== array[j]) {
      yield await swap(maxIndex, j)
    }

    marksort(j)
    yield
  }
}
