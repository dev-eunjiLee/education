function solution(spell, dic) {
  let answer = 2;
  for (const perDic of dic) {
    let cnt = 0;
    for (const perSpell of spell) {
      //   console.log(perDic, perSpell);
      if (perDic.includes(perSpell)) cnt++;
    }
    if (cnt === spell.length) {
      answer = 1;
      break;
    }
  }
  return answer;
}

// console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //2
// console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //1
// console.log(
//   solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
// ); //2

function solution2(spell, dic) {
  const generateWord = (arr, prefix = "", result = new Set()) => {
    if (arr.length !== 0) {
      for (let i = 0; i < arr.length; i++) {
        const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
        generateWord(newArr, `${prefix}${arr[i]}`, result);
      }
    } else {
      result.add(prefix);
    }
    return result;
  };

  const wordSet = generateWord(spell);

  let answer = 2;
  for (const elem of Array.from(wordSet)) {
    if (dic.includes(elem)) {
      answer = 1;
      break;
    }
  }
  return answer;
}

console.log(solution2(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //2
console.log(solution2(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //1
console.log(
  solution2(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); //2

function solution3(spell, dic) {
  let sortedSpell = spell.sort().join("");
  let sortedDic = new Set(dic.map((elem) => [...elem].sort().join("")));

  return sortedDic.has(sortedSpell) ? 1 : 2;
}

console.log(solution3(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //2
console.log(solution3(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //1
console.log(
  solution3(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); //2
