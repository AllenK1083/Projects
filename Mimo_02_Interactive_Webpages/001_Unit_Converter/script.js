function convert() {
    const inputValue = document.getElementById("userInput").value;
    const unit = document.getElementById('unit').value;
    
    let result = 0;
    if (unit === "milesToKm") {
      result = inputValue * 1.60934;
    } else if (unit === "kmToMiles"){
      result = inputValue / 1.60934;
    } else if (unit === "FahrenheitToCelsius"){
      result = (inputValue - 32) * 5 / 9;
    } else if (unit === "CelsiusToFahrenheit"){
      result = (inputValue * 1.8) + 32
    }
    document.getElementById('resultElement').innerHTML = result;
  }