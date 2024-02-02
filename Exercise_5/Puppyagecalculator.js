// Function to calculate dog's age in dog years
function calculateDogAge(puppyAge, conversionRate = 7) {
    var dogAge = puppyAge * conversionRate;
    console.log("Your doggie is " + dogAge + " years old in dog years!");
}

// Calling the function with different values
calculateDogAge(2);  // Default conversion rate (7)
calculateDogAge(3, 6);  // Custom conversion rate (6)
calculateDogAge(1.5);  // Default conversion rate (7)
