function solution(num_list, n) {
  return num_list.slice(n - 1, num_list.length + 1);
}

console.log(solution([2, 1, 6], 3));
