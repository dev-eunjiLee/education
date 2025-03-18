function solution(rsp) {
  let answer = "";
  let pair = {
    0: 5,
    2: 0,
    5: 2,
  };
  for (const elem of rsp.split("")) {
    answer += pair[elem];
  }
  return answer;
}

// console.log(solution("2"));
console.log(solution("205"));
