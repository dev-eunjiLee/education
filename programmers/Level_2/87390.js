/**
 *
 * 규칙을 먼저 확인한 후 작업을 진행해야함
 * 실제 배열을 만든 후 카피해서 리턴하는,,, 문제의 진행순서와 맞춰서 진행하면 안된다.
 *
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns
 */
function solution(n, left, right) {
  const arr = [];
  for (let index = left; index <= right; index++) {
    const quotient = Math.floor(index / n); // 몫
    const remainder = index % n; // 나머지
    if (quotient >= remainder) arr.push(quotient + 1);
    else arr.push(remainder + 1);
  }
  return arr;
}

console.log(solution(3, 2, 5)); //[3,2,2,3]
console.log(solution(4, 7, 14)); //[4,3,3,3,4,4,4,4]
