function solution(my_string, k) {
  //   return Array.from({ length: k }, (_, i) => my_string).join("");
  return my_string.repeat(k);
}

console.log(solution("abc", 3));
