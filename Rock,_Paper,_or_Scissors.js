//get user choice, throw error if not eligible
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log ('Error: you must select rock, paper or scissors.');
  }
}
//randomly generate computer choice
function getComputerChoice() {
  let int = Math.floor(Math.random() * 3);
  if(int === 0) {
    return 'rock';
  } else if (int === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) {
	//check to see if game is a tie
  if(userChoice === 'bomb') {
    return 'All I do is win, win ,win...you cheated though.'
  }
  if(userChoice === computerChoice) {
    return 'Tie Game...Play again!'
  }
  //userChoice = rock, comp wins with paper
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'You lost -- the computer wins!'
    } else {
      return 'You win - death to computers!'
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'You lost -- the computer wins!'
    } else {
      return 'You win - death to computers!'
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'You lost -- the computer wins!'
    } else {
      return 'You win - death to computers!'
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log('Your Choice: ' + userChoice);
  let computerChoice = getComputerChoice();
  console.log("Computer\'s Choice: " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
