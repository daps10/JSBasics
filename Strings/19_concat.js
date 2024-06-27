// JavaScript String concat()

// The concat() method concatenates given arguments to the given string.

// Example
let emptyString = "";

// joint arguments string
let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString); // Output: JavaScript is fun.

/*
=========== concat() Parameters
- The concat() method takes in an arbitrary number of strings to concatenate to str.

=========== concat() Return Value
- Returns a new string containing the combined text of the strings provided.

*/

// Example: Using concat() method
console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(4, 5)); // 45

let str1 = "Hello";
let str2 = "World";

// concatenating two strings
let newStr = str1.concat(", ", str2, "!");
console.log(newStr); // Hello, World!


