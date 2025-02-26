function solution(num_list) {
  let answer;
  if (num_list.length > 10) {
    answer = num_list.reduce((prev, curr) => {
      return prev + curr;
    });
  } else {
    answer = num_list.reduce((prev, curr) => {
      return curr * prev;
    });
  }
  return answer;
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));
