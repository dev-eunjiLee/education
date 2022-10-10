function solution(arr) {

    const min = Math.min(...arr)

    let answer = arr.filter(per => {
        return per !== min
    })

    answer = answer.length === 1 ? [-1] : answer

    return answer;
}