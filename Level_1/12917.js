function solution(s) {
  const regex = new RegExp(/[A-Z]/);
  return s
    .split("")
    .sort((a, b) => {
      if (regex.exec(a) && !regex.exec(b)) {
        return 1;
      } else if (!regex.exec(a) && regex.exec(b)) {
        return -1;
      } else return b.charCodeAt(0) - a.charCodeAt(0);
    })
    .join("");
}

function solution2(s) {
  return s.split("").sort().reverse().join("");
}

console.log(solution2("Zbcdefg")); // "gfedcbZ"
