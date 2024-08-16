/* Conditional Tests: Write a series of conditional tests. Print a statement describing
each test and your prediction for the results of each test. Your code should
look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

// Tests that evaluate to True/False Conditions
let car = 'subaru';
console.log("Test 1: Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
//This Condition For False
console.log("Test 2: Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

let bike = 'yamaha';
console.log("Test 3: Is bike != 'honda'? I predict True.");
console.log(bike != 'honda'); // True
//This Condition For False
console.log("Test 4: Is bike == 'ducati'? I predict False.");
console.log(bike == 'ducati'); // False

let number1 = 10;
let number2 = 20;
console.log("Test 5: Is number1 < number2? I predict True.");
console.log(number1 < number2); // True
//This Condition For False
console.log("Test 6: Is number1 > number2? I predict False.");
console.log(number1 > number2); // False

let isRaining = false;
console.log("Test 7: Is isRaining == false? I predict True.");
console.log(isRaining == false); // True

let colors = ['red', 'blue', 'green'];
console.log("Test 8: Does colors array contain 'blue'? I predict True.");
console.log(colors.includes('blue')); // True

let city = 'New York';
console.log("Test 9: Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False


let temperature = 75;
console.log("Test 10: Is temperature < 60? I predict False.");
console.log(temperature < 60); // False

