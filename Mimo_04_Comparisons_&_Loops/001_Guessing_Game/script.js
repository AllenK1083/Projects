let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts = (attempts - 1);
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;
  if (randomNumber == guess){
    feedbackElement.innerHTML = "You guessed Correctly!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber){
    feedbackElement.innerHTML = "Too Low! Try again";
    feedbackElement.style.color = "red";
  } else {

  };
}


