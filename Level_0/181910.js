function solution(my_string, n) {
  const len = my_string.length;
  return my_string.slice(len - n, len);
}

console.log(solution("ProgrammerS123", 11));
