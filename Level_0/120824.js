function solution(num_list) {
  const answer = [0, 0];

  num_list.forEach((element) => {
    if (element % 2 === 0) answer[0]++;
    else answer[1]++;
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
