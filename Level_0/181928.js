function solution(num_list) {
  let odd = "";
  let even = "";
  for (const elem of num_list) {
    if (elem % 2 === 0) even += elem;
    else odd += elem;
  }
  return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));
