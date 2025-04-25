/**
 *
 * 행렬의 곱셈을 진행할 때는, 선행 행렬의 열의 개수와 후행 행렬의 행의 개수가 같아야 하며, 새롭게 생성되는 행렬은 선행 행렬의 행의 개수와 후행 행렬의 열의 개수와 동일하다
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @returns
 */
function solution(arr1, arr2) {
  // 결과를 저장할 배열 초기화
  const result = [];

  // arr1의 행 개수만큼 반복 (곱셈 결과의 행 개수)
  for (let i = 0; i < arr1.length; i++) {
    // 결과 배열의 i번째 행 초기화
    result[i] = [];
    // arr2의 열 개수만큼 반복(곱셈 결과의 열 개수)
    for (let j = 0; j < arr2[0].length; j++) {
      // 행렬 곱셈 결과를 하나의 원소에 합해서 저장할 때 사용할 변수
      let sum = 0;

      // arr1의 열 개수 === arr2의 행 개수 => 이 개수만큼 반복문 진행
      for (let k = 0; k < arr2.length; k++) {
        // arr1의 i번째 행(라인)의 k번째 값 * arr2의 k번째 행(라인)의 j번째 값
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); //[[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
console.log(
  solution(
    [
      [1, 2],
      [2, 1],
    ],
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
    ]
  )
); // [[5, 5, 5, 5], [4, 4, 4, 4]]
