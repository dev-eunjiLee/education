/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 */

function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  const map = new Map();
  array.forEach((per) => {
    const originCnt = map.get(per);
    const newCnt = originCnt === undefined ? 1 : originCnt + 1;
    map.set(per, newCnt);
  });
  let maxKey = -1;
  let maxCnt = -1;
  let cnt = 1;
  for (let [key, value] of map) {
    if (value > maxCnt) {
      cnt = 1;
      maxCnt = value;
      maxKey = key;
    } else if (value === maxCnt) {
      cnt++;
    }
  }
  if (cnt > 1) {
    return -1;
  } else {
    return maxKey;
  }
}
