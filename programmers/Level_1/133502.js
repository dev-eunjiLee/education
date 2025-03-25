/**
 * 1 ~ 4까지 무작위로 배열이 있을 때, 1, 2, 3, 4 순서대로 있는 경우 확인해서 배열에서 빼기 > 몇 번 뺄 수 있는지 확인해서 return
 */
function solution(ingredient) {
  let cnt = 0;
  let arr = [];
  // ingredient의 길이가 최대 1,000,000 이기 때문에 반복을 최대한 적게 해야한다.
  for (let i = 0; i < ingredient.length; i++) {
    // arr에 푸시한 후, arr의 마지막 원소 4개를 비교
    arr.push(ingredient[i]);

    if (
      arr[arr.length - 4] === 1 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 1] === 1
    ) {
      for (let j = 0; j < 4; j++) {
        arr.pop();
      }
      cnt++;
    }
  }
  return cnt;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0
console.log(solution([1, 2, 3, 1, 2])); //1
console.log(solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); //3
