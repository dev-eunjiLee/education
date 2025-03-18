function solution(s) {
  let beforeValue = 0;
  return s.split(" ").reduce((prev, curr) => {
    let answer = prev;
    if (curr === "Z") {
      answer -= beforeValue;
    } else {
      answer += Number(curr);
      beforeValue = Number(curr);
    }
    return answer;
  }, 0);
}

console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); //100
console.log(solution("10 Z 20 Z 1")); //1
console.log(solution("10 Z 20 Z")); //0
console.log(solution("-1 -2 -3 Z")); //-3

console.log("/////////////////");

function solution2(s) {
  const stack = [];

  s.split(" ").forEach((elem) => {
    if (elem === "Z") stack.pop();
    else stack.push(+elem);
  });

  return stack.length ? stack.reduce((prev, curr) => prev + curr) : 0;
}

console.log(solution2("1 2 Z 3")); //4
console.log(solution2("10 20 30 40")); //100
console.log(solution2("10 Z 20 Z 1")); //1
console.log(solution2("10 Z 20 Z")); //0
console.log(solution2("-1 -2 -3 Z")); //-3
