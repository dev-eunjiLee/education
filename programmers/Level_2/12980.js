/**
 *
 * 이동 방식
 * 1. K칸을 앞으로 점프
 * 2. 현재위치* 2 에 해당하는 위치로 순간이동
 *
 * 순간이동 > 배터리소모 X
 * 점프 > K칸만큼 배터리 소모
 *
 * @param {number} n 이동하려는 거리
 *
 * 문제: n만큼 이동하려고 할 때 필요한 배터리 사용량의 최소값
 *
 * 처음위치: 0
 */

function solution(n) {
  // 값을 2로 나눈 후 나머지 1인 값을 더하면 된다

  // 현 위치(계속 해서 2로 나눠질 값)
  let point = n;

  // +1로 이동한 값
  let usage = 0;

  while (point >= 1) {
    if (point % 2 === 1) usage++;

    point = Math.floor(point / 2);
  }

  return usage;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); //5
