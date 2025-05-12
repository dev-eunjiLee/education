// dfs > 이 문제에서는 비효율적 > dfs는 깊이 우선이기 때문에 가장 짧은 노선이 가장 마지막 경로인 경우 불리하다.
function solution(maps) {
  const width = maps[0].length;
  const height = maps.length;

  const mapObj = {};

  maps.forEach((line, yIndex) => {
    line.forEach((elem, xIndex) => {
      mapObj[`${yIndex} - ${xIndex}`] = true;
    });
  });

  let min = Number.MAX_SAFE_INTEGER;
  const go = (x, y, cnt, nowMapObj) => {
    // 직진할 수 없는 경우에는 다음칸으로 진행이 불가
    if (
      // 범위를 벗어난 경우
      x < 0 ||
      x >= width ||
      y < 0 ||
      y >= height ||
      // 벽인 경우
      maps[y][x] === 0 ||
      // 이미 통과한 경우
      nowMapObj[`${y} - ${x}`] === false
    ) {
      return;
    }

    // 최종 도착지에 도착한 경우
    if (x === width - 1 && y === height - 1) {
      min = Math.min(min, cnt);
      return;
    }

    nowMapObj[`${y} - ${x}`] = false;

    // 그 다음 칸으로 이동
    go(x + 1, y, cnt + 1, { ...nowMapObj });
    go(x, y + 1, cnt + 1, { ...nowMapObj });
    go(x - 1, y, cnt + 1, { ...nowMapObj });
    go(x, y - 1, cnt + 1, { ...nowMapObj });
  };

  go(0, 0, 1, {});

  return Number.MAX_SAFE_INTEGER === min ? -1 : min;
}

// bfs > 너비 우선 탐색 > 같은 레벨끼리 먼저 탐색하기 때문에 가장 먼저 도달한 경로가 가장 짧은 거리임이 보장된다.
function solution(maps) {
  // 배열 사이즈 확인
  const width = maps[0].length;
  const height = maps.length;

  // 방문 표시 확인할 배열 셋팅(위치에 방문할때마다 true로 변경)
  const visited = Array.from({ length: height }, (_, i) =>
    Array.from({ length: width }, () => false)
  );

  // bfs 에서 노드 진행 표시를 위한 queue(첫번째 노드는 바로 포함)
  const queue = [{ x: 0, y: 0, cnt: 1 }];

  // 첫번째 노드는 방문 완료
  visited[0][0] = true;

  // 목적지에 도달한 경우에는 -1 (목적지에 도달한 경우 while 안에서 minCnt의 값 변경)
  let minCnt = -1;

  // queue에서 하나씩 값 꺼내서 인접 노드로 이동
  while (queue.length > 0) {
    // queue의 가장 앞 노드
    const node = queue.shift();

    const { x, y, cnt } = node;

    // 그 노드가 목적지인 경우 끝
    if (x === width - 1 && y === height - 1) {
      console.log("끝", { x, y });
      minCnt = cnt;
      break;
    }

    // 그 노드가 목적지가 아닌 경우 동서남북으로 이동
    for (const [xMovement, yMovement] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      // 새로운 노드의 좌표
      const newX = x + xMovement;
      const newY = y + yMovement;

      // 새로운 노드로 진행이 불가능한 경우
      if (
        // x가 범위를 벗어난 경우
        newX < 0 ||
        newX >= width ||
        // y가 범위를 벗어난 경우
        newY < 0 ||
        newY >= height ||
        // 해당 값에 이미 방문했던 경우
        visited[newY][newX] === true ||
        // 새로운 값이 벽인 경우
        maps[newY][newX] === 0
      ) {
        continue;
      }

      // 방문처리는 queue에 넣을때 해야한다. 서로 다른 경로의 다른 지점이 될 수 있는 곳인 경우 중복으로 들어갈 가능성이 있다.
      visited[newY][newX] = true;

      // 새로운 노드에 방문했으니 큐에 추가
      queue.push({
        x: newX,
        y: newY,
        cnt: cnt + 1,
      });
    }
  }

  return minCnt;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); //11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); //-1
