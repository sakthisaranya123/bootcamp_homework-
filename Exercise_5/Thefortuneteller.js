// Function to generate a fortune
function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    var fortune = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.";
    console.log(fortune);
}

// Calling the function with different values
tellFortune(2, "Sakthi", "New York", "Software Engineer");
tellFortune(0, "Saranya", "San Francisco", "Graphic Designer");
tellFortune(3, "Alex", "Los Angeles", "QA Engineer");
