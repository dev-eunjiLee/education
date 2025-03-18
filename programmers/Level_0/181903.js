function solution(q, r, code) {
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    console.log(i, q, r, i % q);
    if (i % q === r) answer = `${answer}${code[i]}`;
  }
  return answer;
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); //	"jerry"
console.log(solution(1, 0, "programmers")); //	"programmers"
