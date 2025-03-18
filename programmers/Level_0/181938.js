function solution(a, b) {
  return Math.max(Number(`${a}${b}`), 2 * +a * +b);
}

console.log(solution(2, 91));
