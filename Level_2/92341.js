// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92341
function solution(fees, records) {
  const [defaultTime, defaultPrice, perTime, perPrice] = fees;

  const carMap = new Map();

  records.forEach((per) => {
    // 각각의 입/출차 기록
    const [time, carNumber, inOutFlag] = per.split(" ").map((per, index) => {
      if (index === 0) {
        return per.split(":").reduce((prev, curr, index) => {
          if (index === 0) {
            return 60 * Number(curr);
          } else {
            return prev + Number(curr);
          }
        }, 0);
      }
      return per;
    });

    const oldInfo = carMap.get(carNumber);

    // Map에 출차 기록 정리
    if (oldInfo === undefined) {
      carMap.set(carNumber, {
        cumulativeTime: 0,
        inTime: time,
      });
    } else {
      if (oldInfo.inTime !== null) {
        oldInfo.cumulativeTime += time - oldInfo.inTime;
        oldInfo.inTime = null;
        carMap.set(carNumber, oldInfo);
      } else {
        oldInfo.inTime = time;
      }
    }
  });

  // 출차기록으로 금액 리스트 구하기
  const priceList = Array.from(carMap.keys())
    .map((carNumber) => {
      const oldInfo = carMap.get(carNumber);
      oldInfo.inTime !== null
        ? (oldInfo.cumulativeTime += 23 * 60 + 59 - oldInfo.inTime)
        : null;
      const totalPrice =
        oldInfo.cumulativeTime < defaultTime
          ? defaultPrice
          : defaultPrice +
            Math.ceil((oldInfo.cumulativeTime - defaultTime) / perTime) *
              perPrice;
      return { carNumber, totalPrice };
    })
    .sort((a, b) => {
      return a.carNumber - b.carNumber;
    })
    .map((per) => per.totalPrice);

  // let priceList
  return priceList;
}
