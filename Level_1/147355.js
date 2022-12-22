/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */

function solution(t, p) {
  var answer = 0;
  const standardNum = Number(p);
  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= standardNum) answer++;
  }
  return answer;
}

console.log(solution("3141592", "271")); //	2
console.log(solution("500220839878", "7")); //8
console.log(solution("10203", "15")); //3
