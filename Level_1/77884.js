function solution(left, right) {
  let sum = 0;
  for (let elem = left; elem <= right; elem++) {
    if (elem === 1) sum -= 1;
    else if (elem === 2) sum += 2;
    else {
      let cnt = 2; // 1, elem
      for (let i = 2; i < elem; i++) {
        if (elem % i === 0) cnt++;
      }
      if (cnt % 2 === 0) sum += elem;
      else sum -= elem;
    }
  }

  return sum;
}

// console.log(solution(13, 17)); //43
// console.log(solution(24, 27)); //52
console.log(solution(1, 2)); // 1
