function solution(nums) {
  // 소수가 생성되는 경우의 수
  let cnt = 0;

  for (let a = 0; a <= nums.length - 3; a++) {
    for (let b = a + 1; b <= nums.length - 2; b++) {
      for (let c = b + 1; c <= nums.length - 1; c++) {
        // 배열에서 중복되지 않는 index를 선택한후 나온 값을 더한 변수
        const sum = nums[a] + nums[b] + nums[c];

        // 변수의 제곱근보다 작은 정수에서 약수가 있는지 판별하여 소수여부를 체크
        // 만약, 제곱근 자체가 정수라면 1과 본인 외에도 약수가 있기 때문에 소수라고 볼 수 없다
        const sqrt = Math.sqrt(sum);

        if (Number.isInteger(sqrt)) continue;
        else {
          let flag = true;
          for (let i = 2; i < sqrt; i++) {
            if (sum % i === 0) {
              flag = false;
              break;
            }
          }

          if (flag) cnt++;
        }
      }
    }
  }

  return cnt;
}

console.log(solution([1, 2, 3, 4])); //1
console.log(solution([1, 2, 3])); //0
console.log(solution([1, 2, 7, 6, 4])); //4
console.log(solution([3, 40, 100])); // 0
