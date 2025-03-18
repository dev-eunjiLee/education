function solution(my_string) {
  const answer = [];
  const len = my_string.length;

  for (let i = 1; i <= my_string.length; i++) {
    answer.push(my_string.slice(len - i, len));
  }

  return answer.sort();
}

console.log(solution("banana"));
