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
