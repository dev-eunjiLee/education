// 이진탐색 방식
function solution(array, height) {
  // 배열을 내림차순으로 정렬
  array = array.sort((a, b) => b - a);

  let rightIndex = array.length;
  let leftIndex = 0;

  while (leftIndex < rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);

    if (array[mid] > height) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid;
    }
  }
  return leftIndex;
}

console.log(solution([149, 180, 192, 170], 167)); //3;
console.log(solution([180, 120, 140], 190)); // 0;
console.log(solution([180, 120, 140], 110)); // 3;
console.log(solution([180, 120, 140], 120)); // 2

function solution2(array, height) {
  let answer = 0;
  for (const per of array) {
    if (per > height) answer++;
  }
  return answer;
}

console.log(solution2([149, 180, 192, 170], 167)); //3;
console.log(solution2([180, 120, 140], 190)); // 0;
console.log(solution2([180, 120, 140], 110)); // 3;
console.log(solution2([180, 120, 140], 120)); // 2
