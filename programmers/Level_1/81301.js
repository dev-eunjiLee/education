const NUMBER_MAP = new Map([
  ["zero", 0],
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

function solution(s) {
  let answer = "";
  let txt = "";
  for (let i = 0; i < s.length; i++) {
    const value = s[i];

    if (Number.isInteger(+value)) answer = `${answer}${value}`;
    else {
      txt = `${txt}${value}`;

      const convertedNum = NUMBER_MAP.get(txt);

      if (convertedNum !== undefined) {
        answer = `${answer}${convertedNum}`;
        txt = "";
      }
    }
  }
  return +answer;
}

console.log(solution("one4seveneight")); //1478
console.log(solution("23four5six7")); //234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); //123
