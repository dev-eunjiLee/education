function solution(answers) {
  // 유저별 찍기 목록 및 길이
  const obj = {
    1: {
      answerList: [1, 2, 3, 4, 5],
      length: 5,
    },
    2: {
      answerList: [2, 1, 2, 3, 2, 4, 2, 5],
      length: 8,
    },
    3: {
      answerList: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
      length: 10,
    },
  };

  // 유저별 점수 객체
  const scoreObj = {
    1: 0,
    2: 0,
    3: 0,
  };

  // 유저 목록
  const user = Object.keys(obj);

  // 유저별 점수 객체 만들기
  answers.forEach((answer, index) => {
    for (const perUser of user) {
      scoreObj[perUser] =
        obj[perUser].answerList[index % obj[perUser].length] === answer
          ? scoreObj[perUser] + 1
          : scoreObj[perUser];
    }
  });

  // 최대 점수를 가지고 있는 유저 및 최대 점수
  let maxUserList = [];
  let maxScore = 0;

  user.forEach((perUser) => {
    // maxUserList에 한 명도 없는 경우
    if (maxUserList.length === 0) {
      maxUserList.push(perUser);
      maxScore = scoreObj[perUser];
    } else {
      if (scoreObj[maxUserList[0]] < scoreObj[perUser]) {
        // 최대 점수보다 더 큰 유저인 경우(최대 점수 및 최대 점수 유저 목록 바꿔치기)
        maxUserList = [perUser];
        maxScore = scoreObj[perUser];
      } else if (scoreObj[maxUserList[0]] === scoreObj[perUser]) {
        // 최대점수가 같은 유저인 경우(maxUserList에 추가)
        maxUserList = [...maxUserList, perUser];
      }
    }
  });

  // Number로 타입 변경
  maxUserList = maxUserList.map((per) => Number(per));

  return maxUserList;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 3, 2, 1, 5]));
