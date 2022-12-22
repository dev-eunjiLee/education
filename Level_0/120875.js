/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120875
 */

function solution(dots) {
  const [rightDown, rightUp, leftDown, leftUp] = dots.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });
  let i = 0;
  while (i < 2) {
    let firstInclination = 0;
    let secondInclination = 0;
    if (i === 0) {
      firstInclination =
        (rightDown[0] - rightUp[0]) / (rightDown[1] - rightUp[1]);
      secondInclination = (leftDown[0] - leftUp[0]) / (leftDown[1] - leftUp[1]);
    } else {
      firstInclination =
        (rightDown[0] - leftDown[0]) / (rightDown[1] - leftDown[1]);
      secondInclination = (rightUp[0] - leftUp[0]) / (rightUp[1] - leftUp[1]);
    }
    if (firstInclination === secondInclination) {
      return 1;
    }
    i++;
  }
  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); //1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); //0
