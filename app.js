// function playRound(playerSelection, computerSelection) {
//   let resultarray = ["rock", "paper", "scissors"];
//   playerSelection = "rock";
//   computerSelection =
//     resultarray[Math.floor(Math.random() * resultarray.length)];
//   console.log(computerSelection);

//   if (computerSelection === "scissors") {
//     return "lose";
//   } else if (computerSelection === "paper") {
//     return "win";
//   } else {
//     return "tie";
//   }
// }

// console.log(playRound());

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "win";
  } else {
    return "lose";
  }
}

function getComputerChoice() {
  let resultarray = ["rock", "paper", "scissors"];
  let result = resultarray[Math.floor(Math.random() * resultarray.length)];
  return result;
}
console.log(getComputerChoice());

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//need to switch to callback or promoses to solve asynchronous issues
