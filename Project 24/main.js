"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you
create to 10. If you want to try more comparisons, write more tests. Have
at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
Object.defineProperty(exports, "__esModule", { value: true });
// <------------------------------------------------------>
// • Tests for equality and inequality with strings
const Name = "afaq";
console.log(Name == "afaq");
console.log(Name != "afaq");
console.log("<------------------------>");
// • Tests using the lower case function
let Name1 = "AFAQ";
console.log(Name1.toLowerCase() == "afaq");
console.log(Name1.toLowerCase() != "afaq");
console.log("<------------------------>");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log("<------------------------>");
// • Tests using "and" and "or" operators
let num3 = 15;
console.log(num3 != 5 && num3 == 15);
console.log(num3 != 15 && num3 == 15);
console.log(num3 != 5 || num3 > 15);
console.log(num3 != 15 || num3 < 10);
console.log("<------------------------>");
// • Test whether an item is in a array
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("orange"));
console.log("<------------------------>");
// • Test whether an item is not in a array
console.log(fruits.includes("mango"));
