// url: https://school.programmers.co.kr/learn/courses/30/lessons/12981

// 탈락한 유저의 유저 번호 및 실패 라운드 값 리턴
function getFailUserNoAndRound(orderNo, userCnt){
    const userNo = (orderNo+1)%userCnt === 0 ? userCnt:(orderNo+1)%userCnt ;
    const failRound = Math.ceil((orderNo+1)/userCnt);
    return [userNo, failRound]
}

// 탈락 여부 체크
function checkFail(wordSet, word, orderNo, lastLetterOfPreviousWord){
    let failFlag = false
    if(wordSet.has(word) === true){
        // 중복 단어
        failFlag =  true
    } else if(orderNo !== 0 && lastLetterOfPreviousWord !== word.split('')[0]){
        // 앞 단어의 끝 자리로 시작하는 단어가 아닌 경우
        failFlag = true
    }
    return failFlag
}

function solution(n, words) {
    var answer = [];

    const wordSet = new Set()

    let lastLetterOfPreviousWord = ''

    answer = [0,0]

    for(const [i, word] of words.entries()){

        const failFlag = checkFail(wordSet, word, i, lastLetterOfPreviousWord)

        if(failFlag === true){
            answer = getFailUserNoAndRound(i, n)
            break;
        }
        else{
            wordSet.add(word)
            lastLetterOfPreviousWord = word.split('')[word.length-1]
        }
    }


    return answer;
}