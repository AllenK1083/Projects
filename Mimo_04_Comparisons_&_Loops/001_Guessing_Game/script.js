let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      feedbackElement.innerHTML = "Congratulations!";
      feedbackElement.style.color = "green";
      attempts = 0
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again.";
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again.";
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts == 0 && guess !== randomNumber){
    feedbackElement.innerHTML = "Game over";
    feedbackElement.style.color = "red";
  }
}