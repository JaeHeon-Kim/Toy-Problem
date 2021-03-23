const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열의 음수가 홀수면?
  // 절대값으로 곱하고
  // 배열의 음수가 짝수면
  // 그냥 크기로 곱하고?
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  if (count % 2 === 0) {
    // 짝수함수 실행
  } else {
    // 홀수함수 실행
  }

  let positiveArr = [];
  for (let num of arr) {
    const positiveNum = Math.abs(num);
    positiveArr.push(positiveNum);
  }

  const isLargestNum = (ele) => Math.max(...positiveArr) === ele;

  let bigger = [];
  for (let i = 0; i < 3; i++) {
    bigger.push(Math.max(...positiveArr));
    let idx = positiveArr.findIndex(isLargestNum);
    console.log(idx);
    positiveArr.splice(idx, 1);
  }
  let mul = bigger.reduce((a, b) => {
    return a * b;
  });
  return mul;
};
