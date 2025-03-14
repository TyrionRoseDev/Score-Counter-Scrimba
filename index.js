let scores = {
  home: 0,
  guest: 0,
};
let gameActive = true;
let timerInterval;
let timeLeft = 60;

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const homeCrown = document.getElementById("home-crown");
const guestCrown = document.getElementById("guest-crown");
const timerElement = document.getElementById("timer");
const gameOverElement = document.getElementById("game-over");
const winnerTextElement = document.getElementById("winner-text");

window.onload = function () {
  startTimer();
  updateWinnerCrown();
};

function updateScore(team, points) {
  if (!gameActive) return;

  scores[team] += points;
  document.getElementById(`${team}-score`).textContent = scores[team];

  const scoreElement = document.getElementById(`${team}-score`);
  scoreElement.classList.add("flash");

  setTimeout(() => {
    scoreElement.classList.remove("flash");
  }, 300);

  updateWinnerCrown();
}

function updateWinnerCrown() {
  homeCrown.style.display = "none";
  guestCrown.style.display = "none";

  if (scores.home > scores.guest) {
    homeCrown.style.display = "block";
  } else if (scores.guest > scores.home) {
    guestCrown.style.display = "block";
  }
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timeLeft = 60;
  gameActive = true;
  timerElement.textContent = timeLeft;
  timerElement.classList.remove("warning");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 10) {
      timerElement.classList.add("warning");
    }

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  gameActive = false;
}

function resetGame() {
  scores.home = 0;
  scores.guest = 0;
  homeScore.textContent = "0";
  guestScore.textContent = "0";

  updateWinnerCrown();

  startTimer();

  homeScore.classList.add("flash");
  guestScore.classList.add("flash");

  setTimeout(() => {
    homeScore.classList.remove("flash");
    guestScore.classList.remove("flash");
  }, 300);
}
