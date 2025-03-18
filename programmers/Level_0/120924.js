function solution(common) {
  console.log(common);

  // 공차수열: AP(Arithmetic progression)
  // 공비수열: geometric sequence

  let apFlag; // true: 공차수열, false: 공비수열

  let commonDifference; // 공차
  let commonRatio; // 공비

  commonDifference = common[2] - common[1];

  const firstDivisionResult = common[2] / common[1];
  commonRatio = Number.isInteger(firstDivisionResult)
    ? firstDivisionResult
    : null;

  if (commonRatio === null) {
    apFlag = true;
  } else {
    apFlag = common[2] + commonDifference === common[3];
  }

  let answer;
  const lastElem = common[common.length - 1];
  if (apFlag) {
    answer = lastElem + commonDifference;
  } else {
    answer = lastElem * commonRatio;
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
