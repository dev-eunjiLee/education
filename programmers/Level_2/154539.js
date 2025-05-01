function solution(numbers) {
  const arr = new Array(numbers.length).fill(-1);

  const stack = []; // 본인보다 큰 본인 뒷 숫자를 찾지 못한 경우

  for (let i = 0; i < numbers.length; i++) {
    // 가장 마지막에 stack에 들어온 값이 현재의 numbers[i]보다 작은 경우 numbers[i]가 arr에 들어가야한다.
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      const index = stack.pop();
      arr[index] = numbers[i];
    }
    // 현재의 i는 항상 stack에 들어가야한다. 그 다음부터 본인보다 큰 값을 찾아야한다.
    stack.push(i);
  }
  return arr;
}

console.log(solution([2, 3, 3, 5])); //[3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); //[-1, 5, 6, 6, -1, -1]
