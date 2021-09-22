var questions = [
  { title: "what is 2 + 2", choices: ["1", "4", "5", "3"], answer: "4" },
  {
    title: "question 2",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3",
  },
];
var questionIndex = 0;
function getQuestion() {
  var currentQuestion = questions[questionIndex];
  // display the question title and set the buttons to the choices
}

function checkAnswer(event) {
  var userChoice = event.target.innerText;
  if (userChoice === questions[questionIndex].answer) {
    // tell the user the question was right
  } else {
    //tell the user the question was wrong
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    getQuestion();
  } else {
    // game over
  }
}
