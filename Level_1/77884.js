function solution(left, right) {
  let sum = 0;
  for (let elem = left; elem <= right; elem++) {
    if (elem === 1) sum -= 1;
    else if (elem === 2) sum += 2;
    else {
      let cnt = 2; // 1, elem
      for (let i = 2; i < elem; i++) {
        if (elem % i === 0) cnt++;
      }
      if (cnt % 2 === 0) sum += elem;
      else sum -= elem;
    }
  }

  return sum;
}

// console.log(solution(13, 17)); //43
// console.log(solution(24, 27)); //52
console.log(solution(1, 2)); // 1

function solution2(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    // Math.sqrt(n) >> n의 제곱근을 리턴
    // 제곱근이 정수면 약수의 개수가 홀수다
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution2(13, 17)); //43
console.log(solution2(24, 27)); //52
console.log(solution2(1, 2)); // 1
