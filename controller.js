   // controller
   function startGame() {
       totalGuesses = null;
       guessedNumber = null;
       numberToGuess = Math.ceil(Math.random() * 100);
       updateView();
   }
   function guess() {
       totalGuesses++;
       updateView();
   }
   function feedbacktext() {
       if (guessedNumber == null || isNaN(guessedNumber) == true ){
           guessFeedbackText = 'You need to input a number from 0 to 99';
       }
       else if  (guessedNumber == numberToGuess){
           guessFeedbackText = `You have guessed the number! <br/> It took you ${totalGuesses} tries`;
       }
       else if (guessedNumber < numberToGuess){
           guessFeedbackText = 'The number you guessed is too small';
       }
       else if (guessedNumber > numberToGuess){
           guessFeedbackText = 'The number you guessed is too large';
       }
       else {
           guessFeedbackText = 'How did you manage to make this show up?';
       }}
  function checkNumber() {
    if (numberToGuess < 99 && numberToGuess > -1) return true;
    else return false
} 
