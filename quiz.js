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

function question1() {
  var answerElA = document
    .getElementById("btnA")
    .addEventListener("click", evaluateA());
  var answerElB = document
    .getElementById("btnB")
    .addEventListener("click", evaluateB());
  var answerElC = document
    .getElementById("btnC")
    .addEventListener("click", evaluateC());
  var answerElD = document
    .getElementById("btnD")
    .addEventListener("click", evaluateD());

  function evaluateA() {
    // incorect sound triggers
    return;
  }
  function evaluateB() {
    // incorrect sound triggers
    return;
  }
  function evaluateC() {
    // incorrect sound triggers
    return;
  }
  function evaluateD() {
    // CORRECT sound triggers
    question2();
  }
}

var question2 = "How does a FOR loop start?";
var answer2a = "for i = 1 to 5";
var answer2b = "for (i = 0; i<=5)";
var answer2c = "for (i = 0; i<=5; i++)";
var answer2d = "for (i <=5; i++)";

funct;

var question3 =
  "[How do you find the number with the highest value of x and y?]";
var answer3a = "Math.max(x, y)";
var answer3b = "ceil(x, y)";
var answer3c = "Math.ceil(x, y)";
var answer3d = "top(x, y)";

var question4 = "[]";
var answer4a = "";
var answer4b = "";
var answer4c = "";
var answer4d = "";

var question5 = "[]";
var answer5a = "";
var answer5b = "";
var answer5c = "";
var answer5d = "";
