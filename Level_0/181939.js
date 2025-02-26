function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

console.log(solution(9, 91));
