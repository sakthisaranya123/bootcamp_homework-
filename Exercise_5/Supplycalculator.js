// Function to calculate lifetime supply
function calculateSupply(age, amountPerDay, maxAge = 80) {
    var yearsRemaining = maxAge - age;
    var amountNeeded = Math.round(yearsRemaining * 365 * amountPerDay);
    console.log("You will need " + amountNeeded + " to last you until the ripe old age of " + maxAge);
}

// Calling the function with different values
calculateSupply(25, 2);  // Default max age (80)
calculateSupply(30, 1.5, 90);  // Custom max age (90)
calculateSupply(40, 3.5);  // Default max age (80)
