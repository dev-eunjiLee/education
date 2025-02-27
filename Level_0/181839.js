function solution(a, b) {
  const [isEvenA, isEvenB] = [a, b].map((elem) => elem % 2 === 0);

  console.log(isEvenA, isEvenB);

  let answer;
  // 둘 다 짝수인 경우
  if (isEvenA && isEvenB) answer = Math.abs(a - b);
  // 둘 다 홀수인 경우
  else if (!isEvenA && !isEvenB) answer = a ** 2 + b ** 2;
  // 둘 중 하나만 짝수인 경우
  else answer = 2 * (a + b);

  return answer;
}

console.log(solution(3, 5));
console.log(solution(6, 1));
