function solution(s){

    while(true){
        s = s.replace(/(.)\1/g, '')
        if(s === '') return 1
        if(s.match(/(.)\1/g)===null) return 0
    }

    /**
     * * 정규식
     * * ".": 모든 문자
     * * (): 문자 그룹을 정의(하위 표현식)
     * * \숫자: 역참조
     * *       앞에 묶인 하위 표현식의 몇 번째 패턴과 일치해야 하는지를 이야기해준다.
     * *       예시: /(.)\1/: 어떤 글자든 상관없고 그 글자와 똑같은게 그 뒤에 나와야 한다.
     * *       예시: /(.)([0-9]\2): 맨 앞은 아무 글자, 그 뒤는 숫자, 그리고 그 숫자와 같은 숫자가 또 나와야 한다.
     * *
     */

    // 이 답변은 시간 초과
}

console.log(solution('baabaa')) // 1
console.log(solution('cdcd')) // 0

function solution2(s){
    const startTextList = []
    s.split('').forEach(per => {
        if(startTextList[startTextList.length-1] === per) startTextList.pop()
        else startTextList.push(per)
    })
    return startTextList.length === 0 ? 1 : 0
}

console.log(solution2('baabaa')) // 1
console.log(solution2('cdcd')) // 0