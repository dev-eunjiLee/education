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

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); //2
