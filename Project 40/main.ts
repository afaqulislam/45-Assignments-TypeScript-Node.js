/* Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries
representing different albums. Print each return value to show that Objects are storing 
the album information correctly. Add an optional parameter to make_album() that allows you
to store the number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new function call that
includes the number of tracks on an album. */

// Define the make_album function
function make_album(artist: string, title: string, tracks?: number) {
    // Create an album object
    let album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title,
    };

    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Use the function to create three albums
const album1 = make_album("Afaq", "Afaq No 1");
const album2 = make_album("Ausaf", "Ausaf No 1");
const album3 = make_album("Ali", "Ali No 1");

// Print the returned album objects
console.log(album1);
console.log(album2);
console.log(album3);

// Create an album with the number of tracks specified
const album4 = make_album("Zia", "Master of Coding", 8);

// Print the album with the number of tracks
console.log(album4);
