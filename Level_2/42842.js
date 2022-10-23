// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42842
function solution(brown, yellow) {
  let x = 1; // 가로
  let y; // 세로

  while (true) {
    console.log(x);
    // 수기로 2차 방정식 세운 다음 적용시킴
    const equation =
      2 * Math.pow(x, 2) - (4 + brown) * x + 2 * (brown + yellow);
    if (equation === 0) {
      y = (brown + yellow) / x;
      if (Number.isInteger(y) === true && x >= y) {
        break;
      }
    }
    x++;
  }

  return [x, y];
}

// console.log(solution(10, 2));
// console.log(solution(8, 1));

function solutionNoEquation(brown, yellow) {
  console.log(brown, yellow);

  const minimumWidth = 3;
  let width = minimumWidth;

  let height;
  while (true) {
    console.log(width);

    height = (brown + yellow) / width;
    if (
      // 높이가 정수인지 확인
      Number.isInteger(height) === true &&
      // 높이가 너비보다 작은지 확인
      height <= width &&
      // 각각 yellow, brown 조건 맞는지 확인
      (width - 2) * (height - 2) === yellow &&
      2 * width + 2 * (height - 2) === brown
    ) {
      break;
    }

    width++;
  }

  return [width, height];
}

console.log(solutionNoEquation(10, 2));
console.log(solutionNoEquation(8, 1));
console.log(solutionNoEquation(18, 6));
