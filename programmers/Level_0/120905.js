function solution(n, numlist) {
  return numlist.filter((elem) => elem % n === 0);
}
