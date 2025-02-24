// 배열 정리하기 108p
/*
제약 조건
1. 정수 배열의 길이는 2이상 10^5이하 
2. 정수 배열의 각데이터값은 |100,000|사이 

1. 내가생각하는 해결 방법
- sort 를 사용하면됨 

2. 책에서 조언하는 주의점
- 제약 조건 을 자세히 봐야됨 데이터의 개수가 10^5라는 점에서 제한시간이 3초일경우 O(N^2)는 사용할수없음 
    즉 for()문을 통해 버블 정렬하는 방식을 사용할순없고 O(NlogN) 방식을 사용해야함  - sort 
3.  생각해봐야하는점
나는 sort 를 제외한 for 을 생각하진못했다 생각 발상을 넓혀보자
 */

function Solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}
