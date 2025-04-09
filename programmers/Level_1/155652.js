/**
 *
 * @param {string} s
 * @param {string} skip
 * @param {number} index
 *
 * 위 인자와 아래 규칙을 이용해 새로운 텍스트를 리턴
 *
 * 규칙
 * 1. 문자열 s의 각 알파벳을 index 만큼 뒤의 알파벳으로 바꿔준다
 * 2. index 만큼의 뒤의 알파벳이 'z'를 넘어갈 경우 다시 a로 돌아간다
 * 3. skip에 있는 알파벳은 제외하고 건너뛴다.
 *
 * 유효한 제한사항
 * 1. skip에 포함된 알파벳은 s에 포함되지 않는다
 * 2. 1 <= skip의 길이 <= 10
 * 3. 1 <= index <= 20
 */

function solution(s, skip, index) {
  // 알파벳 배열에서 skip에 들어간 알파벳을 제외한 후 그 배열을 2번 반복하여 커스텀 알파벳 배열을 생성
  // alphabets: 원형 알파벳 배열
  // customAlphabets: alphabets에서 skip에 해당되는 글자들을 제외한 알파벳 배열
  // finalAlphabets: customAlphabets를 3번 반복한 최종 배열
  // finalAlphabets를 2번 반복한 이유
  // - customAlphabets의 최소 길이는 16이다(26 - 10(skip의 최대 길이)).
  // - 16에서 최대 20개를 밀면(index의 최대값이 20) 36이다.
  // - 즉, 가장 customAlphabets가 짧을 때를 기준으로 final이 36은 나와야한다(그래야 가장 마지막 값에서도 최대 20을 밀 수 있다)
  // - 16을 기준으로 36이 나오려면 최소 3번은 customAlphabets가 반복되어야한다
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const skips = skip.split("");

  const customAlphabets = [...alphabets].filter(
    (elem) => !skips.includes(elem)
  );

  const finalAlphabets = [
    ...customAlphabets,
    ...customAlphabets,
    ...customAlphabets,
  ];

  return s
    .split("")
    .map((elem) => {
      return finalAlphabets[finalAlphabets.indexOf(elem) + index];
    })
    .join("");
}

console.log(solution("aukks", "wbqd", 5)); //"happy"
