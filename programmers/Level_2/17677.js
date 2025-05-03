function solution(str1, str2) {
  // 순회의 기준이 될 글자의 길이 최대값 가져오기
  // 단, -1을 해서 맨 마지막 글자가 혼자 원소가 되지 않도록 한다
  const len = Math.max(str1.length, str2.length) - 1;

  const arr1 = [];
  const arr2 = [];

  // 정규식 - 대문자 2글자로만 매칭할 때 사용
  const regex = /^[A-Z]{2}$/;

  for (let i = 0; i < len; i++) {
    for (const [_, { str, arr }] of [
      { str: str1, arr: arr1 },
      { str: str2, arr: arr2 },
    ].entries()) {
      // 2글자씩 잘라서 대문자 2자인지 확인해서 각각의 배열에 추가
      const value = str.slice(i, i + 2).toUpperCase();

      if (regex.test(value)) {
        arr.push(value);
      }
    }
  }

  // 유사도 변수 초기화
  let similarity;

  if (arr1.length === 0 && arr2.length === 0) {
    // [문제조건] - 2자짜리 영문 대문자로만 만든 배열의 길이가 모두 0인 경우 유사도는 1로 정의
    similarity = 1;
  } else {
    // 배열에 원소가 있을 경우, 정렬한 후, 교집합과 합집합을 각각 구한다.

    // 정렬
    for (const arr of [arr1, arr2]) {
      arr.sort();
    }

    let arr1Index = 0;
    let arr2Index = 0;

    // 교집합
    const intersection = [];
    // 합집합
    const union = [];

    // 정렬한 배열에서 arr1, arr2의 index를 각각 설정한 후 순회하면서 하나씩 전진하여 교집합 및 차집합 정의
    while (arr1Index < arr1.length || arr2Index < arr2.length) {
      if (arr1[arr1Index] > arr2[arr2Index]) {
        union.push(arr2[arr2Index]);
        arr2Index++;
      } else if (arr1[arr1Index] < arr2[arr2Index]) {
        union.push(arr1[arr1Index]);
        arr1Index++;
      } else if (arr1[arr1Index] === arr2[arr2Index]) {
        union.push(arr1[arr1Index]);
        intersection.push(arr1[arr1Index]);
        arr1Index++;
        arr2Index++;
      } else {
        union.push(arr1[arr1Index] ?? arr2[arr2Index]);
        arr1Index++;
        arr2Index++;
      }
    }

    similarity = intersection.length / union.length;
  }

  return Math.floor(similarity * 65536);
}
console.log(solution("FRANCE", "french")); //     16384
console.log(solution("handshake", "shake hands")); //	    65536
console.log(solution("aa1+aa2", "AAAA12")); //      43690
console.log(solution("E=M*C^2", "e=m*c^2")); //       65536
console.log(solution("C^ABCD", "C^EFGH")); // 0
console.log(solution("ABC", "BC")); // 32768
