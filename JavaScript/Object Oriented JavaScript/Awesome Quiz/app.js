// Create Questions

var questions = [
    new Question("Who was the first President of the United States?", ['George Washington', 'Thomas Jefferson'], "George Washington"),
    new Question("What is the answer to the Unltimate Question of Life, the Universe and Everything?", ['Pi', '42'], "42"),
    new Question("How many states does USA have?", ['50', '35'], '50'),
];
  
var quiz = new Quiz(questions);
 
QuizUI.displayNext();