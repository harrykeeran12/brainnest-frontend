
let gameStart = false;

function computerPlay(){
  let choices = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)
  return choices[random]
}
function playerTurn(choice){
  while(true){
    if (gameStart) {
      switch (choice) {
        case 'rock':
          playerChoice = [1, 0, 0]
          console.log(`Player chooses ${choice}!`)
          return 'rock'
        case 'paper':
          playerChoice = [0, 1, 0]
          console.log(`Player chooses ${choice}!`)
          return 'paper'
        case 'scissors':
          playerChoice = [0, 0, 1]
          console.log(`Player chooses ${choice}!`)
          return 'scissors'
      }
    }
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
  gameStart = true;

  if (!gameStart) {
    document.querySelector('.start').innerHTML = 'Start Game';
  } else {
    document.querySelector('.start').innerHTML = 'Submit answer';
  }

  let paragraphLog = document.querySelector('.log');
  let playerPoints = 0;
  let computerPoints = 0;

  let playerScore = document.querySelector('.playerScore .number');
  let computerScore = document.querySelector('.computerScore .number');

  let question = document.querySelector('.question');

  let rockButton = document.querySelector('.rock');
  let paperButton = document.querySelector('.paper');
  let scissorsButton = document.querySelector('.scissors');

  question.innerHTML = 'Choose either rock, paper, or scissors.'
  
  let playerChoice = [0, 0, 0];
  rockButton.addEventListener('click', ()=>{
    playerGo = playerTurn('rock')
  })
  paperButton.addEventListener('click', () => {
    playerGo = playerTurn('paper')
  })
  scissorsButton.addEventListener('click', () => {
    playerGo = playerTurn('scissors')
  })
  playerChoice = [0, 0, 0]
  let computerGo = computerPlay();
  let verdict = round(playerGo, computerGo)
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
  


  

    
  
  
  



