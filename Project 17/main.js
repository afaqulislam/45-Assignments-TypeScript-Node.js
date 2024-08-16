"use strict";
// Creating a Guestlist Array
let guestList = ["Salman", "Umair", "Amir", "Hina"];
// Creating a Variable
let dontCome = guestList[0];
// Print a Message using console
console.log(dontCome, "Nahi a Sakta");
// Add OR Remove New Member In Guest list
guestList.splice(0, 1, "Usman");
// Print a Message using console
console.log("Good News! We Have Found a Bigger Table For Dinner.");
// Adding a New Member in Starting of  Array
guestList.unshift("Bilal");
// Adding a New Member in End of Array
guestList.push("Areeba");
// Adding a New Member in middle of the Array
guestList.splice(3, 0, "Osama");
// Sending Invitation of Our Guest one by one with their name
guestList.forEach((oneGuest) => {
    console.log(`Assala Mu Alaikum ${oneGuest}, Would You Like to Dinner with Me`);
});
console.log("unfortunately,the new dinner table wont arrive on time ,So I can invite only two guest to dinner with me");
// using While loop for printing the message 
for (let i = guestList.length; i > 2; i++) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
// Sending the message for last to Guest
console.log(`Invitation for last two Guest`);
guestList.forEach((lastTow) => {
    console.log(`Luckily ${lastTow} you still Invited to Dinner`);
});
// Now list is Empty
guestList.pop();
guestList.pop();
console.log("Now Guestlist is Empty", guestList);
