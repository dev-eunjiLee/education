function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  for (let elem of sizes) {
    const [long, short] = elem.sort((a, b) => a - b);
    maxWidth = Math.max(maxWidth, long);
    maxHeight = Math.max(maxHeight, short);
  }

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); //4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); //133
