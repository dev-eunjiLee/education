/**
 *
 * XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여(회원 대상 매일 1가지 상품 할인 행사)
 * 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속 일치할 경우 맞춰서 회원 가입할 예정
 *
 * 정현이의 조건을 만족하는 회원가입 가능 날짜의 수를 리턴(없는 경우 0)
 *
 * @param {Array<string>} want 원하는 상품
 * @param {Array<number>} number 정현이가 구매할 제품의 수량
 * @param {Array<string>} discount 할인
 */

function solution(want, number, discount) {
  // discount를 이용해 길이가 10인 부분 배열을 만들고, 순회할 때 마다 부분 배열을 뒤로 조금씩 전진하면서 카운트진행

  // 일치하는 날의 횟수(연속으로 10일 모두 할인이 되는 날의 수)
  let cnt = 0;
  // discount의 0번부터 9번까지
  let tmp = discount.slice(0, 10);

  // 순회하면서 배열 조회해서 할인 가능 날짜 체크
  for (let i = 0; i <= discount.length - 10; i++) {
    // i===0인 경우는 이미 위에서 셋팅을 했기 때문에 그 이후부터 뒤로 미뤄서 배열의 길이를 10으로 맞춰줌
    if (i !== 0) {
      tmp.shift();
      tmp.push(discount[i + 10 - 1]);
    }

    // number, want 필드 이용해서 10일 내내 할인이 가능한 날 체크
    const copiedNumber = [...number];

    // tmp를 순회하면서 want, number를 이용해 할인된 상품의 개수를 마이너스 해준 후, 전체 마이너스 처리 후 남은 값의 합이 0인 경우 전체 할인이 가능한 날
    for (let i = 0; i < 10; i++) {
      const index = want.indexOf(tmp[i]);
      copiedNumber[index]--;
    }

    if (copiedNumber.filter((elem) => elem !== 0).length === 0) cnt++;
  }
  return cnt;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); //	3
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); // 0
