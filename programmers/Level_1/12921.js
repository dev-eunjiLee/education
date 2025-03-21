function solution(n) {
  // 1 ~ n까지의 수에 대한 소수 여부를 표현할 수 있는 배열 생성(default: true)
  const arr = Array.from({ length: n + 1 }, () => true);
  // 1 ~ n까지의 수 중 소수인 정수의 개수를 표현하는 변수 생성(default: n)
  let count = n;

  // [1]은 소수가 아니기 때문에 제외
  count--;
  arr[1] = false;

  // 반복문을 돌면서 해당 반복문의 i를 j회차 곱한 값을 v라고 했을 때, 그 v가 n보다 작은 경우, 약수가 2개 이상이라고 할 수 있다.
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j * i <= n; j++) {
      if (arr[i * j] === true) {
        // console.log({ n, i, j, "arr[i * j]": arr[i * j], count });
        arr[i * j] = false;
        count--;
      }
    }
  }

  return count;
}

console.log(solution(10)); //4
console.log(solution(5)); //3
