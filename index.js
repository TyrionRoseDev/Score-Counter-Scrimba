let addHome1 = document.getElementById("home-1");
let addHome2 = document.getElementById("home-2");
let addHome3 = document.getElementById("home-3");
let addGuest1 = document.getElementById("guest-1");
let addGuest2 = document.getElementById("guest-2");
let addGuest3 = document.getElementById("guest-3");
let hScoreEl = document.getElementById("hScore");
let gScoreEl = document.getElementById("gScore");
let reset = document.getElementById("resetAll");
let homeScore = 0;
let guestScore = 0;

function hAdd1() {
  homeScore = homeScore += 1;
  console.log(homeScore);
  hScoreEl.textContent = homeScore;
}
function hAdd2() {
  homeScore = homeScore += 2;
  console.log(homeScore);
  hScoreEl.textContent = homeScore;
}

function hAdd3() {
  homeScore = homeScore += 3;
  console.log(homeScore);
  hScoreEl.textContent = homeScore;
}

function gAdd1() {
  guestScore = guestScore += 1;
  console.log(guestScore);
  gScoreEl.textContent = guestScore;
}
function gAdd2() {
  guestScore = guestScore += 2;
  console.log(guestScore);
  gScoreEl.textContent = guestScore;
}
function gAdd3() {
  guestScore = guestScore += 3;
  console.log(guestScore);
  gScoreEl.textContent = guestScore;
}

function newGame() {
  guestScore = 0;
  homeScore = 0;
  gScoreEl.textContent = 0;
  hScoreEl.textContent = 0;
}
