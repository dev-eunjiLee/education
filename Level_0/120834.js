function solution(age) {
  const aCode = "a".charCodeAt(0);
  return String(age)
    .split("")
    .map((elem) => {
      // elem.charCodeAt(0) - aCode;
      return String.fromCharCode(aCode + Number(elem));
    })
    .join("");
}

console.log(solution(23));
