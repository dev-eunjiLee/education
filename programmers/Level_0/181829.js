function solution(board, k) {
  let answer = 0;
  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= k; j++) {
      const sum = i + j;
      if (sum <= k) {
        console.log(i, j);
        const value = board[i]?.[j];
        if (value) {
          answer += value;
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);
