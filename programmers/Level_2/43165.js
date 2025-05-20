function solution(numbers, target) {
  console.log({ numbers, target });

  let cnt = 0;

  // 계산 함수(재귀로 처리)
  calculate = (sum, index, isAdd) => {
    if (isAdd) {
      // 더해야 하는 경우
      sum += numbers[index];
    } else {
      // 빼야 하는 경우
      sum -= numbers[index];
    }

    if (index === numbers.length - 1) {
      // 현재가 마지막 index인 경우
      if (sum === target) {
        // target인 경우 cnt에 추가
        cnt++;
      }

      // 마지막 index까지가면 재귀함수 끝
      return;
    } else {
      // 현재가 마지막 index가 아닌 경우 다음 index로 덧셈, 뺄셈 진행
      calculate(sum, index + 1, true);
      calculate(sum, index + 1, false);
    }
  };

  // 첫 index를 +, - 진행
  calculate(0, 0, true);
  calculate(0, 0, false);

  return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
