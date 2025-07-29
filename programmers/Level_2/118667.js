function getSum(arr) {
  return arr.reduce((prev, curr) => prev + curr);
}

function solution(queue1, queue2) {
  // console.log({ queue1, queue2 });

  let queue1Sum = getSum(queue1);
  let queue2Sum = getSum(queue2);

  let cnt = 0;

  if (queue1Sum === queue2Sum) return cnt;

  let queue1Index = 0;
  let queue2Index = 0;

  // console.log({ length: queue1.length * 2 });

  while (queue1Sum !== queue2Sum && cnt < queue1.length * 3) {
    // console.log({
    //   queue1Sum,
    //   queue2Sum,
    //   cnt,
    //   length: queue1.length * 2,
    //   queue1Index,
    //   queue2Index,
    //   queue1Sum,
    //   queue2Sum,
    // });

    if (queue1Sum < queue2Sum) {
      // console.log("first");

      // const first = queue2.shift();
      const first = queue2[queue2Index] || queue1[queue2Index % queue1.length];
      // queue1.push(first);

      // console.log("first", { first });

      queue1Sum += first;
      queue2Sum -= first;

      queue2Index++;
    } else {
      // console.log("second");
      // const first = queue1.shift();
      const first = queue1[queue1Index] || queue2[queue1Index % queue2.length];
      // queue1.push(first);

      // console.log("second", { first });

      queue2Sum += first;
      queue1Sum -= first;

      queue1Index++;
    }

    cnt++;
  }

  // console.log({ queue1Sum, queue2Sum, cnt });
  if (queue1Sum !== queue2Sum && cnt === queue1.length * 3) cnt = -1;
  return cnt;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); //2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); //7
console.log(solution([1, 1], [1, 5])); //-1
