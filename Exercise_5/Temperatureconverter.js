// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is " + fahrenheit.toFixed(2) + "°F");
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");
}

// Calling the functions with different values
celsiusToFahrenheit(25);
fahrenheitToCelsius(98.6);
