function solution(arr) {
  const rowLength = arr.length;
  const colLength = arr[0].length;

  let answer = arr;

  if (rowLength > colLength) {
    answer = arr.map((elem) => {
      //   elem.push(0);
      elem.push(...Array.from({ length: rowLength - colLength }, () => 0));
      return elem;
    });
  } else if (rowLength < colLength) {
    answer = [
      ...arr,
      ...Array.from({ length: colLength - rowLength }, () =>
        Array.from({ length: colLength }, () => 0)
      ),
    ];
  }

  return answer;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
); //[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
); //[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
); //[[1, 2], [3, 4]]
console.log(
  solution([
    [1, 1, 1],
    [1, 1, 1],
  ])
); // [[1, 1, 1], [1, 1, 1], [0, 0, 0]]
console.log(
  solution([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ])
); //[[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]
