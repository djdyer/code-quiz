var startBtn = document
  .querySelector("#start")
  .addEventListener("click", quizStart);

var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var secondEl = document.getElementById("second");

// Launches quiz timer, displays first question/answer bank
function quizStart() {
  // Starts timer on click
  var timeLeft = 30;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
      secondEl.textContent = "seconds";
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
      secondEl.textContent = "second";
    } else {
      timerEl.textContent = timeLeft;
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);

  //   Makes first question replace intro text
  var question1 = "[What is the correct way to write a JavaScript array?]";
  questionEl.textContent = question1;

  //   Makes first answer bank appear
  var answerA = document.getElementById("btnA");
  answerA.setAttribute("style", "visibility:visible");
  var answerB = document.getElementById("btnB");
  answerB.setAttribute("style", "visibility:visible");
  var answerC = document.getElementById("btnC");
  answerC.setAttribute("style", "visibility:visible");
  var answerD = document.getElementById("btnD");
  answerD.setAttribute("style", "visibility:visible");
}

// Targeting Answer Buttons
var answerElA = document
  .getElementById("btnA")
  .addEventListener("click", answer1a);
var answerElB = document
  .getElementById("btnB")
  .addEventListener("click", answer1b);
var answerElC = document
  .getElementById("btnC")
  .addEventListener("click", answer1c);
var answerElD = document
  .getElementById("btnD")
  .addEventListener("click", answer1d);

//   Sound effects
var correctSound = new Audio("./sounds/correct.wav");
var wrongSound = new Audio("./sounds/wrong.mp3");

// Evaluates Question 1 answers for correct/incorrect, returns sound effect
function answer1a() {
  wrongSound.play();
  return;
}
function answer1b() {
  wrongSound.play();
  return;
}
function answer1c() {
  wrongSound.play();
  return;
}
function answer1d() {
  correctSound.play();
  question2();
}

// Loads the Question 2 by replacing all textcontent
function question2() {
  var answerElA = document.getElementById("btnA");
  var answerElB = document.getElementById("btnB");
  var answerElC = document.getElementById("btnC");
  var answerElD = document.getElementById("btnD");
  questionEl.textContent = "[How does a FOR loop start?]";
  answerElA.textContent = "for i = 1 to 5";
  answerElB.textContent = "for (i = 0; i<=5)";
  answerElC.textContent = "for (i = 0; i<=5; i++)";
  answerElD.textContent = "for (i <=5; i++)";
  var answerElA = document
    .getElementById("btnA")
    .addEventListener("click", answer2a);
  var answerElB = document
    .getElementById("btnB")
    .addEventListener("click", answer2b);
  var answerElC = document
    .getElementById("btnC")
    .addEventListener("click", answer2c);
  var answerElD = document
    .getElementById("btnD")
    .addEventListener("click", answer2d);
  function answer2a() {
    wrongSound.play();
    return;
  }
  function answer2b() {
    wrongSound.play();
    return;
  }
  function answer2c() {
    correctSound.play();
    question3();
  }
  function answer2d() {
    wrongSound.play();
    return;
  }
}

function question3() {}

// var question3 =
//   "[How do you find the number with the highest value of x and y?]";
// var answer3a = "Math.max(x, y)";
// var answer3b = "ceil(x, y)";
// var answer3c = "Math.ceil(x, y)";
// var answer3d = "top(x, y)";

// var question4 = "[]";
// var answer4a = "";
// var answer4b = "";
// var answer4c = "";
// var answer4d = "";

// var question5 = "[]";
// var answer5a = "";
// var answer5b = "";
// var answer5c = "";
// var answer5d = "";
