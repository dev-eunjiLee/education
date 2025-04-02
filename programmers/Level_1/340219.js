/**
 *
 * 조건
 * - 동영상 재생기의 기능
 *   - prev: 10초전 이동. 현 위치가 10초 미만인 경우 영상의 처음 위치로 이동(영상의 처음 위치는 0분 0초)
 *   - next: 10초 후 이동. 동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동(영상의 마지막 위치는 동영상의 길이와 같음)
 *   - 오프닝 건너뛰기: (별도의 input없이 조건이 해당될 경우 자동 실행) 현재 재생 위치가 오프닝 구간(op_start <= 현재 재생위치 <= op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동
 *
 * @param {string} video_len > 동영상의 길이
 * @param {string} pos > 기능이 수행되기 직전의 재생위치
 * @param {string} op_start > 오프닝 시작 시각
 * @param {string} op_end > 오프닝 끝나는 시각
 * @param {Array<string>} commands > 사용자의 입력
 *
 * @return commands를 다 끝내고 현재 동영상의 위치
 */

function solution(video_len, pos, op_start, op_end, commands) {
  /**
   * 풀이방법
   * 1. 주어진 시간들을 타임스탬프로 변형한 후 commands를 수행한다.
   * 2. 최종 timestamp를 다시 mm:ss 형태로 변경하여 리턴한다.
   */

  // 타임스탬프 구하기(코드 반복을 위해 객체 생성 후 순회)
  const time = {
    pos,
    op_start,
    op_end,
    video_len,
  };

  const timestamp = {
    pos: undefined,
    op_start: undefined,
    op_end: undefined,
    video_len: undefined,
  };

  for (const key in timestamp) {
    const [elem_minutes, elem_seconds] = time[key]
      .split(":")
      .map((elem) => Number(elem));

    timestamp[key] = elem_minutes * 60 + elem_seconds;
  }

  // commands 순회하면서 동영상 위치 변경
  const final_timestamp = commands.reduce((prev, curr, index) => {
    let now = prev;

    // 오프닝 건너뛰기
    if (now >= timestamp.op_start && now < timestamp.op_end) {
      now = timestamp.op_end;
    }

    // next: +10초
    // prev: -10초
    if (curr === "next") {
      now += 10;
    } else if (curr === "prev") {
      now -= 10;
    }

    // 동영상의 타임라인을 벗어난 경우 시작점 혹은 끝점에 맞추기
    if (now < 0) {
      now = 0;
    } else if (now > timestamp.video_len) {
      now = timestamp.video_len;
    }

    // commands 다 끝냈더니 위치가 오프닝인 경우, 오프닝 건너뛰기
    if (index === commands.length - 1) {
      if (now >= timestamp.op_start && now < timestamp.op_end) {
        now = timestamp.op_end;
      }
    }

    return now;
  }, timestamp.pos);

  // timestamp를 mm:ss 형태로 변경
  const end_minutes_num = Math.floor(final_timestamp / 60);
  const end_seconds_num = final_timestamp % 60;

  const end_minutes_str =
    end_minutes_num < 10 ? `0${end_minutes_num}` : `${end_minutes_num}`;
  const end_seconds_str =
    end_seconds_num < 10 ? `0${end_seconds_num}` : `${end_seconds_num}`;

  return `${end_minutes_str}:${end_seconds_str}`;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"])); //"13:00"
console.log(
  solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"])
); //"06:55"
console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"])); //"04:17"
