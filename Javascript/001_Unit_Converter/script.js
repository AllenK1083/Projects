let inputValue = 10;
let milesToKm = true;
result = 0;

if(milesToKm === true){result = inputValue * 1.60934}
else {result = inputValue / 1.60934}

const resultString = inputValue + " miles are " + result + " km";
console.log(resultString)

let resultElement = document.getElementById('resultElement')
resultElement.innerHTML = resultString;