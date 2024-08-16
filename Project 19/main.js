"use strict";
// This project are creating with the help of project 15 in our assignment
let guestList = ["Salman", "Umair", "Amir", "Hina"];
// Remove the first guest from the list
let dontCome = guestList[0];
console.log(dontCome, "Nahi a sakta");
// Replace the first guest with "Usman"
guestList.splice(0, 1, "Usman");
// Print an invitation message for each guest
guestList.forEach((guest) => {
    console.log(`Assala mu Alaikum ${guest}, would you like to have dinner with me?`);
});
// Print the number of people you are inviting to dinner
console.log(`I am inviting ${guestList.length} people to dinner.`);
