// var questions = [
//   {title: "what is 2 + 2",
//   choices: ["1", "4", "5", "3"],
//   answer: "4"
//   },
//   {title: "question 2",
//   choices: ["answer1", "answer2", "answer3", "answer4"],
//   answer: "answer3"
//   }
// ]
// var questionIndex = 0;
// function getQuestion() {
//   var currentQuestion = questions[questionIndex];
//   // display the question title and set the buttons to the choices
// }

// function checkAnswer(event) {
// var userChoice = event.target.innerText;
// if (userChoice === questions[questionIndex].answer){
//   // tell the user the question was right
// } else {
//   //tell the user the question was wrong
// }
// questionIndex++;
// if (questionIndex < questions.length) {
//   getQuestion();
// } else {
//   // game over
// }
// }

// Targets the start button to start the game
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", quizStart);

// GLOBAL VARIABLES DEFINED
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var secondEl = document.getElementById("second");
var timeLeft = 60;
var score = 0;
var quizOver = false;

var history = localStorage.getItem("leaderboard");
if (history.state !== null) {
  console.log(history);
  history = JSON.parse(history);
} else {
  history = [];
}
console.log(history);

// BEGINS QUIZ, TIME STARTS
function quizStart() {
  startBtn.setAttribute("style", "display:none");
  var timeInterval = setInterval(function () {
    if (quizOver === false) {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        secondEl.textContent = "seconds";
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        secondEl.textContent = "second";
      } else {
        if (timeLeft < 0) {
          timeLeft = 0;
        }
        timerEl.textContent = timeLeft;
        clearInterval(timeInterval);
        messageLose();
      }
    }
  }, 1000);

  // INRO H2 REPLACED BY QUESTION 1
  var question1 = "[What is the correct way to write a JavaScript array?]";
  questionEl.textContent = question1;

  //   FIRST ANSWER BANK APPEARS, THEN TARGET PLACED ON EACH
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

// QUESTION 1
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
// ANSWER 1
function answer1d() {
  correctSound.play();
  score += 200;
  question2(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[How does a FOR loop start?]"
  );
}

// if (answer1a() == true || answer1a() == true || answer1a() == true) {
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
  btnA.removeEventListener("click", answer1a);
  btnA.addEventListener("click", answer2a);
  btnB.removeEventListener("click", answer1b);
  btnB.addEventListener("click", answer2b);
  btnC.removeEventListener("click", answer1c);
  btnC.addEventListener("click", answer2c);
  btnD.removeEventListener("click", answer1d);
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
// ANSWER 2
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
  btnA.removeEventListener("click", answer2a);
  btnA.addEventListener("click", answer3a);
  btnB.removeEventListener("click", answer2b);
  btnB.addEventListener("click", answer3b);
  btnC.removeEventListener("click", answer2c);
  btnC.addEventListener("click", answer3c);
  btnD.removeEventListener("click", answer2d);
  btnD.addEventListener("click", answer3d);
}
// ANSWER 3
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
  btnA.removeEventListener("click", answer3a);
  btnA.addEventListener("click", answer4a);
  btnB.removeEventListener("click", answer3b);
  btnB.addEventListener("click", answer4b);
  btnC.removeEventListener("click", answer3c);
  btnC.addEventListener("click", answer4c);
  btnD.removeEventListener("click", answer3d);
  btnD.addEventListener("click", answer4d);
}
function answer4a() {
  wrongSound.play();
  timeLeft -= 5;
  return;
}
// ANSWER 4
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
  btnA.removeEventListener("click", answer4a);
  btnA.addEventListener("click", answer5a);
  btnB.removeEventListener("click", answer4b);
  btnB.addEventListener("click", answer5b);
  btnC.removeEventListener("click", answer4c);
  btnC.addEventListener("click", answer5c);
  btnD.removeEventListener("click", answer4d);
  btnD.addEventListener("click", answer5d);
}
function answer5a() {
  wrongSound.play();
  timeLeft -= 5;
}
// ANSWER 5
function answer5b() {
  correctSound.play();
  score += 200;
  messageWin();
}
function answer5c() {
  wrongSound.play();
  timeLeft -= 5;
}
function answer5d() {
  wrongSound.play();
  timeLeft -= 5;
}

// TARGET TO DISPLAY FINAL SCORE
var scoreEl = document.querySelector(".yourscore");
var initialsInput = document.getElementById("initials");
initialsInput.addEventListener("keypress", collectInitial);

// WIN MESSAGE
function messageWin() {
  var winMsg = document.querySelector(".messageWin");
  winMsg.setAttribute("style", "visibility:visible");
  score = score * timeLeft;
  scoreEl.textContent = "[" + score + " === pts.]";
  quizOver = true;
}

// COLLECTING INITIALS ENTRY / PAIRING WITH SCORE TO SAVE IN LOCAL
function collectInitial(event) {
  if (event.keyCode === 13) {
    var initials = event.target.value;
    var newScore = { score: score, initials: initials };
    history.push(newScore);
    localStorage.setItem("leaderboard", JSON.stringify(history));
    var winMsg = document.querySelector(".messageWin");
    winMsg.setAttribute("style", "display:none");
  }
}

// LOSE MESSAGE
function messageLose() {
  var loseMsg = document.querySelector(".messageLose");
  loseMsg.setAttribute("style", "visibility:visible");
  scoreEl.textContent = "[" + score + " === pts.]";
}

// RESTARTS GAME BY REFRESHING WINDOW
function restart() {
  var close = document.querySelector(".closeBtn");
  close.addEventListener("click", location.reload());
}

function keyEntry() {
  var initialsInput = document.getElementById("initials").value;
  var scorePair = initialsInput + score;
  console.log(scorePair);
}

// NEED FUNCTION TO GATHER ALL SCORE PAIRS, RANK THEM IN ORDER
// function leaderboard(event) {
//   event.preventDefault();
// }

// NEED FUNCTION TO FETCH SCORE PAIRS FROM LOCAL STORAGE
// function printwinners() {
// JSON.parse(localStorage.getItem(""))
