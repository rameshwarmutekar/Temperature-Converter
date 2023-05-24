function convertTemperature() {
  var inputTemp = parseFloat(document.getElementById("inputTemp").value);
  var inputUnit = document.getElementById("inputUnit").value;
  var outputTemp = document.getElementById("outputTemp");

  // Convert temperature based on selected unit
  if (inputUnit === "celsius") {
    outputTemp.textContent = convertToFahrenheit(inputTemp).toFixed(2) + "°F";
  } else if (inputUnit === "fahrenheit") {
    outputTemp.textContent = convertToCelsius(inputTemp).toFixed(2) + "°C";
  } else if (inputUnit === "kelvin") {
    outputTemp.textContent = convertToCelsius(inputTemp - 273.15).toFixed(2) + "°C";
  }
}

function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

