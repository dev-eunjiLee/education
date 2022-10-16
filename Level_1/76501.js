function solution(absolutes, signs) {
    const numArray = []
    for(let i = 0; i<absolutes.length; i++){
        signs[i] === false ? numArray.push(0-absolutes[i]) : numArray.push(absolutes[i])
    }
    console.log(numArray);
    // var answer = 123456789;

    const answer = numArray.reduce((curr,prev) => {
        return curr+prev
    }, 0)

    return answer;
}