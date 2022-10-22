function solution(answers) {

    // 유저별 찍기 목록 및 길이
    const obj = {
        '1': {
            answerList: [1,2,3,4,5],
            length: 5,
        },
        '2': {
            answerList: [2,1,2,3,2,4,2,5],
            length: 8,
        },
        '3': {
            answerList: [3,3,1,1,2,2,4,4,5,5],
            length: 10,
        }
    }

    // 유저별 점수 객체
    const scoreObj = {
        '1': 0,
        '2': 0,
        '3': 0
    }

    // 유저 목록
    const user = Object.keys(obj)

    // 유저별 점수 객체 만들기
    answers.forEach((answer, index) => {
        for(const perUser of user){
            scoreObj[perUser] = obj[perUser].answerList[index % obj[perUser].length] === answer ? scoreObj[perUser] + 1 : scoreObj[perUser]
        }
    })


    console.log(scoreObj)

    // 최대 점수를 가지고 있는 유저
    let maxUser = []
    let maxScore = 0;

    user.forEach((perUser) => {
        console.log(`현재 유저(${perUser})의 점수: ${scoreObj[perUser]}`)
        if(maxUser.length === 0){
            console.log(1)
            maxUser.push(perUser)
            maxScore = scoreObj[perUser]
        } else {
            if(scoreObj[maxUser[0]] === scoreObj[perUser]){
                console.log(2)
                maxUser.push(perUser)
            } else {
                console.log(`현재 maxUser(${maxUser})의 점수: ${scoreObj[maxUser[0]]}`)
                if(scoreObj[maxUser[0]] < scoreObj[perUser]){
                    console.log(3)
                    maxUser = [perUser]
                    maxScore = scoreObj[perUser]
                } else if(scoreObj[maxUser[0]] === scoreObj[perUser]){
                    console.log(4)
                    maxUser = [...maxUser, perUser]
                } else {
                    console.log(5)
                }
            }
        }

    })

    // Number로 타입 변경
    maxUser = maxUser.map(per => Number(per))

    return maxUser;
}

console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([3, 3, 2, 1, 5]))