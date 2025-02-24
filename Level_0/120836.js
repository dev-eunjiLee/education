function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (elem) => n % elem === 0
  ).length;
}

console.log(solution(20)); // 6
