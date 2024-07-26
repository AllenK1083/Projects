let counter = 3;

function upvote(){
  counter = counter+1;
  document.getElementById("votes").innerText = counter + " Votes";
}

function downvote(){
  counter = counter - 1;
  document.getElementById("votes").innerText = counter + " Votes";
}

