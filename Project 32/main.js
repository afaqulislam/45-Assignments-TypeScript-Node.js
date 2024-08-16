"use strict";
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
// List of current usernames
const current_users = ["Ausaf", "Ali", "Bilal", "Afaq", "Zia"];
// List of new usernames to check
const new_users = ["Ahmad", "Salman", "Ausaf", "Zubair", "Afaq"];
// Convert current_users to lowercase for case-insensitive comparison
const current_users_lowercase = current_users.map(user => user.toLowerCase());
// Loop through the new_users list
new_users.forEach(newUser => {
    // Convert newUser to lowercase for comparison
    const new_User_Lower = newUser.toLowerCase();
    // Check if the new username is already taken
    if (current_users_lowercase.includes(new_User_Lower)) {
        console.log(`The username "${newUser}" is already taken. Please choose a different username.`);
    }
    else {
        console.log(`The username "${newUser}" is available.`);
    }
});
