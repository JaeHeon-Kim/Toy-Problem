##rotatedArraySearch

###문제
부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

###입력
인자 1 : rotated
number 타입을 요소로 갖는 배열
rotated[i]는 정수
인자 2 : target
number 타입의 정수

###출력
number 타입을 리턴해야 합니다.

###주의사항
rotated에 중복된 요소는 없습니다.
target이 없는 경우, -1을 리턴해야 합니다.

###입출력 예시
```js
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
```

###Advanced
단순히 처음부터 끝까지 찾아보는 방법(O(N)) 대신 다른 방법(O(logN))을 탐구해 보세요.

###Code
```js
const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 이진탐색
  let left = 0
  let right = rotated.length - 1
  
  while(left <= right) {
    let middle = parseInt((left + right) / 2) // parseInt로 정수로 만들어주지 않으면 인덱스로 배열에 접근할 수 없다
    
    if(rotated[middle] === target) return middle // 여기까진 단순한 이진 탐색과 같지만
    
    if(rotated[left] < rotated[middle]) { // 배열의 왼쪽이 작을경우 === 배열의 왼쪽 절반이 정렬된 경우
    // 배열이 정렬 되었나 안 되었나만 따진다

    // 배열의 왼쪽에 찾고자하는 target이 있어?
      if(target < rotated[middle] && target >= rotated[left]) { // 있다
        // target이 왼쪽 배열에 있으면 오른쪽 배열엔 target이 없으므로 right의 값을 조정해준다
        right = middle - 1 
      } else { // 없다
        // target이 왼쪽 배열에 없으면 left부터 middle은 볼 필요 없다
        left = middle + 1 
      }
    }
    if(rotated[right] > rotated[middle]) {// 배열의 오른쪽이 큰 경우 === 배열의 오른쪽 절반이 정렬된 경우
      if(target <= rotated[right] && target > rotated[middle]) { // 배열의 오른쪽에 찾고자하는 target이 있을 경우
        left = middle + 1
      } else { // target이 오른쪽 배열에 없으면 middle부터 right은 볼 필요 없다
        right = middle - 1
      }
    }
  }
  return -1
};
```
