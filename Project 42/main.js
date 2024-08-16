"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 41.
 Write a function called make_great() that modifies the array of
 magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
*/
// Array of magician names
let magicians = ["Afaq", "Ausaf", "Imad", "Zia"];
// Function to modify magicians' names
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Modifying the magicians array
make_great(magicians);
// Calling the function to show modified magicians
show_magicians(magicians);
