function solution(arr, k) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length >= k) break;
    if (!answer.includes(arr[i])) answer.push(arr[i]);
  }

  console.log(answer);

  if (answer.length < k) {
    answer.push(...Array.from({ length: k - answer.length }, (x) => -1));
  }

  return answer;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); //	[0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); //	[0, 1, -1, -1]
