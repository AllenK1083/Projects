const el = document.querySelector("#words");

function setColor(){
  const input = document.querySelectorAll("input")[0];
  el.style.color = input.value;
}

function toggleUnderline(){
  const underline = el.classList.toggle("underline");
}

function toggleItalic(){
  const italic = el.classList.toggle("italic")
}

function toggleBold(){
  const bold = el.classList.toggle("bold")
}

function toggleMonospace(){
  const mono = el.classList.toggle("mono")
}

function removeFormat(){
  const remove = el.classList.remove("underline","italic","bold","mono")
  el.style.color="black"
}