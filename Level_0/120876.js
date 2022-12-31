/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120876
 */

function solution(lines) {
  let answer = 0;

  // 각 index 출발 여부 확인
  const linesStartFlagList = [false, false, false];

  // 문제의 제한 조건에서 -100 ~ 100 사이의 값으로 지정해줌
  for (let i = -100; i <= 100; i++) {
    for (let lineIndex = 0; lineIndex <= 3; lineIndex++) {
      // 출발 여부 확인
      if (linesStartFlagList[lineIndex] === false) {
        if (i === lines[lineIndex][0]) {
          linesStartFlagList[lineIndex] = true;
        }
        // 도착 여부 확인
      } else if (linesStartFlagList[lineIndex] === true) {
        if (i === lines[lineIndex][1]) {
          linesStartFlagList[lineIndex] = false;
        }
      }
    }

    // 현재 출발해서 진행중인 선분의 개수 확인하여 2개 이상인 경우 ++
    if (linesStartFlagList.filter((per) => per === true).length >= 2) {
      answer++;
    }
  }

  return answer;
}
