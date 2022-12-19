// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

const people = ["Harry", "Hermione", "Ron"];

function logPerson(person) {
  console.log("The person is " + person);
}

people.forEach(logPerson);

// Function in a Variable
const performLogPerson=function logPerson(person) {
  console.log("The person is " + person);
}


const arrowVersionOfLogPerson=(person)=>{
  console.log("The person is" + person);
};

// Your code here
people.forEach(person=>
  console.log("The person is" + person));

people.forEach(logPerson);

// In JavaScript there are lots of ways to write functions. There is no right or wrong way, but arrow functions are the most modern. 🙂
