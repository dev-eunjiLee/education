function solution(seoul) {
    const kim = "Kim"
    let kimCoordinate = 0;
    for(let i = 0; i<seoul.length; i++){
        kimCoordinate = i
        if(seoul[i] === kim){
            break;
        } else {
            continue;
        }
    }
    return `김서방은 ${kimCoordinate}에 있다`
}

console.log(solution(["jame", "Kim"]))