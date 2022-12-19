/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12934
 */

function solution(n) {
  const squareRoot = Math.sqrt(n); // 제곱근
  if (Number.isInteger(squareRoot) && squareRoot > 0) {
    return (squareRoot + 1) ** 2;
  } else {
    return -1;
  }
}

console.log(solution(121)); //144
console.log(solution(3)); // -1
