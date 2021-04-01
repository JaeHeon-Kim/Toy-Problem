##rockPaperScissors

###문제
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

###입력
없음

###출력
2차원 배열(arr[i])을 리턴해야 합니다.
arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
arr[i].length는 3

###주의사항
최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.

###입출력 예시
```js
let output = rockPaperScissors();

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */
 ```

###Advanced
가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.
```js
let output = rockPaperScissors(5);

console.log(output);
/*
    [
      ["rock", "rock", "rock", "rock", "rock"],
      ["rock", "rock", , "rock", "rock", "paper"],
      ["rock", "rock", , "rock", "rock", "scissors"],
      ["rock", "rock", "rock", "paper", "rock"],
      ["rock", "rock", "rock", "paper", "paper"],
      ["rock", "rock", "rock", "paper", "scissors"],
      ["rock", "rock", "rock", "scissors", "rock"],
      // ...etc ...
    ]
  */
```
###Code
```js
const rockPaperScissors = function (rounds) {

    let rPs = ['rock', 'paper', 'scissors']
    let result = [] // 마지막 반환할 배열 생성
    rounds = rounds || rPs.length // 사용자가 rounds를 입력해주면 입력해준 값을 받아가고 입력 안 해주면 rPs의 길이
  
    // base case
    let getRps = (nowRPS, rounds) => { // 2번
      if(nowRPS.length === rounds) { // 현재 진행 중인 가위바위보 배열이 rounds의 길이랑 같아지면
        result.push(nowRPS) // result에 현재 진행된 배열을 넣어준다
        // roudns가 5라면 nowRPS에 5개가 차면 재귀 끝!
        return;
      }
  
      for(let i =0; i < rPs.length; i++) { // 3번
        let curPlay = rPs[i]
        getRps(nowRPS.concat(curPlay), rounds) // 4번
      }
    }
    getRps([], rounds) // 1번
    return result;
  };
  ```