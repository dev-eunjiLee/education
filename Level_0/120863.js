function solution(polynomial) {
  let xCnt = 0;
  let cnt = 0;

  polynomial.split(" + ").forEach((elem) => {
    if (elem.includes("x")) {
      if (elem === "x") xCnt += 1;
      else xCnt += Number(elem.split("x")[0]);
    } else {
      cnt += Number(elem);
    }
  });

  let answer = "";

  if (xCnt === 0) answer = "";
  else if (xCnt === 1) answer = `x`;
  else answer = `${xCnt}x`;

  if (cnt === 0) answer = answer;
  else {
    if (answer === "") answer = `${cnt}`;
    else answer = `${answer} + ${cnt}`;
  }

  return answer;
}

console.log(solution("3x + 7 + x")); //"4x + 7"
console.log(solution("x + x + x")); //"3x"
console.log(solution("99x")); //"99x"
console.log(solution("1")); //1
