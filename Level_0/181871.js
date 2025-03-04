function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, pat.length + i) === pat) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("banana", "ana"));
console.log(solution("aaaa", "aa"));
