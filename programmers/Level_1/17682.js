/**
 * 입력받은 다트 결과를 이용해 점수를 리턴
 * 입력받은 다트결과는 점수|영역|[옵션] 으로 이루어짐
 *
 * 다트는 3회 진행
 * 다트 점수판은 0 ~ 10점
 * 다트 점수판의 영역은 S(Single), D(Double), T(Triple)로 구분되고 각 1승, 2승 3승으로 계산(각 점수마다 존재)
 * 기타 옵션: 스타상(*) => 해당 점수와 바로 전에 얻은 점수를 *2
 *                         처음부터 나올 수 있고 이럴 경우 현 점수만 *2 된다
 *                         스타상 중첩가능
 *            아차상(#) => 해당 점수는 마이너스
 *            스타상, 아차상 교차 중첩 가능 => 이 경우 아차상의 점수는 -2배
 *            스타상은 존재할 수도 아닐수도... 존재한다면 1개만 존재
 */

function solution(dartResult) {
  const areaMap = new Map([
    ["S", 1],
    ["D", 2],
    ["T", 3],
  ]);
  const optionSet = new Set(["*", "#"]);

  // 다트의 각 회차별 점수와 옵션에 따른 곱셈 파라미터를 저장하기 위한 변수 설정
  const arr = Array.from({ length: 3 }, () => [0, 1]);

  // 반복문 및 점수, 영역, 옵션 초기화
  let i = 0;
  let score = "";
  let area = "";
  let option = "";

  // 함수 - 각 회차의 점수와 어떤 수를 곱할지를 배열에 셋팅
  function arrSet() {
    const now = score ** areaMap.get(area);
    arr[i][0] = now;

    // 스타상인 경우 => 현재와 앞에 *2
    if (option === "*") {
      arr[i][1] *= 2;
      if (i > 0) {
        arr[i - 1][1] *= 2;
      }
    } else if (option === "#") {
      // 아차상인 경우 => 점수 * -1
      arr[i][1] *= -1;
    }

    score = "";
    option = "";
    area = "";
  }

  for (const spell of [...dartResult]) {
    if (Number.isInteger(+spell)) {
      if (area !== "") {
        arrSet();
        i++;
      }
      score = `${score}${spell}`;
    } else if (areaMap.get(spell)) {
      area = spell;
    } else if (optionSet.has(spell)) {
      option = spell;
    }
  }

  arrSet();

  return arr.reduce((prev, [now, multiply]) => {
    prev += now * multiply;
    return prev;
  }, 0);
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3
console.log(solution("1S*2T*3S")); //23
console.log(solution("1D#2S*3S")); //5
console.log(solution("1T2D3D#")); //-4
console.log(solution("1D2S3T*")); //59
console.log(solution("10T#1T*2D*")); //-1988
