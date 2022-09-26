function solution(survey, choices) {

    const pointMap = new Map()

    for(let i = 0; i<survey.length; i++){
        const perSurvey = survey[i];
        const [negativeType, positiveType]= perSurvey.split('')

        // 각 항목별 점수부여
        let oldPoint;
        let updatedPoint;
        let updatedChar;
        if( choices[i] < 4){
            updatedChar = negativeType
            oldPoint = pointMap.get(updatedChar) || 0
            updatedPoint = 4- choices[i]
        } else if( choices[i] > 4){
            updatedChar = positiveType
            oldPoint = pointMap.get(updatedChar) || 0
            updatedPoint = choices[i] - 4
        }
        pointMap.set(updatedChar, oldPoint + updatedPoint)
    }

    console.log(pointMap)

    let answer = '';

    const typeList = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"]
    ]

    // 점수 비교해서 타입 지정
    for(const perType of typeList){
        const [firstType, secondType] = perType
        const firstPoint = pointMap.get(firstType) || 0;
        const secondPoint = pointMap.get(secondType) || 0;
        if(firstPoint >= secondPoint){
            answer += firstType
        } else {
            answer += secondType
        }
    }

    console.log(answer)
    return answer;
}

solution(	["TR", "RT", "TR"], [7, 1, 3])