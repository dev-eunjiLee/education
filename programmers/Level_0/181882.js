function solution(arr) {
  return arr.map((elem) => {
    return elem >= 50 && elem % 2 === 0
      ? elem / 2
      : elem < 50 && elem % 2 === 1
      ? elem * 2
      : elem;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
