/**
 * x: 입력받은 혹은 새로 처리될 글자의 가장 왼쪽 글자
 *
 * 이 x를 기준으로 x와 x가 아닌 글자를 카운트하여, 카운트 값이 같아질때, 글자를 분리하고
 * 새로 x를 설정하여 반복한다.
 */

function solution(s) {
  const arr = s.split("");

  // 기준이 될 알파벳
  let x = "";

  // 매번 달라질 x를 기준으로 텍스트가 분리될 횟수
  let splitCnt = 0;

  // x의 개수
  let xCnt = 0;

  // y의 개수
  let yCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    // x가 없는 경우, 새로운 x를 선택하고 xCnt의 값을 늘린다.
    if (x === "") {
      x = value;
      xCnt++;
    } else {
      // x값이 있고, 그 값이 현재 인덱스의 값과 같은 경우 xCnt++
      if (x === value) xCnt++;
      // x값이 있고, 그 값이 현재 인덱스의 값과 다른 경우 yCnt++. 단, yCnt와 xCnt의 값이 같아진 경우 분리를 하기 때문에 splitCnt 추가 필요(통계를 위한 변수들 초기화 필요)
      else {
        yCnt++;

        if (xCnt === yCnt) {
          // 분리
          splitCnt++;
          // 초기화
          x = "";
          xCnt = 0;
          yCnt = 0;
        }
      }
    }
  }

  if (xCnt !== 0) splitCnt++;

  return splitCnt;
}

console.log(solution("banana")); //3
console.log(solution("abracadabra")); //6
console.log(solution("aaabbaccccabba")); //3
