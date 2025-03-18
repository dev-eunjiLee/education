// * 링크: https://programmers.co.kr/learn/courses/30/lessons/92334

const sampleInput = [["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2]

function solution(id_list, report, k) {

    // * 정답 제출용
    const answer = [];

    // * 어떤 유저에게 신고를 당했는지?
    const userIdWithReportUserIdList = {}

    report.forEach(perReport => {
        const [userId, whoReported] = perReport.split(" ");
        // console.log(userId, whoReported)
        if(userIdWithReportUserIdList[whoReported]){
            // * 단, 동일한 유저에게 다중 신고를 당한 경우 1회로 간주
            if(!userIdWithReportUserIdList[whoReported].includes(userId)){
                userIdWithReportUserIdList[whoReported].push(userId)
            }
        } else {
            userIdWithReportUserIdList[whoReported] = [userId];
        }
    })

    // * 이메일을 얼마나 받는지?
    const userIdWithEmailCount = {}

    Object.keys(userIdWithReportUserIdList).forEach(perReportedId => {
        if(userIdWithReportUserIdList[perReportedId].length >= k){
            userIdWithReportUserIdList[perReportedId].forEach(perReporterId=>{
                userIdWithEmailCount[perReporterId] = userIdWithEmailCount[perReporterId] === undefined ? 1 : userIdWithEmailCount[perReporterId]+1;
            })
        }
    })

    // console.log(userIdWithEmailCount)

    // * 이메일 순서 정렬
    id_list.forEach(perId => {
        // console.log(userIdWithEmailCount)
        answer.push(userIdWithEmailCount[perId] || 0)
    })

    // * NODE REFL에서 정답 확인용
    console.log(answer)

    return answer;
}

// * 풀이 참조
function solution2(id_list, report, k) {

    // * 중복 제거
    const reports = [...new Set(report)];

    // * 한 유저가 신고받은 수 카운트
    const userIdWithreportedCount = {}
    reports.forEach((perReport) => {
        const [reporterId, reportedId] = perReport.split(" ");
        userIdWithreportedCount[reportedId] = userIdWithreportedCount[reportedId] ? userIdWithreportedCount[reportedId] + 1 : 1;
    })

    // * 유저의 알람 수 카운트
    const userIdWithalarmedCount = {}
    reports.forEach((perReport) => {
        const [reporterId, reportedId] = perReport.split(" ");

        userIdWithalarmedCount[reporterId] =
            userIdWithreportedCount[reportedId] >= k
                ?
                (
                    userIdWithalarmedCount[reporterId] === undefined
                        ? 1
                        : userIdWithalarmedCount[reporterId]+1
                )
                : userIdWithalarmedCount[reporterId]

    })

    const answer = id_list.map((perId) => {
        return userIdWithalarmedCount[perId] || 0
    })

    // * NODE REFL에서 정답 확인용
    console.log(answer)

    return answer;
}

solution2(...sampleInput);