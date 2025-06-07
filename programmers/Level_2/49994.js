/**
 * U: 위쪽으로 한 칸
 * D: 아래쪽으로 한 칸
 * R: 오른쪽으로 한 칸
 * L: 왼쪽으로 한 칸
 *
 * 좌표평면의 경계 -5 ~ 5
 */
function solution(dirs) {
  // 통과한 길 목록 - 중복을 제외하기 위해 Set 타입
  const passed = new Set();

  // 직전 포인트
  let beforePoint = [0, 0];
  // dirs를 split해서 매번 방향 확인하기
  dirs.split("").forEach((direction) => {
    // 이동 후 포인트
    let afterPoint = [];

    // 방향에 따라 이동
    if (direction === "U") {
      // 위로
      afterPoint[0] = beforePoint[0];
      afterPoint[1] = beforePoint[1] + 1;
    } else if (direction === "L") {
      // 왼쪽으로
      afterPoint[0] = beforePoint[0] - 1;
      afterPoint[1] = beforePoint[1];
    } else if (direction === "R") {
      // 오른쪽으로
      afterPoint[0] = beforePoint[0] + 1;
      afterPoint[1] = beforePoint[1];
    } else if (direction === "D") {
      // 아래로
      afterPoint[0] = beforePoint[0];
      afterPoint[1] = beforePoint[1] - 1;
    }

    // 방향 범위 넘어간 경우 돌려놓기
    if (afterPoint[0] < -5) {
      afterPoint[0] = -5;
    } else if (afterPoint[0] > 5) {
      afterPoint[0] = 5;
    } else if (afterPoint[1] < -5) {
      afterPoint[1] = -5;
    } else if (afterPoint[1] > 5) {
      afterPoint[1] = 5;
    }

    // 위치가 바뀐 경우에만 set에 추가
    if (afterPoint[0] !== beforePoint[0] || afterPoint[1] !== beforePoint[1]) {
      passed.add(
        JSON.stringify(
          [beforePoint, afterPoint].sort((before, after) => {
            if (before[0] !== after[0]) return before[0] - after[0];
            else {
              return before[1] - after[1];
            }
          })
        )
      );
      beforePoint = afterPoint;
    }
  });

  // 돌아온 길 개수
  return passed.size;
}

console.log(solution("ULURRDLLU")); //7
console.log(solution("LULLLLLLU")); //7
