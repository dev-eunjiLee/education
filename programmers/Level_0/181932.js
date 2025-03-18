function solution(code) {
  let mode = 0;
  let answer = "";

  [...code].forEach((elem, idx) => {
    // "1"인 경우 모드 변경
    if (elem === "1") mode = mode === 0 ? 1 : 0;
    else {
      if (mode === 0 && idx % 2 === 0) answer = `${answer}${elem}`;
      else if (mode === 1 && idx % 2 === 1) answer = `${answer}${elem}`;
    }
  });

  if (answer === "") answer = "EMPTY";

  return answer;
}

console.log(solution("abc1abc1abc")); //	"acbac"
