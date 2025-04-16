function solution(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) arr[i] = 0;
    else if (i === 1) arr[i] = 1;
    else if (i === 2) arr[i] = 2;
    else {
      // 모듈러 연산
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
  }
  return arr[n] % 1234567;
}

console.log(solution(4)); //5
console.log(solution(3)); //3
console.log(solution(1)); // 1
