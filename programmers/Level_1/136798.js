function solution(number, limit, power) {
  let weight = 1; // 1의 약수의 개수를 추가한다.

  for (let knight = 2; knight <= number; knight++) {
    const knightLimit = Math.sqrt(knight); // knight의 제곱근

    let cnt = 0;

    // knight의 제곱근까지만 약수의 개수를 구해준 후, 그 값을 *2하면 약수의 갯수가 나온다.
    // 단, 제곱근이 정수인 경우 제곱근 본인도 약수에 해당하기 때문에 +1 해줘야한다.
    for (let divisor = 1; divisor < knightLimit; divisor++) {
      if (knight % divisor === 0) cnt++;
    }

    cnt += cnt;
    if (Number.isInteger(knightLimit)) {
      cnt += 1;
    }

    if (cnt > limit) cnt = power;
    weight += cnt;
  }
  return weight;
}
console.log(solution(5, 3, 2)); //10
console.log(solution(10, 3, 2)); //21
console.log(solution(100000, 99999, 99999));
