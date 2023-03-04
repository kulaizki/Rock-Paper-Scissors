// in progress

const one = document.querySelectorAll(".one");
const playButton = document.querySelector(".play");
const playAudio = document.getElementById("play-audio");

playButton.addEventListener("click", () => {
  playAudio.currentTime = 0;
  playAudio.play();
  one.forEach(function(div) {
    div.classList.add("animate-out");
    div.addEventListener("animationend", () => {
      div.classList.add("hidden");
    })
  })
});

// game();

function game() {
    n = prompt("Enter numbers of Rounds");
    for (let i = 0; i < n; ++i) {
      const playerSelection = prompt("Enter selection");
      const computerSelection = getComputerChoice();
      lower = playerSelection.toLowerCase();
      console.log(playRound(lower, computerSelection));
    }
  }

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const results = {
    rock: { scissors: "win", paper: "lose" },
    paper: { rock: "win", scissors: "lose" },
    scissors: { paper: "win", rock: "lose" },
  };

  if (results[playerSelection] === undefined) return "Invalid Input";
  if (playerSelection === computerSelection)
    return `Its a draw! You both have ${playerSelection}`;

  return `You ${results[playerSelection][computerSelection]}! ${playerSelection} beats ${computerSelection}`;
}