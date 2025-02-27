function solution(my_string) {
  return my_string
    .replaceAll(/[a-z]/g, "")
    .split("")
    .sort((a, b) => a - b)
    .map((elem) => Number(elem));
}

console.log(solution("hi12392"));
