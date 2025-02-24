function solution(my_string, k) {
  return Array.from({ length: k }, (_, i) => my_string).join("");
}

console.log(solution("abc", 3));
