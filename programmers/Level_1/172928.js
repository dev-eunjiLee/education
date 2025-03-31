/**
 *
 * @param {Array<string>} park 직사각형 격자에서 지나다니는 길은 'O', 장애물은 'X', 시작지점은 'S'
 * @param {Array<string>} routes 방향 및 거리 > 직사각형 격자를 탈출하거나 진행 중 장애물을 만나게 될 경우 아예 진행하지않고 다음으로 넘어감
 */

function solution(park, routes) {
  // 시작점을 먼저 잡은 후, route를 순회하면서 진행

  // 시작점 잡기 start[0] > Y좌표, start[1] > X좌표
  const start = [];
  for (let i = 0; i < park.length; i++) {
    const startX = park[i].indexOf("S");

    if (startX !== -1) {
      start[0] = i;
      start[1] = startX;
      break;
    }
  }

  // 시작점을 기준으로 routes를 순회하기
  return routes.reduce((prev, curr, index) => {
    // 방향과 거리 확인
    const [op, n] = curr.split(" ");

    // temp: 한 칸씩 전진한 후의 좌표값. 롤백이 아니라면 최종적으로는 이 변수의 값이 reduce의 prev로 들어간다.
    let temp = [...prev];

    // rollback: 이 변수가 true인 경우 전진불가(기존 temp 대신 기존 prev가 prev로 넘어감)
    let rollback = false;

    for (let i = 0; i < n; i++) {
      // 방향에 맞춰 전진
      if (op === "N") {
        temp[0]--;
      } else if (op === "S") {
        temp[0]++;
      } else if (op === "W") {
        temp[1]--;
      } else if (op === "E") {
        temp[1]++;
      }

      // 전진한 값이 범위에 해당되고, 장애물이 없는 경우인지 확인 > 아닐 경우 rollback 변수를 true로 변경 후 전진 멈추기
      if (
        temp[0] < 0 ||
        temp[1] < 0 ||
        temp[0] >= park.length ||
        temp[1] >= park[0].length ||
        park[temp[0]][temp[1]] === "X"
      ) {
        rollback = true;
        break;
      }
    }

    // 롤백이 필요한 경우 prev를 리턴, 롤백이 필요없는 경우 새 값을 리턴
    return rollback === true ? prev : temp;
  }, start);
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); //[2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); //[0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); //[0,0]
console.log(solution(["OSO", "OOO"], ["S 3"])); //[0,1]
