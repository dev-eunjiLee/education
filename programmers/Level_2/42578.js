/**
 *
 * 의상
 * - 매일 다른 옷을 조합해서 입어야함
 * - 종류별로 1가지 의상만 착용할 수 있음
 * - 착용한 의상의 일부가 겹치더라도 다른 의상이 겹치지 않거나 혹은 의상을 추가로 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산
 * - 하루에 최소 한 개의 의
 *
 * @param {Array<Array<string>>} clothes Array<[의상의 이름, 의상의 종류]>
 *
 * - 같은 이름을 가진 의상은 존재하지 않음
 */
function solution(clothes) {
  // 옷의 종류별 개수를 저장하기 위한 변수 초기화
  const closet = new Map();

  // 주어진 clothes를 순회하면서 옷의 종류별 개수 확인하기
  clothes.forEach(([clothing, type]) => {
    const cnt = (closet.get(type) ?? 0) + 1;

    closet.set(type, cnt);
  });

  // 조합의 모든 경우의 수를 저장할 변수를 1로 초기화(곱셈의 수 계산은 곱셈으로 계산이 되기 때문에 1로 초기화함)
  let all = 1;
  closet.forEach((elem) => {
    // 모든 옷의 개수 + 1 을 곱하면 그 옷을 개별로 입는 횟수와 입지 않은 경우의 횟수까지 계산 가능
    all = all * (elem + 1);
  });

  // 옷을 벗고 있는 경우는 없으니까 -1로 그 경우는 제외
  return all - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); //5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); //3
