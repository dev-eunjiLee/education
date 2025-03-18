function solution(n) {
    var answer = '';

    for(let i = 1; i<=n; i++){
        if(i%2 === 1){
            answer += '수'
        } else {
            answer += '박'
        }
    }
    console.log(answer)
    return answer;
}

solution(25)