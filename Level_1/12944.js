function solution(arr) {
    const initialValue = 0;
    const sum = arr.reduce((curr,prev) => {
        return curr + prev
    }, initialValue)

    const answer = sum / arr.length;
    return answer;
}