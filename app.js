let userScore = 0;
let compScore = 0;
let options = ['rock', 'paper', 'scissors'];

let choices = document.querySelectorAll('.choice');
let userChiceDisplay = document.querySelector('#userDisplay');
let compChoiceDisplay = document.querySelector('#compDisplay');
let userScoreDisplay = document.querySelector('#user-score');
let compScoreDisplay = document.querySelector('#comp-score');
let msg = document.querySelector('#msg');

const resultDisplay = (result) => {
  if (result === 'YOU WIN!') {
    msg.innerText = 'YOU WIN!';
    msg.style.backgroundColor = 'green';
    userScore++;
    userScoreDisplay.innerText = userScore;
  } else {
    msg.innerText = 'YOU LOSE!';
    msg.style.backgroundColor = 'red';
    compScore++;
    compScoreDisplay.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  userChiceDisplay.textContent = `PLAYER: ${userChoice}`;
  let computerChoice = options[Math.floor(Math.random() * 3)];
  compChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;

  if (userChoice === computerChoice) {
    msg.innerText = 'Game draw. Play again';
    msg.style.backgroundColor = '#081b31';
  } else {
    let result;
    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'YOU WIN!' : 'YOU LOSE!';
    } else if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'YOU WIN!' : 'YOU LOSE!';
    } else {
      result = computerChoice === 'paper' ? 'YOU WIN!' : 'YOU LOSE!';
    }

    resultDisplay(result, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});
