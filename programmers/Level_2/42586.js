function solution(progresses, speeds) {
  // 각각의 작업 진행 상황(progress)와 작업 속도(speed)가 주어졌을 때 100% 작업을 진행할 때 까지 걸리는 시간을 구하는 함수
  const getPeriod = (progress, speed) => {
    return Math.ceil((100 - progress) / speed);
  };

  // 가장 맨 앞 원소의 작업시간을 구하고, cnt(배포횟수)를 1로 초기화(무조건 가장 맨 앞 값은 배포가 진행될거니까)
  let prePeriod = getPeriod(progresses[0], speeds[0]);
  let cnt = 1;

  // 배포횟수가 들어갈 최종 리턴 변수 초기화
  const arr = [];

  // i가 1인 경우부터 순회하면서 선행 작업과 작업 기간 비교해서 배포 카운트 배열에 적용하기(i===0은 반복문 밖에서 처리)
  for (let i = 1; i < progresses.length; i++) {
    // 현재 작업의 작업 기간
    const nowPeriod = getPeriod(progresses[i], speeds[i]);

    if (prePeriod >= nowPeriod) {
      // 선행 작업 시간이 더 긴 경우, 후행 작업은 같이 배포되기 때문에 cnt에 값을 추가한다.
      cnt++;
    } else {
      // 선행 작업이 후행 작업보다 기간이 오래 걸리는 경우 후행 작업은 선행 작업과 같이 배포될 수 없기 때문에 선행 작업까지만 배포처리한다.
      // 배포한 후 cnt는 1로 초기화하고 새로운 선행작업기간(prePeriod)를 now로 설정해준다.
      arr.push(cnt);
      cnt = 1;
      prePeriod = nowPeriod;
    }
  }

  // 마지막인데 아직 배포가 안된 경우가 있다면 배포처리 해야한다.
  if (cnt !== 0) arr.push(cnt);

  return arr;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
