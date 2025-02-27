function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => []);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i === j) {
        arr[i][j] = 1;
        arr[j][i] = 1;
      } else {
        arr[i][j] = 0;
        arr[j][i] = 0;
      }
    }
  }
  return arr;
}

console.log(solution(3));
