function solution(arr) {
  console.log(arr);

  let newArr = [];
  let x = 0;

  while (true) {
    let flagCnt = 0;
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      console.log({ elem });

      const value =
        elem >= 50 && elem % 2 === 0
          ? elem / 2
          : elem < 50 && elem % 2 === 1
          ? elem * 2 + 1
          : elem;

      console.log({ value });

      if (elem === value) {
        flagCnt++;
      }

      newArr.push(value);
    }

    if (flagCnt === arr.length) break;
    else {
      x++;
      arr = [...newArr];
    }

    console.log({ newArr });
  }
  return x;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // 5
