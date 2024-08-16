/* Cars: Write a function that stores information about a car in a Object. The function should
always receive a manufacturer and a model name. It should then accept an arbitrary number of
keyword arguments. Call the function with the required information and two other name-value
pairs, such as a color or an optional feature. Print the Object that’s returned to make sure
all the information was stored correctly. */

function makeCar(manufacturer: string, model: string, carInfo: { [key: string]: any }): object {
    const car = {
        manufacturer,
        model,
        ...carInfo
    };
    return car;
}

// Calling the function with required arguments and additional key-value pairs
const car1 = makeCar("Toyota", "Corolla", { color: "blue", sunroof: true });
const car2 = makeCar("Tesla", "Model S", { color: "red", autopilot: true });
const car3 = makeCar("Ford", "Mustang", { year: 2024, trim: "GT" });

// Printing the returned objects
console.log(car1);
console.log(car2);
console.log(car3);
