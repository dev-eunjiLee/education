function solution(cards1, cards2, goal) {
  let answer = "Yes";

  for (let curr of goal) {
    let cards1Index = cards1.indexOf(curr);
    let cards2Index = cards2.indexOf(curr);

    if (cards1Index !== 0 && cards2Index !== 0) {
      answer = "No";
      break;
    }

    cards1Index !== -1 ? cards1.shift() : cards2.shift();
  }

  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"No"
console.log(solution(["i"], ["want"], ["i", "want"])); //"Yes"
console.log(solution(["i", "water"], ["want"], ["i", "want", "water"])); //"Yes"
console.log(solution(["water", "i"], ["want"], ["i", "want", "water"])); //"No"
console.log(
  solution(["water", "i"], ["want", "hot"], ["i", "want", "hot", "water"])
); //"No"
console.log(
  solution(["i", "want"], ["water", "hot"], ["i", "want", "hot", "water"])
); //"No"
console.log(
  solution(["i", "see", "to"], ["you", "now", "me"], ["i", "see", "now", "me"])
); //"No"
