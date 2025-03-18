function solution(arr) {
  // 2 ** 1 === 2
  // 2 ** 10 === 1024

  const arrLen = arr.length;
  let targetLen = 0;
  for (let i = 0; i <= 10; i++) {
    targetLen = 2 ** i;
    if (arrLen <= targetLen) {
      break;
    }
  }

  //   console.log(targetLen);

  return [...arr, ...Array.from({ length: targetLen - arrLen }, (_) => 0)];
}

// console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
console.log(solution([1]));
