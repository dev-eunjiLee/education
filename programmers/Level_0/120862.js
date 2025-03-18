function solution(numbers) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let x = 0; x < numbers.length; x++) {
    let y = x + 1;
    for (y; y < numbers.length; y++) {
      max = Math.max(numbers[x] * numbers[y], max);
      console.log(numbers[x], numbers[y], max);
    }
  }

  return max;
}

console.log(solution([1, 2, -3, 4, -5]));
