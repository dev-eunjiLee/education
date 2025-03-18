function solution(n) {
  // parseInt(value, optional?): value 읽을 string, optional?: value가 몇진법으로 읽혔는지? 만약 3인경우 3진법으로 쓰여있는 value를 10진법으로 바꿔줌
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45)); //7
console.log(solution(125)); //229
