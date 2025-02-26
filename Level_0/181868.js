function solution(my_string) {
  return my_string.split(" ").filter((elem) => elem !== "");
}

console.log(solution("  programmers"));
