// in progress

const playButton = document.querySelector(".play");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const clickAudio = document.getElementById("click-audio");
const playAudio = document.getElementById("play-audio");

playButton.addEventListener("click", () => {
  playAudio.currentTime = 0;
  playAudio.play();
  one.forEach((div) => {
    div.classList.add("animate-out");
    div.addEventListener("animationend", () => {
      div.classList.add("hidden");
      two.forEach((e) => {
        e.classList.remove("two");
        e.classList.add("animate-in");
      })
    });
  })
});

const selectionImages = document.querySelectorAll(".selection img");

selectionImages.forEach(img => {
  img.addEventListener("click", () => {
    clickAudio.currentTime = 0;
    clickAudio.play();
  });
})

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerSelection = document.getElementById("player");
const AiSelection = document.getElementById("ai");

function setImage(src) {
  playerSelection.src = src;
  playerSelection.style.height = "120px";
}

rock.addEventListener("click", () => {
  setImage("./images/rock.png");
});

paper.addEventListener("click", () => {
  setImage("./images/paper.png");
});

scissors.addEventListener("click", () => {
  setImage("./images/scissors.png");
});

// game();

// function game() {
//     for (let i = 0; i < 5; ++i) {
//       const playerSelection;
//       const computerSelection;
//       console.log(playRound(lower, computerSelection));
//     }
//     // play again
//   }

// function getComputerChoice() {
//   let choice = Math.floor(Math.random() * 3 + 1);

//   switch (choice) {
//     case 1:
//       return "rock";
//     case 2:
//       return "paper";
//     case 3:
//       return "scissors";
//   }
// }

// function playRound(playerSelection, computerSelection) {
//   const results = {
//     rock: { scissors: "win", paper: "lose" },
//     paper: { rock: "win", scissors: "lose" },
//     scissors: { paper: "win", rock: "lose" },
//   };

//   if (results[playerSelection] === undefined) return "Invalid Input";
//   if (playerSelection === computerSelection)
//     return `Its a draw! You both have ${playerSelection}`;

//   return `You ${results[playerSelection][computerSelection]}! ${playerSelection} beats ${computerSelection}`;
// }