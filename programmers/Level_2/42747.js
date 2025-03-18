/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747#
 */

function solution(citations) {
  console.log(citations);
  const max = Math.max(...citations);
  let index = Math.min(...citations);
  let h = index;
  while (index <= max) {
    let sameQuotationCnt = 0;
    let quotationCnt = citations.filter((per) => {
      if (per === index) sameQuotationCnt++;
      return per >= index;
    }).length;
    let nonQuotationCnt = citations.length - quotationCnt + sameQuotationCnt;
    if (quotationCnt >= index && nonQuotationCnt <= index) {
      h = Math.max(h, index);
    }
    index++;
  }
  if (h > citations.length) {
    h = citations.length;
  }
  return h;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([4, 4, 4])); // 3
