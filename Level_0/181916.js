function solution(a, b, c, d) {
  const obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  [a, b, c, d].forEach((elem) => {
    obj[elem]++;
  });

  const reversedObj = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== 0) reversedObj[obj[key]].push(Number(key));
  });

  let answer;
  if (reversedObj[4].length === 1) {
    answer = 1111 * reversedObj[4][0];
  } else if (reversedObj[3].length === 1) {
    answer = (10 * reversedObj[3][0] + reversedObj[1][0]) ** 2;
  } else if (reversedObj[2].length === 2) {
    answer =
      (reversedObj[2][0] + reversedObj[2][1]) *
      Math.abs(reversedObj[2][0] - reversedObj[2][1]);
  } else if (reversedObj[2].length === 1) {
    answer = reversedObj[1][0] * reversedObj[1][1];
  } else {
    answer = Math.min(a, b, c, d);
  }

  return answer;
}

console.log(solution(2, 2, 2, 2)); //2222
console.log(solution(4, 1, 4, 4)); //1681
console.log(solution(6, 3, 3, 6)); //27
console.log(solution(2, 5, 2, 6)); //30
console.log(solution(6, 4, 2, 5)); //2
