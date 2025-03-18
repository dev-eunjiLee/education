function solution(n, control) {
  const obj = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  let answer = n;

  for (let elem of control.split("")) {
    answer += +obj[elem];
  }

  return answer;
}

console.log(solution(0, "wsdawsdassw"));
