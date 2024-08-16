/* Think of something you could store in a array. For example, you could make a
 list of mountains, rivers, countries, cities, languages,
  or anything else you’d like. Write a program that creates a list 
  containing these items.
 */


// Define arrays to store lists of various items
// List of mountains
let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga"];
// Print the list of mountains
console.log("List of Mountains:");
mountains.forEach(mountain => {
    console.log(mountain);
});
console.log(); // Newline for better readability

// List of rivers
let rivers: string[] = ["Nile", "Amazon", "Yangtze"];
// Print the list of rivers
console.log("List of Rivers:");
rivers.forEach(river => {
    console.log(river);
});
console.log(); // Newline for better readability

// List of countries
let countries: string[] = ["United States", "China", "Canada"];
// Print the list of countries
console.log("List of Countries:");
countries.forEach(country => {
    console.log(country);
});
console.log(); // Newline for better readability

// List of cities
let cities: string[] = ["New York", "London", "Tokyo"];
// Print the list of cities
console.log("List of Cities:");
cities.forEach(city => {
    console.log(city);
});
console.log(); // Newline for better readability

// List of languages
let languages: string[] = ["English", "Spanish", "Mandarin"];

// Print the list of languages
console.log("List of Languages:");
languages.forEach((language) => {
    console.log(language);
});
console.log(); // Newline for better readability
