"use strict";
// //making array of countries and print it Original Order
// let countriesToVisit : String[] = ["Canada","Denmark","Brazil","America",];
// console.log("Origin Order:",countriesToVisit);
// //print the array in Alphabetical Order
// console.log("alphabetical Order:",[...countriesToVisit].sort());
// //show that the array is still in Original Order
// console.log("Still in Original Order:", countriesToVisit);
// // print the array in Reverse Order
// console.log("Revers Order:",[...countriesToVisit].reverse());
// //show that the array is still in Original Order
// console.log("Still in Original Order:",countriesToVisit);
// // we have change the Original array Now in Reverse Order
// console.log("Original Order Reverse:", countriesToVisit.reverse());
// // print the array to show  that it's back in Original Order
// console.log("Back To  Original Order:", countriesToVisit.reverse());
// // print array to show that the Order is Alphabetical Now
// console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// // we have change again original Order in again Reverse Order Now
// console.log("Original Order Reverse Again:", countriesToVisit.reverse());
// Define an array with the places you'd like to visit
let places = ["America", "Brazil", "Denmark", "Canada"];
// Print the array in its original order
console.log("Original order:", places);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());
// Show that the array is still in its original order
console.log("Still original order:", places);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());
// Show that the array is still in its original order
console.log("Still original order:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Back to original order:", places);
// Sort the array so it’s stored in alphabetical order
places.sort();
console.log("Sorted in alphabetical order:", places);
// Sort to change the array so it’s stored in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);
