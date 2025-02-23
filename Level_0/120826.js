function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

console.log(solution("abcdef", "f"));
console.log(solution("BCBdbe", "B"));
