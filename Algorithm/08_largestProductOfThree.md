##largestProductOfThree

###문제
정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

###입력
인자 1 : arr
number 타입을 요소로 갖는 임의의 배열

###출력
number 타입을 리턴해야 합니다.

###주의사항
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
배열의 요소는 음수와 0을 포함하는 정수입니다.
배열의 길이는 3 이상입니다.

###입출력 예시
```js
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
```

###Code
```js
const largestProductOfThree = function (arr) {

  let sortedArr = arr.slice().sort((a, b) => a - b) // arr 오름차순 정렬 후
  
  let len = arr.length;
  
  let oddMinus = sortedArr[len - 3] * sortedArr[len - 2] * sortedArr[len -1] // 음수가 홀수개이면 가장 큰 숫자 3개를 곱한다
  let evenMinus = sortedArr[0] * sortedArr[1] * sortedArr[len - 1] // 음수가 짝수개이면 가장 작은 음수 2개를 곱하고 가장 큰 수를 곱한다
  
  return Math.max(evenMinus, oddMinus) // 두 개 중 큰 값을 반환한다
  };
  ```