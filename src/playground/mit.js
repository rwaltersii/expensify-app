// TASK 1 Variables
//
// /*Instructions
//  - Greet your friend by printing a message to the console.
// */
//const myFriend = "Robert";

const { create } = require("enhanced-resolve");

// ///////////////
// function greetings() {
//   return "Greetings " + myFriend;
// }

//leave this line unchanged to console log the results
//console.log("results: ", greetings());

//don't change this line
//
//*********************************************************
//
// TASK 2 Variables
//
//Instructions
// - Check the instructions in the summary file and calculate the current year
// let currentYear = 2021;
// //console log the result
// console.log("current year result: ", currentYear); //should be the value of the currentYear variable
// //don't change this line
// if (typeof module !== "undefined") {
//   module.exports = currentYear;
// }
//*********************************************************
//
// TASK 3 Variables
//
// TODO: declare a const names lacroix1 and initialized it to the value 'grapefruit'
// const lacroix1 = "grapefruit";

// function testBestFlavor() {
//   // TODO: declare a const names lacroix2 and initialized it to the value 'orange'
//   const lacroix2 = "orange";
//   return (
//     "Ana says, lacroix " +
//     lacroix2 +
//     " is a better flavor than lacroix " +
//     lacroix1
//   );
// }

// //check results in the console browser
// console.log("result: ", testBestFlavor());

// //don't change this line
// if (typeof module !== "undefined") {
//   module.exports = testBestFlavor;
// }
//*********************************************************
//
// TASK 4 Arrays
//
// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let elementAtIndexFive = numArray[5];
// // TODO: declare the variable elementAtIndexFive and assign it the value of the element with index number 5 in the array numArray

// // This will print the value of variable elementAtIndexFive to the console
// console.log("The array element with index 5 is: ", elementAtIndexFive);
//*********************************************************
//
// TASK 5 Conditional
//
/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
// let response;

// // Add your code here
// function isOldEnoughToVote(age) {
//   if (age >= 18) return true;
//   else return false;
// }

// //open the browser console to check results
// console.log("results: ", isOldEnoughToVote(18));
// // Don't edit the code below here
// if (typeof module !== "undefined") {
//   module.exports = isOldEnoughToVote;
// }
//
// TASK 6 Functions
//
/* 
Write your first function
- Open the functions-01 folder,
- In add.js, complete the body of the function between the comments
- Make sure to return the sum of x and y
*/
// function add(x, y) {
//   return x + y;
// }

// //open the browser console to check results
// console.log("results: ", add(3, 2));

// //don't change this line
// if (typeof module !== "undefined") {
//   module.exports = add;
// }

//
// TASK 7 Functions
//
/*
/* 
Write the greet() function
- Pass in the name parameter and return a string with the name argument.
- for ex. functionName(parameter){...}
*/
// function greet(name) {
//   return `Hello ${name}`;
// }

// //open the browser console to check results
// console.log("results: ", greet("Dani"));

// //don't change this line
// if (typeof module !== "undefined") {
//   module.exports = greet;
// }
//
// TASK 8 Functions
//
/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

// function isString(x1, x2, x3) {
//   if (
//     typeof x1 === "string" &&
//     typeof x2 === "string" &&
//     typeof x3 === "string"
//   )
//     return "strings";
//   else return "not strings";
// }

// //open the browser console to check results
// console.log("results: ", isString("a", "b", "c"));

// //don't change this line
// if (typeof module !== "undefined") {
//   module.exports = isString;
//

//Painting Exercise with functions-objects Week 2
// let i = 0;
// const arrayLength = data.length;
// while (i < arrayLength) {
//   let ball = data[i];
//   create(ball.x, ball.y, ball.color);
//   i++;
// }
