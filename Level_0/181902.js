function solution(my_string) {
  const startCode = "A".charCodeAt();
  const endCode = "z".charCodeAt();

  const stringList = my_string.split("");

  const arr = [];

  const obj = {};

  for (let i = startCode; i <= endCode; i++) {
    const character = String.fromCharCode(i);
    if (character.match(/[A-Za-z]/g) !== null) {
      let cnt = 0;

      for (const elem of stringList) {
        if (elem === character) cnt++;
      }
      arr.push(cnt);
      //   if (cnt !== 0)
      obj[character] = cnt;
    }
  }
  console.log(obj);
  console.log(arr.length);
  return arr;
}

console.log(solution("Programmers")); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0 ]
