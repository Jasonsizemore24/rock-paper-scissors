
const options = ['rock','paper','scissors'];


// Function for getting the computers choice

function getComputerChoice() {

const random = options[Math.floor(Math.random() * options.length)];

return random;
}



// Function for getting the humans choice

function getHumanChoice() {

const choice = prompt("What is your choice?");
const userChoice = choice.trim().toLowerCase().replace(/[^a-z]/g, '')

if (userChoice === 'rock') {
    return "User selected rock";
  } else if (userChoice === 'paper') {
    return "User selected paper";
  } else if (userChoice === 'scissors') {
    return "User selected scissors";
  } else {
    return "Invalid choice";
  }
}

// Function for each round

function playRound(humanChoice,computerChoice) {
if (humanChoice === computerChoice) {
    console.log("Its a tie!")
}
  
if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log("You win!");
    humanScore++;
  }
   if (userChoice === 'paper' && computerChoice === 'rock') {
    console.log("You win!");
    humanScore++;
  }
   if (userChoice === 'scissors' && computerChoice === 'paper') {
    console.log("You win!");
    humanScore++;
  }
  
  // Lose conditions
    if (userChoice === 'rock' && computerChoice === 'paper') {
    console.log("Computer wins!");
    computerScore++;
  }
     if (userChoice === 'paper' && computerChoice === 'scissors') {
    console.log("Computer wins!");
    computerScore++;
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    console.log("Computer wins!");
    computerScore++;
  }


}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);
