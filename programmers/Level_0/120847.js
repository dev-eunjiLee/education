function solution(numbers) {
  const [first, second, ...remainder] = numbers.sort((a, b) => b - a);
  return first * second;
}

console.log(solution([1, 2, 3, 4, 5])); //	20
console.log(solution([0, 31, 24, 10, 1, 9])); //	744
