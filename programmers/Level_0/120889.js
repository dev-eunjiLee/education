function solution(sides) {
  const [max, ...remainder] = sides.sort((a, b) => b - a);
  return max >=
    remainder.reduce((prev, curr) => {
      return prev + curr;
    })
    ? 2
    : 1;
}

console.log(solution([1, 2, 3])); // 2
console.log(solution([3, 6, 2])); // 2
console.log(solution([199, 72, 222])); // 1
