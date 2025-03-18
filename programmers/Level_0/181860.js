function solution(arr, flag) {
  const X = [];

  flag.forEach((flag, i) => {
    // console.log(flag, i, arr[i]);
    if (flag === true) {
      X.push(...Array.from({ length: arr[i] * 2 }, (_) => arr[i]));
      console.log(X);
    } else {
      let cnt = arr[i];
      while (cnt > 0) {
        X.pop();
        cnt--;
      }
    }
  });
  return X;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4];
