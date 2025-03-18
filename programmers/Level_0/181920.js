function solution(start_num, end_num) {
  const answer = [];
  for (let index = start_num; index <= end_num; index++) {
    answer.push(index);
  }
  return answer;
}

console.log(solution(3, 10));
