"use strict";
/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
// Array of usernames (initially with users)
let userNames = ["Ausaf", "Afaq", "Admin", "Imad", "Bilawal"];
// Remove all userNames from the array
userNames = [];
// Check if the list is empty
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print a greeting if the array is not empty
    userNames.forEach(oneUser => {
        if (oneUser === 'Admin') {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in.`);
        }
    });
}
