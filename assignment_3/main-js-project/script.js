function computerPlay(){
  let choices = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)
  return choices[random]
}
function playerTurn(){
  let playerChoice = prompt('Choose either rock, paper, or scissors.')
  switch(playerChoice.toLowerCase()){
    case('rock'):
      return 'rock'
    case('paper'):
      return 'paper'
    case('scissors'):
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
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    let playerGo = playerTurn();
    let computerGo = computerPlay();
    let verdict = round(playerGo, computerGo)
    gameCounter += verdict
    if (verdict == 1) {
      console.log(`You win! ${playerGo} beats ${computerGo}!`)
    } else if(verdict == 0) {
      console.log(`Draw!`)
    }
    else{
      console.log(`You lose! ${computerGo} beats ${playerGo}!`)
    }
  }
  console.log(`The score is ${gameCounter}!`)
  if (gameCounter == 0) {
    return 'You drew!'
  } else if(gameCounter < 0){
    return 'You lost!'
  }
  else{
    return 'You won!'
  }
}

