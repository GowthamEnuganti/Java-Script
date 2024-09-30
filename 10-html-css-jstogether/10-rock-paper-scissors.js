let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

updateScoreElement();





/*
if (!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}*/


 
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'Scissor') {
    if (computerMove === 'Rock') {
      result = 'You Lose';
    } else if (computerMove === 'Paper') {
      result = 'You Win';
    } else if (computerMove === 'Scissor') {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissor') {
      result = 'You Lose';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else if (computerMove === 'Scissor') {
      result = 'You Win';
    }
  }
  
    
  if(result === 'You Win'){
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.losses += 1;
  } else if(result === 'Tie.') {
    score.ties += 1;
  }


  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();


  document.querySelector('.js-result').innerHTML = result;


  document.querySelector('.js-moves').innerHTML = `
  You
  <img src = "${playerMove}-emoji.png" class="images">
  <img src = "${computerMove}-emoji.png" class="images"> 
  computer`;



}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;



}
function pickComputerMove() {
  const randomNumber = Math.random() * 3;

  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 && randomNumber < 3) {
    computerMove = 'Scissor';
  }

  return computerMove;
}
