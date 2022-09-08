let playerChoice = [0, 0, 0];
function computerPlay(){
  let choices = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)
  return choices[random]
}
function playerTurn(choice){
  switch (choice) {
    case 'rock':
      playerChoice = [1,0,0]
      return 'rock'
    case 'paper':
      playerChoice = [0,1,0]
      return 'paper'
    case 'scissors':
      playerChoice = [0,0,1]
      return 'scissors'
  }
}

function round(playerSelection, computerSelection){
  /* Rock beats Scissors, Scissors beats Paper, Paper beats Rock */
  if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
    /* return `You win! ${playerSelection} beats ${computerSelection}!` */
    return 1
  }
  else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
    /* return `You win! ${playerSelection} beats ${computerSelection}!` */
    return 1
  }
  else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
    /* return `You win! ${playerSelection} beats ${computerSelection}!` */
    return 1
  }
  else if(playerSelection == computerSelection){
    /* return `Draw!` */
    return 0
  }
  else{
    /* return `You lose! ${computerSelection} beats ${playerSelection}!` */
    return -1
  }
}
function game(){
  let gameCounter = 0
  let paragraphLog = document.querySelector('.log');
  let playerPoints = 0;
  let computerPoints = 0;
  let playerScore = document.querySelector('.playerScore .number');
  let computerScore = document.querySelector('.computerScore .number');
  let question = document.querySelector('.question')
  question.innerHTML = 'Choose either rock, paper, or scissors.'
  while(playerPoints < 5 && computerPoints < 5){
    if (playerChoice[0] == 1) {
      playerGo = 'rock'
    } else if (playerChoice[1] == 1) {
      playerGo = 'paper'
    } else if (playerChoice[2] == 1) {
      playerGo = 'scissors'
    }
    playerGo = prompt('Choose either rock, paper, or scissors.')
    let computerGo = computerPlay();
    let verdict = round(playerGo, computerGo)
    gameCounter += verdict
    if (verdict == 1) {
      paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>You win! ${playerGo} beats ${computerGo}!`
      playerPoints += 1;
      playerScore.innerHTML = playerPoints;
    } else if (verdict == 0) {
      paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>Draw!`
    } else {
      paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>You lose! ${computerGo} beats ${playerGo}!`
      computerPoints += 1;
      computerScore.innerHTML = computerPoints;


    }
  }
  
  if (computerPoints == 5) {
    computerScore.setAttribute('style', 'color:green')
    computerScore.setAttribute('style', 'animation: slightUp 1s infinite ease-in-out;')
    playerScore.setAttribute('style', 'color:red')
  } else if (playerPoints == 5) {
    playerScore.setAttribute('style', 'color:green')
    playerScore.setAttribute('style', 'animation: slightUp 1s infinite ease-in-out;')
    computerScore.setAttribute('style', 'color:red')
  }
  
}


