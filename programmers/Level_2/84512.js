function solution(word) {
  const alphabetList = ["A", "E", "I", "O", "U", ""];

  const wordSet = new Set();

  for (const first of alphabetList) {
    for (const second of alphabetList) {
      for (const third of alphabetList) {
        for (const forth of alphabetList) {
          for (const fifth of alphabetList) {
            wordSet.add(`${first}${second}${third}${forth}${fifth}`);
          }
        }
      }
    }
  }

  return [...wordSet].sort().indexOf(word);
}

// console.log(solution("A")); // 1
// console.log(solution("AA")); // 2
console.log(solution("AAAAE")); //6
console.log(solution("AAAE")); //10
console.log(solution("I")); //1563
console.log(solution("EIO")); //1189

outer: for (let a = 0; a < 5; a++) {
  for (let b = 0; b < 5; b++) {
    console.log({ a, b });
    if (b === 3) {
      break outer;
    }
  }
}
