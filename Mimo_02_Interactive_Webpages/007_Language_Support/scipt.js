let message = "";
let language = "English";
language = "Chinese";

if (language === "English") {
  message = "Thank you";
} else if (language === "Spanish"){
  message = "Gracias";
} else if (language === "German"){
  message = "Danke";
} else {
  message = "We don't support " + language;
}

console.log(message);