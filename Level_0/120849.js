function solution(my_string) {
  return my_string.replace(/a|e|i|o|u/g, "");
}

console.log(solution("bus")); // bs
