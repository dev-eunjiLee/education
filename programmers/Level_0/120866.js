/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120866
 */
function solution(board) {
  // 가로 세로 길이 확인 및 전체 칸 수 확인
  const verticalLength = board.length;
  const horizontalLength = board[0].length;
  let safeZone = verticalLength * horizontalLength;

  // for문 돌리면서 사용할 breakPoint 선언 및 초기화
  let breakPoint = false;

  for (let verticalIndex = 0; verticalIndex < verticalLength; verticalIndex++) {
    for (
      let horizontalIndex = 0;
      horizontalIndex < horizontalLength;
      horizontalIndex++
    ) {
      // 각 칸 마다 지뢰 여부 확인, 만약 해당 칸에 지뢰가 없을 경우 주위 칸 확인
      const now = board[verticalIndex][horizontalIndex];
      console.log(
        `now: board[${verticalIndex}][${horizontalIndex}] === ${now}`
      );
      if (now === 1) {
        safeZone--;
      } else {
        for (let vIndex = -1; vIndex <= 1; vIndex++) {
          for (let hIndex = -1; hIndex <= 1; hIndex++) {
            if (vIndex === 0 && hIndex === 0) {
              continue;
            }
            const controlVIndex = verticalIndex + vIndex;
            const controlHIndex = horizontalIndex + hIndex;
            const controlNow = board?.[controlVIndex]?.[controlHIndex];
            console.log(
              `-- controlNow:  board[${controlVIndex}][${controlHIndex}] = ${controlNow}`
            );
            if (controlNow === 1) {
              safeZone--;
              breakPoint = true;
              break;
            }
          }
          if (breakPoint === true) break;
        }
      }

      if (breakPoint === true) breakPoint = false;
      console.log(`safeZoneCnt: ${safeZone}`);
    }
  }

  return safeZone;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
