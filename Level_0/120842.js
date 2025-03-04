function solution(num_list, n) {
  const X = [];

  let temp = [];
  num_list.forEach((el) => {
    if (temp.length < n) {
      temp.push(el);
    }
    if (temp.length === n) {
      X.push(temp);
      temp = [];
    }
  });
  return X;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // 	[[1, 2], [3, 4], [5, 6], [7, 8]]
