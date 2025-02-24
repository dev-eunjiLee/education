function solution(money) {
  let quotient = Math.floor(money / 5500);
  let remainder = money % 5500;

  return [quotient, remainder];
}

console.log(solution(5500));
console.log(solution(15000));
