function solution(n, m, section) {
  let cnt = 0;
  let lastPaintedPoint = 0;
  // section을 기준으로 배열을 돌린다.
  for (const point of section) {
    if (lastPaintedPoint < point) {
      cnt++;
      lastPaintedPoint = point + m - 1;
    }
  }
  return cnt;
}

console.log(solution(8, 4, [2, 3, 6])); //2
console.log(solution(5, 4, [1, 3])); //1
console.log(solution(4, 1, [1, 2, 3, 4])); //4
