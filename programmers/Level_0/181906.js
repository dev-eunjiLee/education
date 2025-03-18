function solution(my_string, is_prefix) {
  return my_string.indexOf(is_prefix) !== 0 ? 0 : 1;
}

console.log(solution("banana", "ban"));
console.log(solution("banana", "nan"));
