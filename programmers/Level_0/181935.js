function solution(n) {
  const isEven = n % 2 === 0;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    isInnerEven = i % 2 === 0;
    if (isEven && isInnerEven) {
      answer += i ** 2;
    } else if (!isEven && !isInnerEven) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220
