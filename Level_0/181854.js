function solution(arr, n) {
  const isEven = arr.length % 2;

  arr = arr.map((elem, index) => {
    let isInnerEven = index % 2;
    if ((isEven && !isInnerEven) || (!isEven && isInnerEven)) {
      return elem + n;
    } else {
      return elem;
    }
  });

  return arr;
}

console.log(solution([49, 12, 100, 276, 33], 27));
