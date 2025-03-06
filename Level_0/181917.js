function solution(x1, x2, x3, x4) {
  function down(a, b) {
    return !a && !b ? false : true;
  }
  function up(a, b) {
    return a && b ? true : false;
  }

  //   console.log(down(x1, x2));
  //   console.log(down(x3, x4));
  //   console.log(up(down(x1, x2), down(x3, x4)));

  return up(down(x1, x2), down(x3, x4));
}

console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false
