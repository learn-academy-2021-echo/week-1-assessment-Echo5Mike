// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// var temp = Math.floor(Math.random() * 400)
// var temp = 42
// var temp = 350
// var temp = 212
// var temp = "abc"
// var temp = Math.floor(Math.random() * 400)

// if (temp > 212){
//     console.log(`${temp} above boiling point`);
// } else if (temp < 212){
//     console.log(`${temp} below boiling point`);
// } else if (temp === 212){
//     console.log(`${temp} is at boiling point`);
// } else {
//     console.log(`${temp} is not a number`);
// }

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 42, 9, 13]
// var combineNums = (myNumbers1.concat(myNumbers2))
// console.log(combineNums);
// console.log(combineNums.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"
// var currentCohort = "Echo 2021"

// var currentCohort = "Echo 2021"
// var sep = currentCohort.split('')
// var revSep = sep.reverse()
// console.log(revSep.join(""));


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// var myArray = [13, 34, 5, 10, 27, 42]

// var myArray = [13, 34, 5, 10, 27, 42]

// for (let i = 0; i < myArray.length; i++) {
// if(myArray[i]%2 === 0){
//     console.log("even");
// } else if (myArray[i]%2 === 1){
//     console.log("odd");
// }
// }


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var number1 = 58
// var number2 = 100

// var number1 = 27
// var number2 = 24
// var number1 = 29
// var number2 = 29

// if(number1 < number2){
//     let bigNum = (number2 - number1)
//     console.log(bigNum);
// } else if (number1 > number2){
//     let bigNum = (number1 - number2)
//     console.log(bigNum)
// } else if (number1 === number2){
//     let bigNum = (0)
//     console.log(bigNum)
// } else {
//     console.log("please input numbers");
// }
