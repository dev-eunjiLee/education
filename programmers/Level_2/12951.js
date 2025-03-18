function solution(s) {

    const wordList = s.split(' ');

    const updatedWordList = []

    for(const word of wordList){
        const firstChar = word.slice(0,1);
        const lastCharList = word.slice(1, word.length+1);

        const updatedWord = firstChar.toUpperCase() + lastCharList.toLowerCase();
        updatedWordList.push(updatedWord)
    }

    const answer = updatedWordList.join(' ');
    return answer;
}