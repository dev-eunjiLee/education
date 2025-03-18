function solution(num_list) {
  let multiplicationOfAll = 1;
  let sum = 0;

  for (const elem of num_list) {
    multiplicationOfAll *= elem;
    sum += elem;
  }

  // **: 지수연산자 => 거듭제곱을 표현할 때 사용 가능
  return multiplicationOfAll < sum ** 2 ? 1 : 0;
}
console.log(solution([3, 4, 5, 2, 1]));
