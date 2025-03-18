function solution(my_str, n) {
    const answer = []
    let tempStringArray = []
    my_str.split('').forEach((per) => {
        if(tempStringArray.length < n){
            tempStringArray.push(per)
        }
        if(tempStringArray.length === n){
            answer.push(tempStringArray.join(''));
            tempStringArray = []
        }
    })

    tempStringArray.length > 0 ? answer.push(tempStringArray.join('')) : null

    return answer;
}