/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with
a message that reads I love TypeScript. Make a large shirt and a medium shirt with the
default message, and a shirt of any size with a different message. */

// Define the make_shirt function with default parameters
function make_shirt(size: string, message: string ): void {
    console.log(`The shirt size is ${size}, and the message printed on it: "${message}".`);
}

// Make a large shirt with the default message
make_shirt( "Large", "I like TypeScript");

// Make a medium shirt with the default message
make_shirt("Medium", "I like TypeScript");

// Make a shirt of any size with a different message
make_shirt("Small", "Coding is life");
