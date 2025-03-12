function solution(rank, attendance) {
  //   console.log({ rank, attendance });

  let picked = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i] === true) {
      picked.push({ rank: rank[i], index: i });
    }
  }

  picked = picked.sort((a, b) => a.rank - b.rank);

  return picked[0].index * 10000 + picked[1].index * 100 + picked[2].index;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
); //	20403
console.log(solution([1, 2, 3], [true, true, true])); //	102
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
); //	50200
