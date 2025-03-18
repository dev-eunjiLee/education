function solution(s) {
  const obj = s.split("").reduce((prev, curr) => {
    prev[curr] = prev?.[curr] === undefined ? 1 : prev[curr] + 1;
    return prev;
  }, {});
  return Object.keys(obj)
    .filter((key) => {
      return obj[key] === 1;
    })
    .sort()
    .join("");
}

console.log(solution("hello")); // eho
console.log(solution("abcabcadc")); // d

function solution(s) {
  const arr = [];
  for (let elem of s) {
    if (s.indexOf(elem) === s.lastIndexOf(elem)) arr.push(elem);
  }
  return arr.sort().join("");
}

console.log(solution("hello")); // eho
console.log(solution("abcabcadc")); // d
