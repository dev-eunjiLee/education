function solution(n) {
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    // 1, 2 이하의 숫자 중 합성 수는 없기 때문에 3부터 시작
    for (let j = 2; j < i; j++) {
      // 1과 본인은 이미 약수에 해당하기 때문에 숫자의 범위를 2 ~ 본인 직전까지만 설정함
      console.log(i, j);
      // 하나라도 나눠떨어지는 경우 1, 본인을 포함했을때 3개의 약수가 생기기 때문에 sum에 추가하고 break한다.
      if (i % j === 0) {
        sum++;
        break;
      }
    }
  }
  return sum;
}

console.log(solution(10)); // 5
