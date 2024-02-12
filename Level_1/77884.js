/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * @description
 * 두 정수 left와 right가 매개변수로 주어집니다.
 * left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */
function solution(left, right) {
	let answer = 0;

	const calculationList = [];

	for (let mainIndex = left; mainIndex <= right; mainIndex++) {
		console.log(mainIndex, right);

		// divisor: 약수
		let divisorCnt = 0;

		if (mainIndex === 16) {
			console.log(3);
		}

		for (let i = 1; i <= mainIndex; i++) {
			console.log(`✅ ${i}, ${mainIndex}`);
			if (mainIndex % i === 0) {
				divisorCnt++;
			}
		}

		if (divisorCnt % 2 !== 0) {
			calculationList.push(mainIndex * -1);
		} else {
			calculationList.push(mainIndex);
		}
	}

	console.log(calculationList);

	return answer;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
