function solution(d, budget) {
  d.sort((a, b) => a - b);

  let i = 0;
  while (budget - d[i] >= 0 && i < d.length) {
    budget -= d[i++]; // d[i]의 값을 budget에서 뺀 후 ++ 진행
  }

  return i;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4
console.log(solution([2], 1)); // 0
console.log(solution([2], 2)); // 1
console.log(solution([1], 1)); // 1
console.log(solution([100, 1], 50)); // 1
console.log(solution([100, 1], 101)); // 2
console.log(solution([3, 3, 3], 9)); // 3
console.log(solution([3, 3, 3], 8)); // 2
console.log(solution([1, 1, 1, 1, 5, 10], 15)); //5
console.log(solution([14], 15)); //1
