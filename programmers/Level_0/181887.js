function solution(num_list) {
  let sum1 = 0;
  let sum2 = 0;

  num_list.forEach((elem, index) => {
    index % 2 === 0 ? (sum1 += elem) : (sum2 += elem);
  });

  return Math.max(sum1, sum2);
}

console.log(solution([4, 2, 6, 1, 7, 6]));
