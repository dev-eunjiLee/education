function setNewLine(land, beforeLine, depth) {
  console.log(`
        land: ${land}
        beforeLine: ${beforeLine}
        depth: ${depth}
    `);
  const answer = [];
  for (let a = 0; a < 4; a++) {
    const now = land[depth][a];
    let max = now;
    for (let b = 0; b < 4; b++) {
      if (a === b) continue;
      else {
        max = Math.max(max, now + beforeLine[b]);
      }
    }
    answer.push(max);
  }
  console.log(answer);
  return answer;
}

function solution(land) {
  let answer = land[0];
  for (let i = 0; i < land.length - 1; i++) {
    answer = setNewLine(land, answer, i + 1);
  }
  console.log(answer);
  return Math.max(...answer);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
