function solution(a, d, included) {
  return included.reduce((prev, curr, index) => {
    if (curr === true) {
      console.log(curr, prev);
      prev += a + index * d;
    }
    return prev;
  }, 0);
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37
