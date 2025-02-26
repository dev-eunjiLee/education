function solution(array) {
  let maxIndex = 0;
  let maxValue = array[maxIndex];
  for (const [index, elem] of array.entries()) {
    if (maxValue <= elem) {
      maxIndex = index;
      maxValue = elem;
    }
  }
  return [maxValue, maxIndex];
}

console.log(solution([1, 8, 0, 3]));
