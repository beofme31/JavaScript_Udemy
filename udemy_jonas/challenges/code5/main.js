'use strict';

// 다시 두 체조 팀인 돌핀스와 코알라로 돌아옵니다! 새로운 체조 훈련이 있는데, 이 훈련은 다르게 작동합니다. 각 팀은 3번씩 경쟁한 다음 3개의 점수의 평균을 계산합니다(팀당 평균 점수 1점).한 팀은 다른 팀의 평균 점수가 두 배 이상이어야만 승리합니다. 그렇지 않으면 어떤 팀도 승리하지 못합니다!

// 1. 화살표 함수 calcAverage를 생성하여 3점의 평균을 계산합니다. 이 함수는 세 개의 매개 변수를 가지고 단일 숫자(평균 점수)를 반환해야 합니다.

// 2. 두 개의 새 변수(스코어돌핀과 스코어코알라)를 생성하고 calcAverage 함수에서 반환된 값을 변수에 할당합니다(이 함수를 호출하고 점수를 인수로 통과해야 합니다).

// 3. 위의 규칙에 따라 각 팀의 평균 점수를 매개 변수(avgDolphins 및 avgKoalas)로 취한 다음 우승자를 승리 포인트와 함께 콘솔에 기록하는 함수 체크위너를 만듭니다. 예: 코알라가 승리합니다(30 대 13). (하드코드된 값 대신 avgDolphins 및 avgKoalas를 사용).

// 4. 체크위너 함수를 사용하여 DATA 1과 DATA 2의 승자를 결정합니다.

// 5. 이번에는 무승부 무시. 대신 승자가 없는 경우 무팀 승리...를 콘솔에 기록합니다.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(1, 2, 3));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('Nobody wins!');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);