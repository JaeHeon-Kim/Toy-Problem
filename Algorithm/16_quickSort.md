##quickSort

###문제
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

###입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length는 100,000 이하

###출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)

###주의사항
퀵 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

###입출력 예시
```js
let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
```

###Advanced
quickSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.

###Code
```js
const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 퀵 정렬
  // 피벗을 정하고 왼쪽과 오른쪽을 정렬해주는 것이 관건
  // 피벗보다 작으면 왼쪽
  // 크면 오른쪽으로 분류

  // base case
  if (arr.length <= 1) return arr;

  let pivot = arr[0]
  let left = []
  let right = []
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) { // 현재 숫자가 피벗보다 작으면
      left.push(arr[i]) // 왼쪽 배열에 푸쉬
    } else { // 피벗보다 크면
      right.push(arr[i]) // 오른쪽 배열에 푸쉬
    }
  }

  const lQuickSorted = quickSort(left) // 반복
  const rQuickSorted = quickSort(right) // 반복

  return [...lQuickSorted, pivot, ...rQuickSorted]
};
```