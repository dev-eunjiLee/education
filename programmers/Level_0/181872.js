function solution(myString, pat) {
  const lastIndex = myString.lastIndexOf(pat);
  return myString.slice(0, lastIndex + pat.length);
}

console.log(solution("AbCdEFG", "dE")); // 'AbCdE'
console.log(solution("AAAAaaaa", "a")); // 	"AAAAaaaa"
