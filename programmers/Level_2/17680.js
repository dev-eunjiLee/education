/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 */

function solution(cacheSize, cities) {
  let cache = Array.from({ length: cacheSize });
  let time = 0;
  cities.forEach((per) => {
    const city = per.toLowerCase();
    const index = cache.indexOf(city);
    if (index !== -1) {
      time++;
      if (cacheSize > 0) {
        cache.splice(index, 1);
        cache = [city, ...cache];
      }
    } else {
      time += 5;
      if (cacheSize > 0) {
        cache.splice(cacheSize - 1, 1);
        cache = [city, ...cache];
      }
    }
  });
  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21

console.log(solution(0, ["LA", "LA"])); // 10
