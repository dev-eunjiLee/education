/**
 * @param {string} today 오늘 날짜 > 오늘 날짜를 기준으로 개인정보 파기 유무가 결정된다
 * @param {Array<string>} terms > 개인정보 수집 약관의 종류와 유효기간이 "약관 유효기간"과 같이 여백으로 구분되어있다
 * @param {Array<string>} privacies > 개인정보 수집 일자와 약관 종류가 여백으로 구분되어있다.
 *
 * today, terms, privacies를 각각 비교하여 today를 기준으로 파기해야하는 개인정보의 번호(index)를 리턴
 * 단, 이 때 모든 달은 28일까지 있다.
 */

function solution(today, terms, privacies) {
  /**
   * 풀이방식: terms를 Map으로 바꾼 후 privacies를 순회
   */

  function getCustomTimestamp(year, month, day) {
    return year * 12 * 28 + month * 28 + day;
  }

  const termMap = new Map();
  terms.forEach((elem) => {
    const [term, period] = elem.split(" ");
    termMap.set(term, getCustomTimestamp(0, Number(period), 0));
  });

  const [todayYear, todayMonth, todayDay] = today
    .split(".")
    .map((elem) => Number(elem));
  const todayTimestamp = getCustomTimestamp(todayYear, todayMonth, todayDay);

  const answer = [];

  privacies.forEach((elem, index) => {
    const [date, term] = elem.split(" ");

    const period = termMap.get(term);

    let [year, month, day] = date.split(".").map((elem) => Number(elem));

    const validTimestamp = getCustomTimestamp(
      Number(year),
      Number(month),
      Number(day) + period
    );

    if (todayTimestamp >= validTimestamp) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); //[1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); //[1, 4, 5]
