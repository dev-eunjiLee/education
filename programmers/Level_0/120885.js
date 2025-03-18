function solution(bin1, bin2) {
  let answer = "";
  let i = 0;
  let upperValue = 0;

  const maxLength = Math.max(bin1.length, bin2.length);

  while (i < maxLength) {
    const value1 = Number(bin1[bin1.length - 1 - i] ?? 0);
    const value2 = Number(bin2[bin2.length - 1 - i] ?? 0);

    let newValue = upperValue + value1 + value2;

    if (newValue >= 2) {
      upperValue = 1;
      newValue -= 2;
    } else {
      upperValue = 0;
    }

    answer = `${newValue}${answer}`;

    i++;
  }

  if (upperValue > 0) {
    answer = `${upperValue}${answer}`;
  }

  return answer;
}

console.log(solution("10", "11")); //"101"
console.log(solution("1001", "1111")); //"11000"
console.log(solution("0", "10")); // "10"

function solution2(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

console.log(solution2("10", "11")); //"101"
console.log(solution2("1001", "1111")); //"11000"
console.log(solution2("0", "10")); // "10"
