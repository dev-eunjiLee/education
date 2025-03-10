function solution(arr) {
  //   console.log(arr);
  let i = 0;
  const stk = [];
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] === arr[i]) {
        // console.log("stk[stk.length - 1]", stk[stk.length - 1]);
        // console.log("arr[i]", arr[i]);
        // console.log("i", i);
        stk.pop();
      } else {
        stk.push(arr[i]);
      }
    }
    i++;
  }
  //   console.log("stk", stk);
  if (stk.length === 0) {
    stk.push(-1);
  }
  return stk;
}

console.log(solution([0, 1, 1, 1, 0])); //	[0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); //	[0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); //	[-1]
