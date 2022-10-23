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

console.log(solution(10, 2));
console.log(solution(8, 1));
