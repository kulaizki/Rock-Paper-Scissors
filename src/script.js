// in progress

const playButton = document.querySelector(".play");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const clickAudio = document.getElementById("click-audio");
const playAudio = document.getElementById("play-audio");
const playerWinAudio = document.getElementById("player-win-audio");
const aiWinAudio = document.getElementById("ai-win-audio");
const drawAudio = document.getElementById("draw-audio");
const loseAudio = document.getElementById("lose-audio");
const win1Audio = document.getElementById("win1-audio");
const win2Audio = document.getElementById("win2-audio");
const body = document.querySelectorAll("body > :not(.pop)");

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
      });
    });
  });
});

const selectionImages = document.querySelectorAll(".selection img");

selectionImages.forEach((img) => {
  img.addEventListener("click", () => {
    clickAudio.currentTime = 0;
    clickAudio.play();
  });
});

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerSelection = document.getElementById("player");
const AiSelection = document.getElementById("ai");

function setImagePlayer(src) {
  playerSelection.src = src;
  playerSelection.style.height = "7.5rem";
  playerSelection.style.width = "6.1rem";
}

function setImageAI(src) {
  AiSelection.src = src;
  AiSelection.style.height = "7.5rem";
  AiSelection.style.width = "6.1rem";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      setImageAI("images/rock.png");
      return 1;
    case 2:
      setImageAI("images/paper.png");
      return 2;
    case 3:
      setImageAI("images/scissors.png");
      return 3;
  }
}

const player = document.getElementById("player-score");
const ai = document.getElementById("ai-score");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
let playerScore = 0;
let aiScore = 0;
let pChoice = 0;
let aChoice = 0;

rock.addEventListener("click", () => {
  setImagePlayer("images/rock.png");
  pChoice = 1;
  aChoice = getComputerChoice();
  if (aChoice != pChoice) {
    if (aChoice === 2) {
      aiScore++;
      aiWinAudio.currentTime = 0;
      aiWinAudio.play();
    } else {
      playerScore++;
      playerWinAudio.currentTime = 0;
      playerWinAudio.play();
    }
  } else {
    drawAudio.currentTime = 0;
    drawAudio.play();
  }
  player.textContent = `You: ${playerScore}`;
  ai.textContent = `AI: ${aiScore}`;
  gameEnd(playerScore, aiScore);
});

paper.addEventListener("click", () => {
  setImagePlayer("images/paper.png");
  pChoice = 2;
  aChoice = getComputerChoice();
  if (aChoice != pChoice) {
    if (aChoice === 3) {
      aiScore++;
      aiWinAudio.currentTime = 0;
      aiWinAudio.play();
    } else {
      playerScore++;
      playerWinAudio.currentTime = 0;
      playerWinAudio.play();
    }
  } else {
    drawAudio.currentTime = 0;
    drawAudio.play();
  }

  player.textContent = `You: ${playerScore}`;
  ai.textContent = `AI: ${aiScore}`;
  gameEnd(playerScore, aiScore);
});

scissors.addEventListener("click", () => {
  setImagePlayer("images/scissors.png");
  pChoice = 3;
  aChoice = getComputerChoice();
  if (aChoice != pChoice) {
    if (aChoice === 1) {
      aiScore++;
      aiWinAudio.currentTime = 0;
      aiWinAudio.play();
    } else {
      playerScore++;
      playerWinAudio.currentTime = 0;
      playerWinAudio.play();
    }
  } else {
    drawAudio.currentTime = 0;
    drawAudio.play();
  }

  player.textContent = `You: ${playerScore}`;
  ai.textContent = `AI: ${aiScore}`;
  gameEnd(playerScore, aiScore);
});

function gameEnd(playerScore, aiScore) {
  if (playerScore === 5) {
    win1Audio.play();
    win2Audio.play();
    win.classList.add("animate-in");
    win.classList.remove("hidden");
    body.forEach((e) => {
      e.classList.add("blur-out");
      e.style.pointerEvents = "none";
    });
  } else if (aiScore === 5) {
    loseAudio.play();
    lose.classList.add("animate-in");
    lose.classList.remove("hidden");
    body.forEach((e) => {
      e.classList.add("blur-out");
      e.style.pointerEvents = "none";
    });
  }
}

const playAgain = document.querySelectorAll(".play-again");

playAgain.forEach((button) => {
  button.addEventListener("click", () => {
    playAudio.currentTime = 0;
    playAudio.play();
    body.forEach((e) => {
      e.classList.remove("blur-out");
      e.classList.add("animate-in");
      e.style.pointerEvents = "auto";
    });
    if (playerScore === 5) {
      win.classList.remove("animate-in");
      win.classList.add("fade-out");
      win.addEventListener("animationend", () => {
        win.classList.remove("fade-out");
        win.classList.add("hidden");
      });
    } else if (aiScore === 5) {
      lose.classList.remove("animate-in");
      lose.classList.add("fade-out");
      lose.addEventListener("animationend", () => {
        lose.classList.remove("fade-out");
        lose.classList.add("hidden");
      });
    }

    playerScore = 0;
    aiScore = 0;
    player.textContent = `You: ${playerScore}`;
    ai.textContent = `AI: ${aiScore}`;
  });
});
