function solution(babbling) {
  console.log(babbling);
  const babyWordList = ["aya", "ye", "woo", "ma"];

  const cnt = babbling.filter((per) => {
    let keyword = per;

    for (const perBabyWord of babyWordList) {
      console.log(`현재 키워드: "${keyword}"`);
      const regex = new RegExp(perBabyWord, "g");
      console.log(regex);

      keyword = keyword.replace(regex, "#");
      console.log(`변경된 키워드: "${keyword}"`);

      if (keyword.match(/#{2,}/g) !== null) {
        break;
      } else {
        keyword = keyword.replace(/#/g, "*");
      }
      console.log(`다시 변경된 키워드: "${keyword}"`);
    }

    return keyword.match(/#{2,}/g) === null || keyword.match(/\*+/) !== null;
  }).length;
  console.log(`개수: ${cnt}`);
  return cnt;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
console.log(solution(["ayayewoomawooma"]));
