/**
 * * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120906
 * 문제 설명
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 *
 * 제한사항
 * 0 ≤ n ≤ 1,000,000
 * 입출력 예
 * n    result
 * 1234    10
 * 930211    16
 * 입출력 예 설명
 * 입출력 예 #1
 *
 * 1 + 2 + 3 + 4 = 10을 return합니다.
 * 입출력 예 #2
 *
 * 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.
 */

function solution(n) {
  const nCharList = n.toString().split("");
  const answer = [...Array(10).keys()].reduce((prev, curr) => {
    const cnt = nCharList.filter((per) => Number(per) === curr).length;
    return prev + curr * cnt;
  }, 0);
  return answer;
}
