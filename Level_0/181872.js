function solution(myString, pat) {
  let stringLen = myString.length;
  let patLen = pat.length;

  let answer = "";

  for (let index = stringLen - 1; index > 0; index--) {
    const value = myString.slice(index - patLen + 1, index + 1);
    console.log("index", index, " /// ", "value", value, " /// ", pat);
    if (value === pat) {
      answer = myString.slice(0, index + 1);
      break;
    }
  }
  return answer;
}

// console.log(solution("AbCdEFG", "dE")); // 'AbCdE'
console.log(solution("AAAAaaaa", "a")); // 	"AAAAaaaa"
