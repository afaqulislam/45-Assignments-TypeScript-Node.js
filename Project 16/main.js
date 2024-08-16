// Creating a Guestlist Array
var guestList = ["Salman", "Umair", "Amir", "Hina"];
// Creating a Variable
var dontCome = guestList[0];
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
// // Making a Variable to Storing the a middle index of our Guest List Array
// let middleIndex : number = Math.floor(guestList.length / 2);
// Adding a New Member in middle of the Array
guestList.splice(3, 0, "Osama");
// // Print Message of Updated Guest List
// console.log("Updated List of Guests");
// Sending Invitation of Our Guest one by one with their name
guestList.forEach(function (oneGuest) {
    console.log("Assala Mu Alaikum ".concat(oneGuest, ", Would You Like to Dinner with Me"));
});
