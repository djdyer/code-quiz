// Targets the start button to start the game
var startBtn = document
  .getElementById("start")
  .addEventListener("click", quizStart);

// TARGET TO DISPLAY FINAL SCORE
var scoreEl = document.querySelector(".yourscore");

// Global variables defined, initialized
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var secondEl = document.getElementById("second");
var timeLeft = 60;
var score = 0;

// Launches quiz timer, displays first question/answer bank
function quizStart() {
  // Starts timer on click
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
    }
  }, 1000);

  // HIDES START BUTTON ???
  // if (startBtn == true) {
  //   var hideBtn = document.getElementById("start");
  //   hideBtn.setAttribute("style", "opacity: .5");
  // }

  //   Replaces intro h2 with first question.
  var question1 = "[What is the correct way to write a JavaScript array?]";
  questionEl.textContent = question1;

  //   Makes first answer bank appear, adds target for click on each
  var answerA = document.getElementById("btnA");
  answerA.setAttribute("style", "visibility:visible");
  answerA.addEventListener("click", answer1a);
  var answerB = document.getElementById("btnB");
  answerB.addEventListener("click", answer1b);
  answerB.setAttribute("style", "visibility:visible");
  var answerC = document.getElementById("btnC");
  answerC.addEventListener("click", answer1c);
  answerC.setAttribute("style", "visibility:visible");
  var answerD = document.getElementById("btnD");
  answerD.setAttribute("style", "visibility:visible");
  answerD.addEventListener("click", answer1d);
}

//   SOUND
var correctSound = new Audio("./sounds/correct.wav");
var wrongSound = new Audio("./sounds/wrong.mp3");

// EVALUATES QUESTION 1 ANSWERS
function answer1a() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer1b() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer1c() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer1d() {
  correctSound.play();
  score += 200;
  question2(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[How does a FOR loop start?]",
    timeLeft
  );
}

// if (answerElA == true || answerElB == true || answerElC == true) {
//   wrongSound.play();
//   timeLeft = timeLeft - 5;
// } else {
//   correctSound.play();
//   question2();

// QUESTION 2
function question2(btnA, btnB, btnC, btnD, questionEl, questionText) {
  questionEl.textContent = questionText;
  btnA.textContent = "for i = 1 to 5";
  btnB.textContent = "for (i = 0; i<=5)";
  btnC.textContent = "for (i = 0; i<=5; i++)";
  btnD.textContent = "for (i <=5; i++)";
  btnA.addEventListener("click", answer2a);
  btnB.addEventListener("click", answer2b);
  btnC.addEventListener("click", answer2c);
  btnD.addEventListener("click", answer2d);
}

function answer2a() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

function answer2b() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

// CORRECT 2
function answer2c() {
  correctSound.play();
  score += 200;
  question3(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[How do you find the number with the highest value of x and y?]"
  );
}

function answer2d() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

// QUESTION 3
function question3(btnA, btnB, btnC, btnD, questionEl, questionText) {
  questionEl.textContent = questionText;
  btnA.textContent = "Math.max(x, y)";
  btnB.textContent = "ceil(x, y)";
  btnC.textContent = "Math.ceil(x, y)";
  btnD.textContent = "top(x, y)";
  btnA.addEventListener("click", answer3a);
  btnB.addEventListener("click", answer3b);
  btnC.addEventListener("click", answer3c);
  btnD.addEventListener("click", answer3d);
}

// CORRECT 3
function answer3a() {
  correctSound.play();
  score += 200;
  question4(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[Which of the following are capabilities of functions in JavaScript?]]"
  );
}
function answer3b() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer3c() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer3d() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

// QUESTION 4
function question4(btnA, btnB, btnC, btnD, questionEl, questionText) {
  questionEl.textContent = questionText;
  btnA.textContent = "Return a value";
  btnB.textContent = "Accept parameters";
  btnC.textContent = "Accept parameters and Return a value";
  btnD.textContent = "None of the above";
  btnA.addEventListener("click", answer4a);
  btnB.addEventListener("click", answer4b);
  btnC.addEventListener("click", answer4c);
  btnD.addEventListener("click", answer4d);
}

function answer4a() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

// CORRECT 4
function answer4b() {
  correctSound.play();
  score += 200;
  question5(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[Which of the following is not considered a JavaScript operator?]"
  );
}

function answer4c() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
function answer4d() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}

// QUESTION 5
function question5(btnA, btnB, btnC, btnD, questionEl, questionText) {
  questionEl.textContent = questionText;
  btnA.textContent = "new";
  btnB.textContent = "this";
  btnC.textContent = "delete";
  btnD.textContent = "typeof";
  btnA.addEventListener("click", answer5a);
  btnB.addEventListener("click", answer5b);
  btnC.addEventListener("click", answer5c);
  btnD.addEventListener("click", answer5d);
}

function answer5a() {
  wrongSound.play();
  timeLeft -= 5;
  messageLose();
}
// CORRECT 5
function answer5b() {
  correctSound.play();
  score += 200;
  messageWin();
}
function answer5c() {
  wrongSound.play();
  timeLeft -= 5;
  messageLose();
}
function answer5d() {
  wrongSound.play();
  timeLeft -= 5;
  messageLose(document.querySelector("yourscore"), scoreEl);
}

console.log(score);

// WIN MESSAGE
function messageWin(timeLeft, score) {
  var winMsg = document.querySelector(".messageWin");
  winMsg.setAttribute("style", "visibility:visible");

  score = score * timeLeft;
  scoreEl = scoreEl.textContent("[" + score + " === score]");

  var close = document.getElementById("closeBtn");
  close.addEventListener("click", location.reload());
}

// LOSE MESSAGE
function messageLose(timeLeft, score) {
  var loseMsg = document.querySelector(".messageLose");
  loseMsg.setAttribute("style", "visibility:visible");

  score = score * timeLeft;
  scoreEl = scoreEl.textContent("[" + score + " === score]");

  var close = document.getElementById("closeBtn");
  close.addEventListener("click", location.reload());
}

console.log(score);
