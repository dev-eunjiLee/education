function solution(n) {
  const arr = [];
  while (n > 1) {
    let i = 2;
    while (true) {
      if (n % i === 0) {
        arr.push(i);
        n = n / i;
        break;
      } else {
        i++;
      }
    }
  }
  return [...new Set(arr)];
}

console.log(solution(12)); //[2, 3]
console.log(solution(17)); //[17]
console.log(solution(420)); //[2, 3, 5, 7]
