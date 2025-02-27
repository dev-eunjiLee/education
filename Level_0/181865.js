function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  let answer;

  switch (op) {
    case "+":
      answer = +a + +b;
      break;
    case "-":
      answer = +a - +b;
      break;
    case "*":
      answer = +a * +b;
      break;
  }

  return answer;
}

console.log(solution("43 + 12"));
