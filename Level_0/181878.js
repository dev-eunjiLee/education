function solution(myString, pat) {
  return myString.toUpperCase().indexOf(pat.toUpperCase()) !== -1 ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc"));
