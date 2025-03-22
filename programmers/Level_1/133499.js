/**
 * 옹알이 배열(babbling)이 babblingSet(new Set(["aya", "ye", "woo", "ma"])) 으로 만들어지는 글자인 경우 +1
 * (단, 동일한 글자는 연속해서 나올 수 없음)
 */

function solution(babbling) {
  // 할 수 있는 옹알이 배열
  const babblingSet = new Set(["aya", "ye", "woo", "ma"]);

  // 할 수 있는 옹알이로 만들 수 있는 단어인 경우 +1
  let cnt = 0;

  // 입력받은 옹알이
  for (const elem of babbling) {
    // 직전 단어 - 같은 단어가 바로 중복은 안되기 때문에 확인 필요
    let before = "";
    // 실제 만들어진 단어
    let txt = "";
    // 전체 단어 > 이 단어가 입력받은 옹알이여야, 이 발음은 babblingSet에 있는 옹알이만으로 만들 수 있는 단어다!
    let fullText = "";
    for (const spell of [...elem]) {
      txt = `${txt}${spell}`;
      if (babblingSet.has(txt)) {
        if (before === txt) break;
        before = txt;
        fullText = `${fullText}${txt}`;
        txt = "";
      }
    }
    if (fullText === elem) cnt++;
  }

  return cnt;
}

console.log(solution(["aya", "yee", "u", "maa"])); //1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); //2
