/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

// Creating a Guestlist Array
let guestList = ["Salman","Umair","Amir","Hina"];

// Creating a Variable
let dontCome = guestList [0];

// Print a Message using console
console.log(dontCome, "Nahi a Sakta");

// Add OR Remove New Member In Guest list
guestList.splice(0,1,"Usman");

// Print a Message using console
console.log("Good News! We Have Found a Bigger Table For Dinner.");

// Adding a New Member in Starting of  Array
guestList.unshift("Bilal");

// Adding a New Member in End of Array
guestList.push("Areeba");

// Adding a New Member in middle of the Array
guestList.splice(3,0,"Osama");

// Sending Invitation of Our Guest one by one with their name
guestList.forEach(oneGuest =>{ 
    console.log(`Assala Mu Alaikum ${oneGuest}, Would You Like to Dinner with Me`)
    });    