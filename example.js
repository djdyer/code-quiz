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
    question3();
  }
  function answer2d() {
    wrongSound.play();
    return;
  }
}
question2(
  document.getElementById("btnA"),
  document.getElementById("btnB"),
  document.getElementById("btnC"),
  document.getElementById("btnD"),
  questionEl,
  "[How does a FOR loop start?]"
);
