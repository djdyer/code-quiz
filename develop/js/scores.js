var first = document.getElementById("firstplace");
var second = document.getElementById("secondplace");
var third = document.getElementById("thirdplace");
var clear = document.getElementById("clearscore");

// NEED FUNCTION TO STORE SCORE PAIRS IN ARRAY, RANK THEM IN ORDER OF HIGHEST SCORE
// function sortWinners() {
//   for (var i = 0; i < leaderBoard.length; i++);
// }

// NEED FUNCTION TO RETRIEVE LEADERBOARD FROM LOCAL STORAGE, DISPLAY THEM ONSCREEN
leaderBoard = JSON.parse(localStorage.getItem("scores"));
first.children[0].textContent = leaderBoard[0].initials;
first.children[2].textContent = leaderBoard[0].score;
second.children[0].textContent = leaderBoard[1].initials;
second.children[2].textContent = leaderBoard[1].score;
third.children[0].textContent = leaderBoard[2].initials;
third.children[2].textContent = leaderBoard[2].score;

// CLEARS LEADERBOARD
clear.addEventListener("click", function () {
  first.children[0].textContent = "";
  first.children[1].textContent = "";
  second.children[0].textContent = "";
  second.children[1].textContent = "";
  third.children[0].textContent = "";
  third.children[1].textContent = "";
  localStorage.clear();
  location.reload();
});
