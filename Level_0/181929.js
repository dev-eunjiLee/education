function solution(num_list) {
  let multiplicationOfAll = 1;
  let sum = 0;

  for (const elem of num_list) {
    multiplicationOfAll = multiplicationOfAll * elem;
    sum += elem;
  }

  return multiplicationOfAll < sum * sum ? 1 : 0;
}
console.log(solution([3, 4, 5, 2, 1]));
