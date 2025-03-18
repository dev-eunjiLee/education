function solution(s, n) {
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);

  const ACode = "A".charCodeAt(0);
  const ZCode = "Z".charCodeAt(0);

  return s
    .split("")
    .map((elem) => {
      if (elem === " ") return elem;
      else {
        const elemCode = elem.charCodeAt(0);
        let newSpellCode = elemCode + n;

        if (elemCode <= zCode && newSpellCode > zCode) {
          // 소문자면서, n만큼 밀었을 때, z보다 큰 경우 >> 남은 만큼 a로 돌려야함
          newSpellCode = newSpellCode - zCode - 1 + aCode;
        } else if (elemCode <= ZCode && newSpellCode > ZCode) {
          // 대문자면서, n만큼 밀었을 때 Z보다 큰 경우 >> 다시 A로 돌려야함
          newSpellCode = newSpellCode - ZCode - 1 + ACode;
        }

        return String.fromCharCode(newSpellCode);
      }
    })
    .join("");
}

console.log(solution("AB", 1)); //"BC"
console.log(solution("z", 1)); //"a"
console.log(solution("a B z", 4)); //"e F d"
