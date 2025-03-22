/**
 * @param N 스테이지의 개수(1 이상 500 이하)
 * @param stages 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호 (1이상 200,000이하)
 *                1이상 N+1이하의 자연수가 담겨있다.
 *                각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다. 단, N+1은 마지막 스테이지(N번째 스테이지)까지 클리어한 사용자를 나타낸다.
 *
 * 실패율: 스테이지에 도달했으나, 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 *
 * 만약, 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록한다.
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의
 *
 * @return 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
 */

function solution(N, stages) {
  let arr = Array.from({ length: N + 2 }, (_, i) => {
    return { i, cnt: 0, fail: 0 };
  });

  for (const elem of stages) {
    arr[elem].fail++;
    for (let i = 1; i <= elem; i++) {
      console.log({ elem, i });
      arr[i].cnt++;
    }
  }

  arr = arr.slice(1, N + 1).sort((a, b) => {
    if (a.fail / a.cnt === b.fail / b.cnt) return b - a;
    return b.fail / b.cnt - a.fail / a.cnt;
  });

  return arr.map((elem) => elem.i);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
// console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
