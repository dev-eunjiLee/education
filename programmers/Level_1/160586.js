function solution(keymap, targets) {
  let obj = {};

  // 반복문을 돌며 각 텍스트별 최소 입력 횟수를 정리
  for (let i = 0; i < 100; i++) {
    const perKeymap = keymap[i];

    if (!perKeymap) break;

    for (let j = 0; j < 100; j++) {
      const key = perKeymap[j];

      if (!key) break;

      const originValue = obj[key];

      if (!originValue) {
        obj[key] = j + 1;
      } else {
        obj[key] = Math.min(originValue, j + 1);
      }
    }
  }

  // 타겟을 돌면서 타겟에 입력된 각 글자를 입력하는 최소 횟수를 obj 객체를 통해 확인해서 누적 합계한 후 리턴
  return targets.map((elem) => {
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
      const spell = elem[i];
      if (obj[spell] === undefined) {
        sum = -1;
        break;
      } else {
        sum += obj[spell];
      }
    }
    return sum;
  });
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //[9, 4]
console.log(solution(["AA"], ["B"])); //[-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); //[4, 6]
