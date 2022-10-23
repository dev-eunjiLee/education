function solution(a, b) {
  let answer = 0;

  let [bigNumber, smallNumber] = [a, b].sort((a, b) => b - a);
  for (smallNumber; smallNumber <= bigNumber; smallNumber++) {
    answer += smallNumber;
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
