var first = document.getElementById("firstplace");
var second = document.getElementById("secondplace");
var third = document.getElementById("thirdplace");
var clear = document.getElementById("clearscore");

// CLEARS LEADERBOARD
clear.addEventListener("click", function () {
  first.textContent = "";
  second.textContent = "";
  third.textContent = "";
  localStorage.clear();
  location.reload();
});

// RETRIEVES LEADERBOARD FROM LOCAL STORAGE
leaderBoard = localStorage.getItem("scores");
if (leaderBoard !== null) {
  leaderBoard = JSON.parse(leaderBoard);
} else {
  leaderBoard = [];
}

console.log(scores);

// NEED FUNCTION TO STORE SCORE PAIRS IN ARRAY, RANK THEM IN ORDER OF HIGHEST SCORE
// function sortWinners() {
