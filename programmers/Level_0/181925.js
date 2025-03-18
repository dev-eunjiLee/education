function solution(numLog) {
  let answer = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    const diff = numLog[i + 1] - numLog[i];
    const value =
      diff === 1 ? "w" : diff === -1 ? "s" : diff === 10 ? "d" : "a";
    answer += value;
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
