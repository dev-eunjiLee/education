/**
 *
 * 유연근무제
 *
 * - 직원들은 자신이 설정한 "출근희망시각" + 10분까지 어플로 출근해야한다.
 * - 시간표현은 "시" * 10 + 분 으로 표현 >> 10시 13분이면 1013으로 표시. 9시 58분은 958로 표현
 * - 월~금 동안 지각하지 않은 직원들에게 상품을 줌(지각하지 않은 사람의 수를 리턴)
 *
 * @param {Array<number>} schedules 직원들이 설정한 출근 희망 시각(700 이상 1100 이하)
 * @param {Array<Array<number>>} timelogs 직원들이 일주일동안 출근한 시각을 담은 2차원 정수 배열
 * @param {number} startday 이벤트를 시작한 요일 (월 - 1)
 */
function solution(schedules, timelogs, startday) {
  return schedules.reduce((prev, curr, index) => {
    // 시간을 타임스탬프 형태로 바꾸기
    const hour = parseInt(curr / 100);
    const minute = parseInt(curr % 100);

    curr = hour * 60 + minute;

    // 허용 가능시간 최대값 구하기
    const max = curr + 10;

    // max 넘어가지 않는 경우를 세서, 5인 경우만 +1
    const cnt = timelogs[index].filter((time, dayIndex) => {
      let flag = false;

      const newDay = dayIndex + startday;

      // 주말여부 체크
      if (newDay % 7 !== 6 && newDay % 7 !== 0) {
        // 주말이 아닌 경우, 위의 curr과 마찬가지로 타임스탬프 형태로 바꾸기
        const timeHour = parseInt(time / 100);
        const timeMinute = parseInt(time % 100);
        time = timeHour * 60 + timeMinute;

        // 지각하지 않은 경우 flag=true
        if (time <= max) flag = true;
      }

      return flag;
    }).length;

    if (cnt >= 5) prev++;

    return prev;
  }, 0);
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5
  )
); //3
console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1
  )
); //2
