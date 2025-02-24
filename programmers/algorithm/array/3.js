// 두 개 뽑아서 더하기 p115
/*
제약 조건
1. numbers의  길이는 2 이상 100 이하입니다
2. numbers의 모든 수는 0 이상 100 이하입니다 

1. 내가생각하는 해결 방법
- 1. 배열 생성 2. 반복문을 통해 배열의 각요소들을 서로 더한값을 넣어줌 3. 중복을 제거 

2. 책에서 조언하는 주의점
- 일치하는것을 알수있음 
3.  생각해봐야하는점
- 예시를 통해 일치하는것을 알수있엇지만 만약 예시가 없었더라면 처음부터 중복된 답변이 나올거라는 걸예상 못했을듯
*/
function Solution(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      newArr.push(arr[i] + arr[j]);
    }
  }
  return [...new Set(newArr).sort((a, b) => a - b)];
}
