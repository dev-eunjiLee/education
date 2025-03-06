function solution(n) {
  let answer = 1;
  let multiplication = 1;
  while (multiplication < n) {
    // 기존의 answer를 이용해 multiplication 값을 구한 후 그 값이 유효한 경우 answer++
    multiplication *= answer + 1;
    if (multiplication <= n) answer++;
  }
  return answer;
}

console.log(solution(3628800)); // 10
console.log(solution(7)); // 3
console.log(solution(1)); // 1
