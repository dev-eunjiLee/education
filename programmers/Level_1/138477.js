function solution(k, score) {
  let arr = [];

  const answer = [];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr = arr.sort((a, b) => b - a);

    answer.push(arr[k - 1] ?? arr[arr.length - 1]);

    arr = arr.slice(0, k);
  }

  return answer;
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); //[10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); //[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
