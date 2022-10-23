function solution(babbling) {
  const babyWordList = ["aya", "ye", "woo", "ma"];

  return babbling.filter((per) => {
    let keyword = per;

    for (const perBabyWord of babyWordList) {
      // 1. regex 생성
      const regex = new RegExp(perBabyWord, "g");

      // 2. regex에 걸리는 키워드를 "#"으로 변경
      keyword = keyword.replace(regex, "#");

      // 3-1. "#"이 연속으로 있는 경우 애기가 발음할 수 없는 예외 단어이기 때문에 break
      if (keyword.match(/#{2,}/g) !== null) {
        break;
      }
      // 3-2. 애기가 발음할 수 있는 경우 "#"을 "*"으로 변경(아예 없애버리면 다음 키워드 regex 검색을 할 때 떨어져있는 단어인데도 붙어있는 걸로 처리되어 오류가 날 수 있음)
      keyword = keyword.replace(/#/g, "*");
    }

    return keyword.match(/[^*]/g) === null;
  }).length;
}
