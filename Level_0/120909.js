function solution(n) {
  if (n === 1) return 1;
  else {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (i ** 2 === n) return 1;
    }
    return 2;
  }
}

console.log(solution(144));
console.log(solution(976));
