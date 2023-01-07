/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120808
 */

function solution(denum1, num1, denum2, num2) {
  // 최소공배수로 분모, 분자 맞추기
  let leastCommonMultiple = Math.max(num1, num2);

  while (
    !(leastCommonMultiple % num1 === 0 && leastCommonMultiple % num2 === 0)
  ) {
    leastCommonMultiple++;
  }

  const answer = [];

  answer[1] = leastCommonMultiple;
  answer[0] =
    (leastCommonMultiple / num1) * denum1 +
    (leastCommonMultiple / num2) * denum2;

  // 최대공약수로 기약분수 만들기
  let greatestCommonDivisor = Math.min(...answer);

  while (
    !(
      answer[0] % greatestCommonDivisor === 0 &&
      answer[1] % greatestCommonDivisor === 0
    )
  ) {
    greatestCommonDivisor--;
  }

  answer[1] /= greatestCommonDivisor;
  answer[0] /= greatestCommonDivisor;

  return answer;
}
