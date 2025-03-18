function solution(numbers, k) {
  while ((k - 1) * 2 > numbers.length) {
    numbers.push(...numbers);
  }

  return numbers[(k - 1) * 2];
}

console.log(solution([1, 2, 3, 4], 2)); //3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); //	3
console.log(solution([1, 2, 3], 3)); //2
