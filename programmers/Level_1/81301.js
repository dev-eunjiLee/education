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

// console.log(solution("one4seveneight")); //1478
// console.log(solution("23four5six7")); //234567
// console.log(solution("2three45sixseven")); //234567
// console.log(solution("123")); //123

const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution2(s) {
  let answer = s;

  for (let i = 0; i < NUMBERS.length; i++) {
    let arr = answer.split(NUMBERS[i]);

    // Array.join(param) > param을 이용해 배열을 묶어 string으로 만든다
    answer = arr.join(i);
  }

  return answer;
}

console.log(solution2("one4seveneight")); //1478
console.log(solution2("23four5six7")); //234567
console.log(solution2("2three45sixseven")); //234567
console.log(solution2("123")); //123
