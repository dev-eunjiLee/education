function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    // console.log("------------");
    // console.log(s, e, k);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = s; i <= e; i++) {
      //   console.log(i);
      if (arr[i] > k) {
        min = Math.min(min, arr[i]);
      }
    }
    if (min === Number.MAX_SAFE_INTEGER) min = -1;
    return min;
  });
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); //	[3, 4, -1]

console.log(solution([5, 4, 3, 2, 1], [[0, 4, 2]])); // [3]
