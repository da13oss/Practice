//Problem 1: Checking Age

//Write an arrow function that checks if a user is older than 18.

const checkAge = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(checkAge(20)); // Output: You are good to go!
console.log(checkAge(16)); // Output: Sorry! You must be 18 or older!

//Problem 2: Checking If It's Raining

//Write an arrow function that checks if it is currently raining.


const isRaining = raining => raining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(isRaining(true)); // Output: Get your rain jacket!
console.log(isRaining(false)); // Output: No rain on today's forecast!

//Problem 3: Checking If a Number Is Even

//Write an arrow function that checks if a number is even.


const isEven = num => num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(isEven(4)); // Output: That's an even number!
console.log(isEven(7)); // Output: That's an odd number!

//Problem 4: Comparing Two Numbers

//Write an arrow function that takes in two parameters and checks whether one number is greater than the other.


const compareNumbers = (a, b) => a > b ? `${a} is more than ${b}!` : `${a} is less than ${b}!`;
console.log(compareNumbers(10, 5)); // Output: 10 is more than 5!
console.log(compareNumbers(3, 7)); // Output: 3 is less than 7!