function solution(order) {
  let answer = 0;
  String(order)
    .split("")
    .forEach((elem) => {
      if (["3", "6", "9"].includes(elem)) answer++;
    });
  return answer;
}

console.log(solution(3));
