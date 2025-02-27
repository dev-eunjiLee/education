function solution(num_list) {
  const len = num_list.length;

  const diff = num_list[len - 1] - num_list[len - 2];

  let answer = diff;
  if (diff <= 0) {
    answer = num_list[len - 1] * 2;
  }

  num_list.push(answer);

  return num_list;
}

console.log(solution([2, 1, 6]));
