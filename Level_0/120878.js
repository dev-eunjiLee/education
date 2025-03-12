function solution(a, b) {
  // 1. 최소공약수 구하기(gcd: Greatest Common Divisor)
  let gcd = Math.min(a, b);

  // 최소공약수로 두 수를 나누면 모두 나눠떨어져야한다. 0이 될 수 없다.
  while ((a % gcd !== 0 || b % gcd !== 0) && gcd > 1) {
    gcd--;
  }

  console.log({ gcd });

  // 2. 기약분수로 나타냈을 때 분모값 구하기
  b = b / gcd;

  // 3. 기약분수로 나타낸 값의 분모의 소인수가 2와 5만 존재하는지 확인 => 2와 5로만 존재하면 true
  let n = b;

  while (n > 0) {
    if (n % 5 === 0) {
      n /= 5;
    } else if (n % 2 === 0) {
      n /= 2;
    } else {
      break;
    }
  }

  let answer = 1; // 유한소수
  if (n !== 1) answer = 2; // 무한소수

  return answer;
}

console.log(solution(7, 20)); //	1
console.log(solution(11, 22)); //	1
console.log(solution(12, 21)); //	2
