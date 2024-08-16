"use strict";
/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and
  store it in a separate array. Call show_magicians() with each array to
  show that you have one array of the original names and one array
  with the Great added to each magician’s name. */
// Array of magician names
let magicians = ["Afaq", "Ausaf", "Imad", "Zia"];
// Function to modify a copy of the magicians' names
function make_great(magicians) {
    let great_magicians = [...magicians]; // Create a copy of the original array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = "The Great " + great_magicians[i];
    }
    return great_magicians;
}
// // Function to show magicians
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// Create a modified array with "The Great" added
let great_magicians = make_great(magicians);
// Show the original magicians' names
console.log("Original Magicians:");
console.log(magicians);
// Show the modified magicians' names
console.log("\nGreat Magicians:");
console.log(great_magicians);
