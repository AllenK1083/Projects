let question = "What planet is known as the 'Red Planet'?";
let choices = ["Earth", "Mars", "Jupiter", "Saturn"];
let correctAnswer = "Mars";

function checkAnswer(button){};
function displayQuestion(){
  document.getElementById("question").innerHTML = question;
  for (let i = 0; i<4; i++)
  {const btn = document.getElementById("choice"+i);
  btn.innerHTML = choices[i];
  btn.value = choices[i];
}
};

displayQuestion();