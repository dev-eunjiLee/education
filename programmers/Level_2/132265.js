/**
 *
 * @param {Array<number>} topping
 * 제한사항
 *  1. 1 <= topping.length <= 1,000,000
 *  2. 1 <= topping 원소의 개수 <= 10,000
 * @returns
 */

// 아래 방식은 for문 안에 includes를 진행하고 있어 O(n^2) 성능을 나타내고 있어서 수정 필요
// function solution(topping) {
//   const arr = Array.from({ length: topping.length - 1 }, () => {
//     return { front: [], back: [] };
//   });
//   for (let i = 0; i < arr.length; i++) {
//     const preFront = arr[i - 1]?.front;
//     const postBack = arr[arr.length - i]?.back;
//     const front = preFront ? [...preFront] : [];
//     const back = postBack ? [...postBack] : [];
//     if (!front.includes(topping[i])) front.push(topping[i]);
//     if (!back.includes(topping[arr.length - i]))
//       back.push(topping[arr.length - i]);
//     arr[i].front = front;
//     arr[arr.length - i - 1].back = back;
//     console.log({
//       i,
//       front,
//       back,
//     });
//   }
//   return arr.filter(({ front, back }) => front.length === back.length).length;
// }

function solution(topping) {
  const left = new Map();
  const right = new Map();

  // topping을 순회하면서 right에 넣어서 토핑의 종류와 개수를 저장
  for (const t of topping) {
    const cnt = right.get(t) || 0;
    right.set(t, cnt + 1);
  }

  // left, right의 토핑 개수가 같은 경우를 카운트하기 위한 변수(0에서 시작)
  let count = 0;

  // topping을 순회하면서 left에는 토핑을 추가하고 right에서는 토핑을 빼면서 개수 비교
  for (const t of topping) {
    const leftCnt = left.get(t) || 0;
    left.set(t, leftCnt + 1);

    const rightCnt = right.get(t);
    if (rightCnt - 1 === 0) {
      right.delete(t);
    } else {
      right.set(t, rightCnt - 1);
    }

    if (left.size === right.size) count++;
  }

  // 리턴
  return count;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); //2
console.log(solution([1, 2, 3, 1, 4])); //0
