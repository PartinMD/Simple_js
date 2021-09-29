// User Choice
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
};
// Computer Choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) 
    return 'rock';
  else if (randomNumber === 1)
    return 'paper';
  else (randomNumber === 2) 
    return 'scissors';
};
// Determining a Winner
function determineWinner(userChoice, computerChoice) {
  if ( userChoice === computerChoice) {
    return 'The game was a tie!';
  } if (userChoice ==='rock') {
      if (computerChoice === 'paper') {
      return 'The computer won!';
      } else {
      return 'You won!';
      }
  } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
      return 'The computer won!';
      } else {
      return 'You Won!';
      }
  } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'The computer won!';
      } else {
      return 'You won!';
      }
  } if (userChoice ==='bomb') {
    return 'You used a bomb! You WIN!';
  }
};

function playGame(){
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));

};

// Now let's play. There is also a secret cheat code. HINT It's explosive ;)
(playGame());