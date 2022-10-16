function solution(arr, divisor) {

    const answer = arr.reduce((prev, curr) => {
        if(curr % divisor === 0){
            if(prev[0] === -1){
                return [curr]
            } else {
                return [...prev, curr]
            }
        } else {
            return [...prev]
        }
    },[-1]).sort((a,b) => {return a-b})

    return answer;
}