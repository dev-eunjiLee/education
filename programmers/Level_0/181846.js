function solution(a, b) {
  // 16자리 이상은 BigInt 사용 필요
  return `${BigInt(a) + BigInt(b)}`;
}

console.log(solution("582", "734")); //,"1316"
console.log(solution("18446744073709551615", "287346502836570928366")); //,"305793246910280479981"
console.log(solution("0", "0")); //	"0"
