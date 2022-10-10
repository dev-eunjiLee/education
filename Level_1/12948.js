function solution(phone_number) {

    let convertedPhonNumber = phone_number.toString().split('')
    const lastPhoneNumber = convertedPhonNumber.splice(convertedPhonNumber.length-4,4)
    // console.log(convertedPhonNumber,lastPhoneNumber)
    convertedPhonNumber = convertedPhonNumber.map(per => '*').join('')

    answer = convertedPhonNumber+lastPhoneNumber.join('')


    return answer;
}