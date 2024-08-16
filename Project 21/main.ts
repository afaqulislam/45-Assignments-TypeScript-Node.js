/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items. */

// Define interfaces for different item types
interface Book {
    title: string;
    author: string;
    pages: number;
  }
  

  interface Furniture {
    name: string;
    material: string;
    color: string;
  }
  
  // Create objects for each item type
  
  const myBook: Book = {
    title: "1984",
    author: "George Orwell",
    pages: 328,
  };
  
  const myFurniture: Furniture = {
    name: "Dining Table",
    material: "Wood",
    color: "Brown"
  };

  console.log(myBook);
  console.log("<---------------------------------------------------->");
  console.log(myFurniture);
  

  