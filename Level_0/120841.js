function solution(dot) {
  let result = 1;

  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y < 0) result = 4;
  else if (x < 0)
    if (y > 0) result = 2;
    else result = 3;
  return result;
}

console.log(solution([2, 4]));
console.log(solution([-7, 9]));
