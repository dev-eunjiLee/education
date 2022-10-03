function solution(s) {

    const sortedList = s.split(" ").sort((a,b) => {return a-b});

    console.log(sortedList)

    const min = sortedList[0];
    const max = sortedList[sortedList.length -1];

    const answer = `${min} ${max}`
    return answer;
}