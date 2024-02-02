// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

// Function to calculate the area of a circle
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
}

// Calling the functions with different values
calcCircumference(5);
calcArea(5);
