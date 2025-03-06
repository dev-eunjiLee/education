function solution(n, slicer, num_list) {
  let arr;
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      arr = num_list.slice(0, b + 1);
      break;
    case 2:
      arr = num_list.slice(a);
      break;
    case 3:
      arr = num_list.slice(a, b + 1);
      break;
    case 4:
      arr = num_list.filter((elem, index) => {
        return index >= a && index <= b && (index - a) % c === 0;
      });
      break;
  }
  return arr;
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); //[(2, 3, 4, 5, 6)];
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); //[(2, 4, 6)];
