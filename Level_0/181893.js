function solution(arr, query) {
  query.forEach((elem, index) => {
    if (index % 2 === 0) arr = arr.slice(0, elem + 1);
    else arr = arr.slice(elem);
    // console.log(arr);
  });
  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); //[1, 2, 3]
