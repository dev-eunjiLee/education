function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, i) => {
    return i * 2 + 1;
  });
}

console.log(solution(10));
