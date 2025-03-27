function solution(wallpaper) {
  const xLength = wallpaper[0].length;
  const yLength = wallpaper.length;

  let min = [yLength, xLength];
  let max = [0, 0];

  console.log({ min, max });

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      const flag = wallpaper[i][j] === "#";

      if (flag === false) continue;
      else {
        const y = i;
        const x = j;

        if (min[1] > x) {
          min[1] = x;
        }
        if (min[0] > y) {
          min[0] = y;
        }
        if (max[1] < x + 1) {
          max[1] = x + 1;
        }
        if (max[0] < y + 1) {
          max[0] = y + 1;
        }
      }
    }
  }
  return [...min, ...max];
}

console.log(solution([".#...", "..#..", "...#."])); //[0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); //[1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); //[0, 0, 7, 9]
console.log(solution(["..", "#."])); //[1, 0, 2, 1]
