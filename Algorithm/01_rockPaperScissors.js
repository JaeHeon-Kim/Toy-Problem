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
  