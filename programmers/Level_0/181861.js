function solution(arr) {
  const answer = [];

  for (const elem of arr) {
    // answer += String(elem).repeat(elem);
    for (let i = 0; i < elem; i++) {
      answer.push(elem);
    }
  }

  return answer;
}

console.log(solution([5, 1, 4]));
console.log(solution([1]));
console.log(solution([6, 6]));
console.log(solution([10]));
