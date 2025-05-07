/**
 *
 * phone_book 을 정렬한 후, 바로 앞 뒤 값을 비교하여 접두사여부 확인
 *
 * @param {Array<string>} phone_book
 * @returns
 */
function solution(phone_book) {
  // 정렬 -  시간복잡도 O(n)
  phone_book.sort();

  let ans = true;

  // 순회하면서 바로 앞 뒤가 접두사 사이인지 확인 - 시간복잡도 O(n)
  for (let i = 0; i < phone_book.length - 1; i++) {
    const front = phone_book[i];
    const back = phone_book[i + 1];

    // 바로 앞 값이 그 뒤 값의 접두사인 경우
    if (back.indexOf(front) === 0) {
      ans = false;
      break;
    }
  }

  return ans;
}

console.log(solution(["119", "97674223", "1195524421"])); //false
console.log(solution(["123", "456", "789"])); //true
console.log(solution(["12", "123", "1235", "567", "88"])); //false
console.log(solution(["567", "88", "12", "123", "1235"])); //false
