function solution(arr, queries) {
  console.log(arr, queries);

  queries.forEach((query) => {
    const [s, e, k] = query;

    for (let i = s; i <= e; i++) {
      console.log(s, e, i);

      if (i % k === 0) arr[i]++;
    }
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // [3, 2, 4, 6, 4]
