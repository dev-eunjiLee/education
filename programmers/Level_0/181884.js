function solution(numbers, n) {
  let sum = 0;
  for (const elem of numbers) {
    sum += elem;
    if (sum > n) break;
  }
  return sum;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
