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
  // question2();

  question2(
    document.getElementById("btnA"),
    document.getElementById("btnB"),
    document.getElementById("btnC"),
    document.getElementById("btnD"),
    questionEl,
    "[How does a FOR loop start?]"
  );
}

// Loads the Question 2 by replacing all textcontent
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
    return;
  }
}

// Loads Question 3 by replacing all textContent
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
  function answer3a() {
    correctSound.play();
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
    return;
  }
  function answer3c() {
    wrongSound.play();
    return;
  }
  function answer3d() {
    wrongSound.play();
    return;
  }
}

// Loads Question 4 by replacing all textContent
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
  function answer4a() {
    wrongSound.play();
    return;
  }
  function answer4b() {
    correctSound.play();
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
    return;
  }
  function answer4d() {
    wrongSound.play();
    return;
  }
}

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
  function answer5a() {
    wrongSound.play();
    messageLose();
  }
  function answer5b() {
    correctSound.play();
    messageWin();
  }
  function answer5c() {
    wrongSound.play();
    messageLose();
  }
  function answer5d() {
    wrongSound.play();
    messageLose();
  }
}

function messageWin() {}

function messageLose() {}
