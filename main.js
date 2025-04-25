let humanScore = 0;
let computerScore = 0; 


const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const results = document.getElementById("results");
const reset = document.getElementById("reset");


// Function for getting computer's choice
function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Play Round function
function playRound(humanChoice,computerChoice) { 
   
    // Tie Condition
    if (humanChoice === computerChoice) {
        results.innerHTML = "Score: <br>" + "Computer Chooses: " +
        computerChoice + "<br> It's a tie! <br>" + 
        "User: " + humanScore + " Computer: " + computerScore;
        console.log("It's a tie " + humanScore + "-" + computerScore);
        return;
    } 
    
    // Human Wins
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log("Human wins " + humanScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "User wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return ;
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log("Human wins " + humanScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "User wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return ;
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log("Human wins " + humanScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "User wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return ;
    }
          
    // Human Loses
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log("Computer Wins " + computerScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "Computer wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return;
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log("Computer Wins " + computerScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "Computer wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return;
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log("Computer Wins " + computerScore);
        results.innerHTML = "Score: <br>" + 
        "Computer Chooses: " + computerChoice + "<br>" + 
        "Computer wins this round! <br>" + 
        "User: " + humanScore + 
        " Computer: " + computerScore;
        winner();
        return;
    }
    }
        

// Event Listeners to make buttons clickable.

rockBtn.addEventListener("click",() => { 
  playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click",() => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click",() => {
    playRound("scissors", getComputerChoice());
})

reset.addEventListener("click", resetGame);

function winner () {
    if (humanScore === 5) {
        results.innerHTML = "User Wins! Would you like to play again?"; 
     
        computerScore = 0;
        humanScore = 0;
    }
     if (computerScore == 5) {
        results.innerHTML = "Computer Wins! Would you like to play again?";
        humanScore = 0;
        computerScore = 0;
    }
   
}

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    results.innerHTML = "Score: <br>" + "User: " +
    humanScore + " <br>Computer: " + computerScore;
}










 