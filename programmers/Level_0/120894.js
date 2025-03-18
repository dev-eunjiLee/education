function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  Object.keys(obj).forEach((key) => {
    numbers = numbers.replaceAll(key, obj[key]);
  });
  return Number(numbers);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); //123456789
console.log(solution("onefourzerosixseven")); //14067
