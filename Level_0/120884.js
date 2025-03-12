function solution(chicken) {
  let bonus = 0;

  let coupon = chicken;

  while (coupon >= 10) {
    const newCoupon = Math.floor(coupon / 10);
    const remainCoupon = coupon % 10;

    bonus += newCoupon;

    coupon = newCoupon + remainCoupon;
  }

  return bonus;
}

console.log(solution(100)); // 11
console.log(solution(1081)); // 120
