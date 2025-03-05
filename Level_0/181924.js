function solution(arr, queries) {
  queries.forEach(([i, j]) => {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
); //[3, 4, 1, 0, 2]
