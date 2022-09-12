
let gameStart = false;

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let paragraphLog = document.querySelector('.log');
let playerPoints = 0;
let computerPoints = 0;

const playerScore = document.querySelector('.playerScore .number');
const computerScore = document.querySelector('.computerScore .number');

function computerPlay(){
  let choices = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)
  return choices[random]
}
function playerTurn(choice){
  if (gameStart) {
    switch (choice) {
      case 'rock':
        console.log(`Player chooses ${choice}!`)
        return 'rock'
      case 'paper':
        console.log(`Player chooses ${choice}!`)
        return 'paper'
      case 'scissors':
        console.log(`Player chooses ${choice}!`)
        return 'scissors'
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
function game(playerGo, computerGo){

  verdict = round(playerGo, computerGo)

  if (verdict == 1) {
    paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>You win! ${playerGo} beats ${computerGo}!`
    playerPoints += 1;
    playerScore.innerHTML = playerPoints;
  } 
  else if (verdict == 0) {
    paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>Draw!`
  } 
  else {
    paragraphLog.innerHTML = paragraphLog.innerHTML + `<br>You lose! ${computerGo} beats ${playerGo}!`
    computerPoints += 1;
    computerScore.innerHTML = computerPoints;
  }

  if (computerPoints == 5) {
    computerScore.setAttribute('style', 'color:green')
    computerScore.setAttribute('style', 'animation: slightUp 1s infinite ease-in-out;')
    playerScore.setAttribute('style', 'color:red')
  } 
  else if (playerPoints == 5) {
    playerScore.setAttribute('style', 'color:green')
    playerScore.setAttribute('style', 'animation: slightUp 1s infinite ease-in-out;')
    computerScore.setAttribute('style', 'color:red')
  }

}
rockButton.addEventListener('click', function () {
  playerGo = playerTurn('rock')
  let computerGo = computerPlay();
  
  game(playerGo, computerGo)
})
paperButton.addEventListener('click', function () {
  playerGo = playerTurn('paper')
  let computerGo = computerPlay();
  game(playerGo, computerGo)
})
scissorsButton.addEventListener('click', function () {
  playerGo = playerTurn('scissors')
  let computerGo = computerPlay();
  game(playerGo, computerGo)
})

function start(){
  gameStart = true;

  let question = document.querySelector('.question');

  question.innerHTML = 'Choose either rock, paper, or scissors.'
}


  

    
  
  
  



