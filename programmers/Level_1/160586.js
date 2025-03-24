function solution(keymap, targets) {
  let obj = {};

  //   const longLen = keymap.map(elem => elem)
  for (let i = 0; i < 100; i++) {
    const perKeymap = keymap[i];

    console.log({ perKeymap });

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
