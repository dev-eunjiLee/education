function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    // 숫자는 1씩 증가하는 것이 기본
    answer++;
    // 단, 3의 배수이거나 숫자에 3이 들어가는 경우는 1씩 추가로 증가해서 제외시켜야함
    while (true) {
      if (answer.toString().includes(3) || answer % 3 === 0) answer++;
      else break;
    }
  }
  return answer;
}

console.log(solution(15)); //25
console.log(solution(40)); //76
