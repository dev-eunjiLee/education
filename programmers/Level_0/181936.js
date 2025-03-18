function solution(number, n, m) {
  let answer = 1;
  for (const elem of [n, m]) {
    if (number % elem !== 0) {
      answer--;
      break;
    }
  }
  return answer;
}

console.log(solution(60, 2, 3));
