function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    if (!i.toString().match(/[1-46-9]/g)) answer.push(i);
  }

  if (answer.length === 0) answer = [-1];

  return answer;
}

console.log(solution(5, 555)); //[5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); //[-1]

function* generate() {
  let i = 0;
  while (true) {
    yield Number(Number(i).toString(2)) * 5;
    i++;
  }
}

function solution2(l, r) {
  const gen = generate();

  let a = 0;

  const arr = [];

  while (a < l) {
    a = gen.next().value;
  }
  while (a <= r) {
    arr.push(a);
    a = gen.next().value;
  }
  return arr.length ? arr : [-1];
}

console.log(solution2(5, 555)); //[5, 50, 55, 500, 505, 550, 555]
console.log(solution2(10, 20)); //[-1]
