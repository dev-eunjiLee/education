/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */

function solution(n) {
  const binaryN = n.toString(2)
  const binaryNOneCnt = binaryN.match(/1/g).length;
  console.log(binaryN, binaryNOneCnt)

  while(true){
      n++;
      if(n.toString(2).match(/1/g).length === binaryNOneCnt) return n
  }
}

console.log(solution(78))