function solution(arr, queries) {
  queries.forEach((elem) => {
    console.log("==========");
    console.log(elem);
    for (let i = elem[0]; i <= elem[1]; i++) {
      arr[i]++;
    }
    console.log("==========");
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
); // [1, 3, 4, 4, 4]
