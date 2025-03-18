function solution(arr1, arr2) {
  const length1 = arr1.length;
  const length2 = arr2.length;

  let answer = 0;
  if (length1 !== length2) {
    answer = length1 - length2 > 0 ? 1 : -1;
  } else {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < length1; i++) {
      sum1 += arr1[i];
      sum2 += arr2[i];
    }
    if (sum1 === sum2) answer = 0;
    else {
      const max = Math.max(sum1, sum2);
      answer = max === sum1 ? 1 : -1;
    }
  }

  return answer;
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); //	1
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])); //	0
