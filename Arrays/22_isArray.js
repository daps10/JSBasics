// Javascript Array isArray()

// The isArray() method checks whether the passed argument is an array or not.

let numbers = [1, 2, 3, 4];

// checking whether numbers is an array or not
console.log(Array.isArray(numbers)); // true

let text = "JavaScript";

// checking whether text is an array or not
console.log(Array.isArray(text)); // false

/*
====== isArray() Parameters
- The isArray() method takes a single parameter:
- value - The value to be checked.

====== isArray() Return Value
- The isArray() method returns:
- true if the passed value is Array
- false if the passed value is not Array

*/


// Example
// passing an empty array []
console.log(Array.isArray([])); // true 

// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true

// passing a boolean value
console.log(Array.isArray(true)); // false

// passing undefined
console.log(Array.isArray(undefined)); // false

// not passing any argument in isArray()
console.log(Array.isArray()); // false 

