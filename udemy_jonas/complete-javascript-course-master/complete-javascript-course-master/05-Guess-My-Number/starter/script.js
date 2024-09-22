'use strict';

/*
  console.log(document.querySelector('.message').textContent);
  document.querySelector('.message').textContent = '🎉 Correct Number!';

  document.querySelector('.number').textContent = 13;
  document.querySelector('.score').textContent = 10;

  document.querySelector('.guess').value = 23;
  console.log(document.querySelector('.guess').value);
*/

// Math.trunc: 소수점을 잘라낸다.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // 이 함수는 이벤트 발생 시에만 호출되는 함수
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 입력값이 없을 때
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    // 플레이어가 이길 때
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // 스타일을 조정할 때마다 값은 문자열을 지정해줘야 한다. '', 숫자로는 안 됨
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 추측 숫자가 정답보다 높을 때
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // 추측 숫자가 정답보다 낮을 때
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
})

