/**
 *
 * 연속 부분 수열 합의 개수
 *
 * @param {Array<number>} elements
 *
 * 주어진 배열 elements 는 원형수열로 양끝이 서로 닿아있어 끝나지 않는다. 예를 들어, 7,9,1,1,4로 볼 수 있지만 9,1,1,4,7로도 볼 수 있다
 * 주어진 원형 수열을 1~elements.length 만큼의 길이를 가진 연속 수열로 구분해서 합을 구할 때, 그 합의 개수를 구한다.
 *
 * 예를들어 원형 수열이 [7, 9, 1, 1, 4] 이고 연속 수열의 길이가 4인 경우,
 * 나올 수 있는 연속 수열의 경우는 [7,9,1,1], [9,1,1,4], [1,1,4,7], [1,4,7,9], [4,7,9,1] 이고 이 때 합의 개수는 18, 15, 13, 21 4개이다
 *
 */

function solution(elements) {
  // 원형 배열이고, 연속 수열은 원형 배열의 원 배열의 길이까지만 구하기 때문에 2번 반복해서 새로운 배열을 생성해준다(끝이 나지 않고 반복할 수 있도록)
  const doubledElements = [...elements, ...elements];
  // 중복된 숫자를 거를 수 있도록 Set 타입으로 변수 할당
  const sumSet = new Set();

  // 부분 수열의 길이만큼 순회하면서 각 부분 수열의 합 구하기
  for (let length = 1; length <= elements.length; length++) {
    // i부터 주어진 부분 수열의 길이만큼의 배열의 합 구하기
    for (let i = 0; i + length <= elements.length * 2; i++) {
      const res = doubledElements.slice(i, i + length).reduce((prev, curr) => {
        return prev + curr;
      });
      console.log({ length, i, res });
      // 구한 부분 수열의 합을 추가
      sumSet.add(res);
    }
  }
  console.log(sumSet);

  // 중복된 부분 수열의 합이 제거된 사이즈를 리턴
  return sumSet.size;
}

console.log(solution([7, 9, 1, 1, 4])); //18
