// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
	var answer = Array.from({ length: n }, () => Array(n).fill(undefined));

	const totalValueCnt = n * n;

	const directionList = ["right", "down", "left", "up"];
	let directionIndex = 0;

	// 첫 필드는 바로 채움
	answer[0][0] = 1;

	let x = 0;
	let y = 0;

	// 두번째부터 아래 반복문돌려서 처리
	for (let i = 2; i <= totalValueCnt; i++) {
		// direction대로 제대로 데이터가 나오지 않을 경우 while 반복문 돌려서 방향바꿔서 처이
		let right = true;
		let directionCount = 0;
		while (right) {
			let newX = x;
			let newY = y;

			// 방향에 맞춰서 X, Y 좌표 셋팅
			const direction = directionList[directionIndex];
			if (direction === "right") newY++;
			else if (direction === "down") newX++;
			else if (direction === "left") newY--;
			else if (direction === "up") newX--;

			// 좌표가 범위를 벗어나거나, 해당 좌표에 이미 값이 있는 경우 방향 틀기
			if (
				newX >= n ||
				newY >= n ||
				newX < 0 ||
				newY < 0 ||
				answer[newX][newY]
			) {
				if (directionIndex === 3) {
					directionIndex = 0;
				} else {
					directionIndex++;
				}
				directionCount++;
			} else {
				// 좌표가 제대로 된 경우, 해당 좌표를 넘겨주기
				right = false;
				x = newX;
				y = newY;
			}

			// 4방향 다 돌았는데 넘어갈 곳이 없는 경우 전체 반복문 break
			if (directionCount >= 3) break;
		}
		answer[x][y] = i;
	}

	return answer;
}

solution(4); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
solution(5); // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
