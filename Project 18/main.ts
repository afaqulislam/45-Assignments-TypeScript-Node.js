/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

//making array of countries and print it Original Order
let countriesToVisit : String[] = ["Canada","Denmark","Brazil","America",];
console.log("Origin Order:",countriesToVisit);

//print the array in Alphabetical Order
console.log("alphabetical Order:",[...countriesToVisit].sort());

//show that the array is still in Original Order
console.log("Still in Original Order:", countriesToVisit);

// print the array in Reverse Order
console.log("Revers Order:",[...countriesToVisit].reverse());

//show that the array is still in Original Order
console.log("Still in Original Order:",countriesToVisit);

// we have change the Original array Now in Reverse Order
console.log("Original Order Reverse:", countriesToVisit.reverse());

// print the array to show  that it's back in Original Order
console.log("Back To  Original Order:", countriesToVisit.reverse());

// print array to show that the Order is Alphabetical Now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have change again original Order in again Reverse Order Now
console.log("Original Order Reverse Again:", countriesToVisit.reverse());

