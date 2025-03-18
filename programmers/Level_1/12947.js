function solution(x) {

    const digitList =  x.toString().split('');

    const initialValue = 0;

    const sumOfDigitList = digitList.reduce((prev, curr) => {
        return prev + Number(curr)
    }, initialValue);

    const answer = x % sumOfDigitList === 0


    return answer;
}

console.log(solution(10))