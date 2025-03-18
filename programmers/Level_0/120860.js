function solution(dots) {
  const xList = dots.map((elem) => elem[0]).sort((a, b) => a - b);
  const yList = dots.map((elem) => elem[1]).sort((a, b) => a - b);

  return Math.abs(xList[0] - xList[3]) * Math.abs(yList[0] - yList[3]);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); //1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); //4
