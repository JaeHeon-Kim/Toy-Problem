##insertionSort

###문제
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

###입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length는 1,000 이하

###출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)

###주의사항
삽입 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

###입출력 예시
```js
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
```

###Advanced
insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.


###Code
```js
const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) { // 다음 숫자가 더 크면
      sorted.push(arr[i]); // 그냥 sroted에 넣고
    } else { // 그게 아니면
      for (let j = 0; j < i; j++) { 
        if (arr[i] <= sorted[j]) { // 다음 숫자가 sorted의 몇번째 요소보다 작은지 찾고 그 기준으로  
          const left = sorted.slice(0, j); // 왼쪽엔 다음 숫자보다 작은 배열을 만들고
          const right = sorted.slice(j);// 오른쪽엔 다음 숫자보다 큰 숫자만 있는 배열을 만들어서 
          sorted = left.concat(arr[i], right); // 마지막 합체
          break; // j를 돌리는 반복문을 멈추고 i를 돌리는 반복문으로 간다
        }
      }
    }
  }

  return sorted;
};
```