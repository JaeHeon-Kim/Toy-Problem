const largestProductOfThree = function (arr) {

  let sortedArr = arr.slice().sort((a, b) => a - b) // arr 오름차순 정렬 후
  
  let len = arr.length;
  
  let oddMinus = sortedArr[len - 3] * sortedArr[len - 2] * sortedArr[len -1] // 음수가 홀수개이면 가장 큰 숫자 3개를 곱한다
  let evenMinus = sortedArr[0] * sortedArr[1] * sortedArr[len - 1] // 음수가 짝수개이면 가장 작은 음수 2개를 곱하고 가장 큰 수를 곱한다
  
  return Math.max(evenMinus, oddMinus) // 두 개 중 큰 값을 반환한다
  };