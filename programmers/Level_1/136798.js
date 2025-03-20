function solution(number, limit, power) {
  let weight = 0;

  for (let knight = 1; knight <= number; knight++) {
    let cnt = 2; // 약수의 개수(1과 knight 자신은 전체 다 해당)
    if (knight === 1) {
      // 1의 경우 약수는 [1] 한개다
      cnt = 1;
    } else {
      const knightLimit = Math.floor(knight / 2);

      // knight의 절반이 정수가 아닌 경우에는 약수의 개수를 구해줘야한다.
      for (let divisor = 2; divisor <= knightLimit; divisor++) {
        if (knight % divisor === 0) cnt++;
        if (cnt > limit) break;
      }
    }

    if (cnt > limit) cnt = power;
    weight += cnt;
  }
  return weight;
}
// console.log(solution(5, 3, 2)); //10
// console.log(solution(10, 3, 2)); //21
console.log(solution(100000, 99999, 99999));
