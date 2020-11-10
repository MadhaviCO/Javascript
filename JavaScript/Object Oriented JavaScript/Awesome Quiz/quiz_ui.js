// Display the question
    // if last question, display the score
// After user clicks on the select answer button,
    // record the user's choice, keep score, Display the next question
    

var QuizUI = {
  displayNext : function () {
      if (quiz.hasEnded()) {
        this.displayScore();
      } else {
        this.displayQuestion();
        this.displayChoices();
        this.displayProgress();
      }
  },
  
  displayQuestion : function () {
      this.populateIdWithHTML('question', quiz.getCurrentQuestion().text);    
  },
  
  displayChoices : function () {
    var choices = quiz.getCurrentQuestion().choices;
    for (var i = 0; i < choices.length; i ++ ) {
      this.populateIdWithHTML('choice'+i, choices[i]);
      this.guessHandler("guess"+i, choices[i]);
    }
  },
  
  displayScore : function() {
    var gameOverHtml = '<h1>Game Over </h1>';
    gameOverHtml += "<h2>Your Score is: " + quiz.score + "</h2>";
    this.populateIdWithHTML('quiz', gameOverHtml);
  },
  
  populateIdWithHTML : function (id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  
  guessHandler : function (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },
  
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }
}