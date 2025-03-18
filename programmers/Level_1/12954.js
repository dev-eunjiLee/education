function solution(x, n) {
  console.log(x, n);
  const answer = [];

  for (let i = 0; i < n; i++) {
    const value = x * (i + 1);
    answer.push(value);
  }

  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
