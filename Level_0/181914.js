function solution(number) {
  return number.split("").reduce((prev, curr) => +prev + +curr) % 9;
}

console.log(solution("123"));
console.log(solution("78720646226947352489"));
