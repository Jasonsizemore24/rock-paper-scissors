
const options = ['rock','paper','scissors'];

function getComputerChoice() {

const random = options[Math.floor(Math.random() * options.length)];
return random;
}

console.log(getComputerChoice());

