function solution(my_string, n) {
  return my_string
    .split("")
    .map((x) => {
      return Array.from({ length: n }, () => x).join("");
    })
    .join("");
}

console.log(solution("hello", 3));
