// Function to find the area and perimeter of a Circle
function circleValues(radius) {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    const perimeter = 2 * pi * radius;
    return { area, perimeter };
}

// Function to reverse a number
function reverseNum(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

// Function to count number of Vowels in String
function countVowel(inputString) {
    const vowels = inputString.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Function to flatten array of arrays using JavaScript reduce
function flattenArr(arr) {
    return arr.reduce((flat, current) => flat.concat(current), []);
}

// Function to check if an input string is a palindrome
function checkPalindrome(inputString) {
    const reversed = inputString.split('').reverse().join('');
    return inputString === reversed;
}

// Function to calculate simple interest
function simpleInt(principal, rate, time) {
    return principal * rate * time / 100;
}

// Function to calculate compound interest
function compoundInt(principal, rate, time, n) {
    const compoundAmount = principal * Math.pow((1 + rate / (n * 100)), n * time);
    return compoundAmount - principal;
}

// Function to generate a random number
function genRandom(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Function to find Factorial of a number
function getFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * getFactorial(n - 1);
    }
}

// Function to add unlimited numbers
function addNumbers(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

// Function to combine unlimited arrays
function addArrays(...arrays) {
    return [].concat(...arrays);
}

// Function to find the count of a letter in a string
function letterCount(inputString, letter) {
    const regex = new RegExp(letter, 'gi');
    const matches = inputString.match(regex);
    return matches ? matches.length : 0;
}

// Function to check if a number is Prime
function checkPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Example usage of the functions
console.log(circleValues(5)); // { area: 78.54, perimeter: 31.42 }
console.log(reverseNum(12345)); // 54321
console.log(countVowel("hello")); // 2
console.log(flattenArr([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(checkPalindrome("radar")); // true
console.log(simpleInt(1000, 5, 2)); // 100
console.log(compoundInt(1000, 5, 2, 4)); // 104.06040100000009
console.log(genRandom(1, 10)); // Random number between 1 and 10
console.log(getFactorial(5)); // 120
console.log(addNumbers(1, 2, 3, 4, 5)); // 15
console.log(addArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(letterCount("hello", 'l')); // 2
console.log(checkPrime(7)); // true
