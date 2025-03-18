function solution(n, k) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const value = i * k;
    if (value <= n) {
      answer.push(value);
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution(10, 3));
console.log(solution(15, 5));
