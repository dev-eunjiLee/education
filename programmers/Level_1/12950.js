// https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);

  const answer = arr1.map((per, index) => {
    return per.map((nestedPer, nestedIndex) => {
      return nestedPer + arr2[index][nestedIndex];
    });
  });

  // var answer = [[]];
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
