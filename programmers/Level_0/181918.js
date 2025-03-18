function solution(arr) {
  const stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      const lastIndex = stk.length - 1;
      if (stk[lastIndex] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else stk.pop();
    }
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3])); //	[1, 2, 3]
