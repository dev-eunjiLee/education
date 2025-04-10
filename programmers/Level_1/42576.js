/**
 *
 * 완주하지 못한 선수
 *
 * 마라톤이 진행 결과, 한 명의 선수를 제외하고는 모두 완주
 * 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하
 * 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자
 * 참가자 중 동명이인이 있을 수 있음
 *
 * @param {Array<string>} participant 참가자
 * @param {Array<string>} completion 완주자
 */

function solution(participant, completion) {
  // 참가자 및 완주자 정렬 후, 순회하면서 값이 불일치할 때 값을 리턴하기

  participant = participant.sort();
  completion = completion.sort();

  let failed;

  for (let i = 0; i < participant.length; i++) {
    const nowParticipant = participant[i];
    const nowCompletion = completion[i];

    if (nowParticipant === nowCompletion) continue;
    else {
      failed = nowParticipant;
      break;
    }
  }

  return failed;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //"leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); //"vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //"mislav"
