function solution(s) {
  const regex = /\{([\d,]+)\}/g;

  const arr = [...s.matchAll(regex)]
    .map((elem) => {
      return elem[1].split(",").map((num) => Number(num));
    })
    .sort((a, b) => a.length - b.length);

  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((elem) => {
      if (!ans.includes(elem)) ans.push(elem);
    });
  }

  return ans;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); //[2, 1, 3, 4]
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); //[111, 20]
// console.log(solution("{{123}}")); //[123]
// console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //[3, 2, 4, 1]
