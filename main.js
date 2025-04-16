
// Function for getting computer's choice

function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Function for getting human's choice
function getHumanChoice() {
    const humanChoice = prompt("Choose one: Rock, Paper, or Scissors");
    return humanChoice;
}

// Outer Function for playing multiple rounds, setting score.
 function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    
    // Inner function for each round's logic; Choosing winner.
    function playRound(humanChoice,computerChoice) {

    
        // Tie Condition
        if (humanChoice === computerChoice) {
            return ("It's a tie!")
        } 
    
        // Human Wins
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            return ("Human wins " + humanScore);
          }
           if (humanChoice === 'paper' && computerChoice === 'rock') {
                humanScore++;
                return ("Human wins " + humanScore);
          }
           if (humanChoice === 'scissors' && computerChoice === 'paper') {
                humanScore++;
                return ("Human wins " + humanScore);
          }
          
          // Human Loses
            if (humanChoice === 'rock' && computerChoice === 'paper') {
                computerScore++;
                return ("Computer Wins " + computerScore);
          }
             if (humanChoice === 'paper' && computerChoice === 'scissors') {
                computerScore++;
                return ("Computer Wins " + computerScore);
          }
             if (humanChoice === 'scissors' && computerChoice === 'rock') {
                computerScore++;
                return ("Computer Wins " + computerScore);
          }
    }
        
        for(let i =1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("User Score: " + humanScore, "Computer Score: " + computerScore);
        }
        console.log("Final: " + "User Score: " + humanScore, "Computer Score: " + computerScore);
 }

 playGame();