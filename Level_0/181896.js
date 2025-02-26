function solution(num_list) {
  let answer = -1;
  for (const [index, elem] of num_list.entries()) {
    if (elem < 0) {
      answer = index;
      break;
    }
  }
  return answer;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
