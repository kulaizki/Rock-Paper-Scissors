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
  playerSelection.style.height = "7.5rem";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      AiSelection.src = "./images/rock.png";
      AiSelection.style.height = "7.5rem";
      break;
    case 2:
      AiSelection.src = "./images/paper.png";
      AiSelection.style.height = "7.5rem";
      break;
    case 3:
      AiSelection.src = "./images/scissors.png";
      AiSelection.style.height = "7.5rem";
      break;
  }
}

rock.addEventListener("click", () => {
  setImage("./images/rock.png");
  getComputerChoice();
});

paper.addEventListener("click", () => {
  setImage("./images/paper.png");
  getComputerChoice();
});

scissors.addEventListener("click", () => {
  setImage("./images/scissors.png");
  getComputerChoice();
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