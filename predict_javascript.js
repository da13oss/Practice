//Problem_1

//Why did the code produce that output? If applicable, how would you get the index value that did not output?

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Tesla, Mercedes
//Tesla, Mercedes
//To get a different result I would add a coma to the const otherRandomCar
console.log(randomCar)
console.log(otherRandomCar)


//Problem_2
//Why did the code produce that output? If applicable, how would you get the index value that did not output?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;

//Elon, employeeName is going to throw an error
//Elon, employeeName is not defined
//Because employeeName is not defined as a const object. I would get that index by removing the console.log for (employeeName)

console.log(otherName);
console.log(employeeName);

//Problem 3

//Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'hashedPasswordValue' //added this
}
const password = '12345';
const { password: hashedPassword } = person;  
//12345, undefined
//12345, undefined
// It would produce this output because there isn't a hashedPassword defined, added a password value and it will console log now
console.log(password);
console.log(hashedPassword);

//Problem 4

//Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const [,,,,,fourth] = numbers; //added this
//false, true
//false, true
//It displays the boolean values because of the use of ===
console.log(first === second);
console.log(first === third);
console.log(first === fourth); //added this

//Problem 5

//Why did the code produce that output? Console.log the last value in the secondKey property's array.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//[1, 5, 1, 8, 3, 3]; 1; 5
//[1, 5, 1, 8, 3, 3]; 1; 5
// 1: called the key variable that had the string 'value'; 2: called on second key with displayed the full array; 3: called the 0 index which in this case is 1; and 4: the coma in const [ ,willThisWork] skips the zero integer and logs 5
console.log(key); //1
console.log(secondKey);//2
console.log(secondKey[0]);//3
console.log(willThisWork);//4

//Problem 6

//First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
/*
PROBLEM 6 ANSWER:
//Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
name and index after loop is Ringo:4

//Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
name and index after loop is Ringo:4

//scopes are present in this code block, var only has function scope not block scope 

*/

//Problem 7

//Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }

//When the code runs log (name and index after loop) it returns a reference error, this is because name and index are not outside the loop since let is stated

//Problem 8

//Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
/*
OUTPUT: 
Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
*/

//The code executes without errors and produces the expected output because the correct scoping rules are applied. The use of const and let ensures that variables are appropriately restricted to their intended blocks, preventing potential scope-related issues.

//Problem 9

//Why did the code produce that output? Explain why each console.log looks the way it does.
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

/*
Prediction: True, False
OUTPUT:
console.log(planet.composition[0] === planetCopy.composition[0]) //The output is true because the array in composition is shared between plant and planetCopy
console.log(planet === planetCopy) // This turned out false because planet and planetCopy are just objects in memory
*/