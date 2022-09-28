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
  let result;
  let player = playerSelection();
  let comp = computerSelection();
  if (player === "paper") {
    if (comp === "rock") {
      return "player wins";
    } else if (comp === "scissors") {
      return "comp wins";
    } else {
      return "tie";
    }
  } else if (player === "scissors") {
    if (comp === "rock") {
      return "comp wins";
    } else if (comp === "paper") {
      return "player wins";
    } else {
      return "tie";
    }
  } else if (player === "rock") {
    if (comp === "paper") {
      return "comp wins";
    } else if (comp === "scissors") {
      return "player wins";
    } else {
      return "tie";
    }
  }
}

function getComputerChoice() {
  let resultarray = ["rock", "paper", "scissors"];
  let compChoice = resultarray[Math.floor(Math.random() * resultarray.length)];
  return compChoice;
}
console.log(getComputerChoice());

function getPlayerChoice() {
  let playerChoice = prompt("rock paper scissors?");
  //   let result2 = playerChoice.toLowerCase();
  return playerChoice;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
console.log(playRound(getPlayerChoice, getComputerChoice));

//need to switch to callback or promises to solve asynchronous issues
