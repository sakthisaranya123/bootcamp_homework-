// Initial array
let people = ["Sakthi", "Saranya", "Mark", "Alex"];

// Iterate through the array and console.log all people
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Remove "Greg" from the array
people.splice(people.indexOf("Sakthi"), 1);

// Remove "James" from the array
people.splice(people.indexOf("Mark"), 1);

// Add "Matt" to the front of the array
people.unshift("Matt");

// Add your name to the end of the array
people.push("YourName");

// Iterate through the array and exit the loop after console.log-ing "Mary"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

// Make a copy of the array using slice (excluding "Mary" and "Matt")
let copyWithoutMaryMatt = people.slice(1, -1);

// Get the indexOf where "Mary" is located
let indexOfMary = people.indexOf("Mary");

// Get the indexOf where "Foo" is located (should return -1)
let indexOfFoo = people.indexOf("Foo");

// Redefine the people variable and remove "Mark", add "Elizabeth" and "Artie"
people = ["Sakthi", "Saranya", "Mark", "Alex"];
people.splice(people.indexOf("Mark"), 1, "Elizabeth", "Artie");

// Create a new variable withBob and set it equal to the people array concatenated with "Bob"
let withBob = people.concat("Bob");

// Print the final array
console.log(people);
console.log(copyWithoutMaryMatt);
console.log(indexOfMary);
console.log(indexOfFoo);
console.log(withBob);
